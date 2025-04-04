/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating Lua for dynamic variable blocks.
 */
'use strict';

goog.provide('Blockly.Lua.variablesDynamic');

goog.require('Blockly.Lua');
/** @suppress {extraRequire} */
goog.require('Blockly.Lua.variables');


// Lua is dynamically typed.
Blockly.Lua['variables_get_dynamic'] = Blockly.Lua['variables_get'];
Blockly.Lua['variables_set_dynamic'] = Blockly.Lua['variables_set'];
