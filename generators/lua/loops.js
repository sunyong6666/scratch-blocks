/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating Lua for loop blocks.
 */
'use strict';

goog.provide('Blockly.Lua.loops');

// const stringUtils = goog.require('Blockly.utils.string');
// const {NameType} = goog.require('Blockly.Names');
goog.require('Blockly.Lua');



/**
 * This is the text used to implement a <pre>continue</pre>.
 * It is also used to recognise <pre>continue</pre>s in generated code so that
 * the appropriate label can be put at the end of the loop body.
 * @const {string}
 */
const CONTINUE_STATEMENT = 'goto continue\n';

/**
 * If the loop body contains a "goto continue" statement, add a continue label
 * to the loop body. Slightly inefficient, as continue labels will be generated
 * in all outer loops, but this is safer than duplicating the logic of
 * blockToCode.
 *
 * @param {string} branch Generated code of the loop body
 * @return {string} Generated label or '' if unnecessary
 */
const addContinueLabel = function(branch) {
  if (branch.indexOf(CONTINUE_STATEMENT) !== -1) {
    // False positives are possible (e.g. a string literal), but are harmless.
    return branch + Blockly.Lua.INDENT + '::continue::\n';
  } else {
    return branch;
  }
};

Blockly.Lua['controls_repeat_ext'] = function(block) {
  // Repeat n times.
  let repeats;
  if (block.getField('TIMES')) {
    // Internal number.
    repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    // External number.
    repeats = Blockly.Lua.valueToCode(block, 'TIMES', Blockly.Lua.ORDER_NONE) || '0';
  }
  if (Blockly.utils.string.isNumber(repeats)) {
    repeats = parseInt(repeats, 10);
  } else {
    repeats = 'math.floor(' + repeats + ')';
  }
  let branch = Blockly.Lua.statementToCode(block, 'DO');
  branch = Blockly.Lua.addLoopTrap(branch, block);
  branch = addContinueLabel(branch);
  const loopVar = Blockly.Lua.nameDB_.getDistinctName('count', Blockly.Names.VARIABLE);
  const code =
      'for ' + loopVar + ' = 1, ' + repeats + ' do\n' + branch + 'end\n';
  return code;
};

// Blockly.Lua['controls_repeat'] = Blockly.Lua['controls_repeat_ext'];

Blockly.Lua['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  const until = block.getFieldValue('MODE') === 'UNTIL';
  let argument0 =
  Blockly.Lua.valueToCode(
          block, 'BOOL', until ? Blockly.Lua.ORDER_UNARY : Blockly.Lua.ORDER_NONE) ||
      'false';
  let branch = Blockly.Lua.statementToCode(block, 'DO');
  branch = Blockly.Lua.addLoopTrap(branch, block);
  branch = addContinueLabel(branch);
  if (until) {
    argument0 = 'not ' + argument0;
  }
  return 'while ' + argument0 + ' do\n' + branch + 'end\n';
};

Blockly.Lua['controls_for'] = function(block) {
  // For loop.
  const variable0 =
  Blockly.Lua.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Names.VARIABLE);
  const startVar = Blockly.Lua.valueToCode(block, 'FROM', Blockly.Lua.ORDER_NONE) || '0';
  const endVar = Blockly.Lua.valueToCode(block, 'TO', Blockly.Lua.ORDER_NONE) || '0';
  const increment = Blockly.Lua.valueToCode(block, 'BY', Blockly.Lua.ORDER_NONE) || '1';
  let branch = Blockly.Lua.statementToCode(block, 'DO');
  branch = Blockly.Lua.addLoopTrap(branch, block);
  branch = addContinueLabel(branch);
  let code = '';
  let incValue;
  if (Blockly.utils.string.isNumber(startVar) && Blockly.utils.string.isNumber(endVar) &&
  Blockly.utils.string.isNumber(increment)) {
    // All arguments are simple numbers.
    const up = Number(startVar) <= Number(endVar);
    const step = Math.abs(Number(increment));
    incValue = (up ? '' : '-') + step;
  } else {
    code = '';
    // Determine loop direction at start, in case one of the bounds
    // changes during loop execution.
    incValue =
    Blockly.Lua.nameDB_.getDistinctName(variable0 + '_inc', Blockly.Names.VARIABLE);
    code += incValue + ' = ';
    if (Blockly.utils.string.isNumber(increment)) {
      code += Math.abs(increment) + '\n';
    } else {
      code += 'math.abs(' + increment + ')\n';
    }
    code += 'if (' + startVar + ') > (' + endVar + ') then\n';
    code += Blockly.Lua.INDENT + incValue + ' = -' + incValue + '\n';
    code += 'end\n';
  }
  code +=
      'for ' + variable0 + ' = ' + startVar + ', ' + endVar + ', ' + incValue;
  code += ' do\n' + branch + 'end\n';
  return code;
};

Blockly.Lua['controls_forEach'] = function(block) {
  // For each loop.
  const variable0 =
  Blockly.Lua.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Names.VARIABLE);
  const argument0 = Blockly.Lua.valueToCode(block, 'LIST', Blockly.Lua.ORDER_NONE) || '{}';
  let branch = Blockly.Lua.statementToCode(block, 'DO');
  branch = Blockly.Lua.addLoopTrap(branch, block);
  branch = addContinueLabel(branch);
  const code = 'for _, ' + variable0 + ' in ipairs(' + argument0 + ') do \n' +
      branch + 'end\n';
  return code;
};

Blockly.Lua['controls_flow_statements'] = function(block) {
  // Flow statements: continue, break.
  let xfix = '';
  if (Blockly.Lua.STATEMENT_PREFIX) {
    // Automatic prefix insertion is switched off for this block.  Add manually.
    xfix += Blockly.Lua.injectId(Blockly.Lua.STATEMENT_PREFIX, block);
  }
  if (Blockly.Lua.STATEMENT_SUFFIX) {
    // Inject any statement suffix here since the regular one at the end
    // will not get executed if the break/continue is triggered.
    xfix += Blockly.Lua.injectId(Blockly.Lua.STATEMENT_SUFFIX, block);
  }
  if (Blockly.Lua.STATEMENT_PREFIX) {
    const loop = block.getSurroundLoop();
    if (loop && !loop.suppressPrefixSuffix) {
      // Inject loop's statement prefix here since the regular one at the end
      // of the loop will not get executed if 'continue' is triggered.
      // In the case of 'break', a prefix is needed due to the loop's suffix.
      xfix += Blockly.Lua.injectId(Blockly.Lua.STATEMENT_PREFIX, loop);
    }
  }
  switch (block.getFieldValue('FLOW')) {
    case 'BREAK':
      return xfix + 'break\n';
    case 'CONTINUE':
      return xfix + CONTINUE_STATEMENT;
  }
  throw Error('Unknown flow statement.');
};
