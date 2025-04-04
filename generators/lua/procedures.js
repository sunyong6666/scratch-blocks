/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating Lua for procedure blocks.
 */
'use strict';

goog.provide('Blockly.Lua.procedures');

// const {NameType} = goog.require('Blockly.Names');
goog.require('Blockly.Lua');



Blockly.Lua['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  const funcName =
  Blockly.Lua.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Names.PROCEDURE);
  let xfix1 = '';
  if (Blockly.Lua.STATEMENT_PREFIX) {
    xfix1 += Blockly.Lua.injectId(Blockly.Lua.STATEMENT_PREFIX, block);
  }
  if (Blockly.Lua.STATEMENT_SUFFIX) {
    xfix1 += Blockly.Lua.injectId(Blockly.Lua.STATEMENT_SUFFIX, block);
  }
  if (xfix1) {
    xfix1 = Blockly.Lua.prefixLines(xfix1, Blockly.Lua.INDENT);
  }
  let loopTrap = '';
  if (Blockly.Lua.INFINITE_LOOP_TRAP) {
    loopTrap = Blockly.Lua.prefixLines(
      Blockly.Lua.injectId(Blockly.Lua.INFINITE_LOOP_TRAP, block), Blockly.Lua.INDENT);
  }
  let branch = Blockly.Lua.statementToCode(block, 'STACK');
  let returnValue = Blockly.Lua.valueToCode(block, 'RETURN', Blockly.Lua.ORDER_NONE) || '';
  let xfix2 = '';
  if (branch && returnValue) {
    // After executing the function body, revisit this block for the return.
    xfix2 = xfix1;
  }
  if (returnValue) {
    returnValue = Blockly.Lua.INDENT + 'return ' + returnValue + '\n';
  } else if (!branch) {
    branch = '';
  }
  const args = [];
  const variables = block.getVars();
  for (let i = 0; i < variables.length; i++) {
    args[i] = Blockly.Lua.nameDB_.getName(variables[i], Blockly.Names.VARIABLE);
  }
  let code = 'function ' + funcName + '(' + args.join(', ') + ')\n' + xfix1 +
      loopTrap + branch + xfix2 + returnValue + 'end\n';
  code = Blockly.Lua.scrub_(block, code);
  // Add % so as not to collide with helper functions in definitions list.
  Blockly.Lua.definitions_['%' + funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.Lua['procedures_defnoreturn'] = Blockly.Lua['procedures_defreturn'];

Blockly.Lua['procedures_callreturn'] = function(block) {
  // Call a procedure with a return value.
  const funcName =
  Blockly.Lua.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Names.PROCEDURE);
  const args = [];
  const variables = block.getVars();
  for (let i = 0; i < variables.length; i++) {
    args[i] = Blockly.Lua.valueToCode(block, 'ARG' + i, Blockly.Lua.ORDER_NONE) || 'nil';
  }
  const code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.Lua.ORDER_HIGH];
};

Blockly.Lua['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  // Generated code is for a function call as a statement is the same as a
  // function call as a value, with the addition of line ending.
  const tuple = Blockly.Lua['procedures_callreturn'](block);
  return tuple[0] + '\n';
};

Blockly.Lua['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  const condition =
  Blockly.Lua.valueToCode(block, 'CONDITION', Blockly.Lua.ORDER_NONE) || 'false';
  let code = 'if ' + condition + ' then\n';
  if (Blockly.Lua.STATEMENT_SUFFIX) {
    // Inject any statement suffix here since the regular one at the end
    // will not get executed if the return is triggered.
    code +=
    Blockly.Lua.prefixLines(Blockly.Lua.injectId(Blockly.Lua.STATEMENT_SUFFIX, block), Blockly.Lua.INDENT);
  }
  if (block.hasReturnValue_) {
    const value = Blockly.Lua.valueToCode(block, 'VALUE', Blockly.Lua.ORDER_NONE) || 'nil';
    code += Blockly.Lua.INDENT + 'return ' + value + '\n';
  } else {
    code += Blockly.Lua.INDENT + 'return\n';
  }
  code += 'end\n';
  return code;
};
