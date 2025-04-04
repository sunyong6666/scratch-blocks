/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating Lua for variable blocks.
 */
'use strict';

goog.provide('Blockly.Lua.variables');

// const {NameType} = goog.require('Blockly.Names');
goog.require('Blockly.Lua');




Blockly.Lua['variables_get'] = function(block) {
  // Variable getter.
  const code =
  Blockly.Lua.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Names.VARIABLE);
  return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua['variables_set'] = function(block) {
  // Variable setter.
  const argument0 = Blockly.Lua.valueToCode(block, 'VALUE', Blockly.Lua.ORDER_NONE) || '0';
  const varName =
  Blockly.Lua.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Names.VARIABLE);
  return varName + ' = ' + argument0 + '\n';
};
