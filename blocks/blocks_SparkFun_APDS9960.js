Blockly.Blocks['SparkFun_APDS9960_Setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("APDS9960_1",null,["Plugin.SparkFun_APDS9960"],["Plugin.SparkFun_APDS9960"]), "instance")
        .appendField("Channel")
        .appendField(new Blockly.FieldDropdown([
                                              ["KBChain", "0"],
                                              ["I2C0", "1"]]), "pin");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("setup sensor APDS9960 ");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['SparkFun_APDS9960_enableGestureSensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("APDS9960_1",null,["Plugin.SparkFun_APDS9960"],["Plugin.SparkFun_APDS9960"]), "instance")
        .appendField(".enableGestureSensor")
        .appendField(new Blockly.FieldDropdown([["True","1"], ["False","0"]]), "status");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("");
  }
};
Blockly.Blocks['SparkFun_APDS9960_enableLightSensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("APDS9960_1",null,["Plugin.SparkFun_APDS9960"],["Plugin.SparkFun_APDS9960"]), "instance")
        .appendField(".enableLightSensor")
        .appendField(new Blockly.FieldDropdown([["True","1"], ["False","0"]]), "status");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("");
  }
};
Blockly.Blocks["SparkFun_APDS9960_GestureAvailable"] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("APDS9960_1",null,["Plugin.SparkFun_APDS9960"],["Plugin.SparkFun_APDS9960"]), "instance")
        .appendField('.GestureAvailable');
    this.appendStatementInput('HANDLER');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['SparkFun_APDS9960_readGesture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("APDS9960_1",null,["Plugin.SparkFun_APDS9960"],["Plugin.SparkFun_APDS9960"]), "instance")
        .appendField('.ReadGesture');
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour(165);
 this.setTooltip("read readGesture");
 this.setHelpUrl("");
  }
};
/*Blockly.Blocks['SparkFun_APDS9960_readColor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("APDS9960_1",null,["Plugin.SparkFun_APDS9960"],["Plugin.SparkFun_APDS9960"]), "instance")
        .appendField('.Read_Color');
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour(165);
 this.setTooltip("read humidity in percentage");
 this.setHelpUrl("");
  }
};*/
Blockly.Blocks['SparkFun_APDS9960_enableLightSensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("APDS9960_1",null,["Plugin.SparkFun_APDS9960"],["Plugin.SparkFun_APDS9960"]), "instance")
        .appendField(".enableLightSensor")
        .appendField(new Blockly.FieldDropdown([["True","1"], ["False","0"]]), "status");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("");
  }
};


/*Blockly.Blocks['SparkFun_APDS9960_Color_ambient_light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("APDS9960_1",null,["Plugin.SparkFun_APDS9960"],["Plugin.SparkFun_APDS9960"]), "instance")
        .appendField('.Color_ambient_light');
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour(165);
 this.setTooltip("read humidity in percentage");
 this.setHelpUrl("");
  }
};*/
Blockly.Blocks['SparkFun_APDS9960_updateColor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("APDS9960_1",null,["Plugin.SparkFun_APDS9960"],["Plugin.SparkFun_APDS9960"]), "instance")
        .appendField('.updateColor');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("");
  }
};
Blockly.Blocks['SparkFun_APDS9960_Color_ambient_light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("APDS9960_1",null,["Plugin.SparkFun_APDS9960"],["Plugin.SparkFun_APDS9960"]), "instance")
        .appendField('.ReadColor:')
        .appendField(new Blockly.FieldDropdown([["ambient_light","ambient_light"],
                                                ["red_light","red_light"],
                                                ["blue_light","blue_light"],
                                                ["green_light","green_light"]]), "color");
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour(165);
 this.setTooltip("read Color from Sensor");
 this.setHelpUrl("");
  }
};






Blockly.Blocks['SparkFun_APDS9960_enableProximitySensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("APDS9960_1",null,["Plugin.SparkFun_APDS9960"],["Plugin.SparkFun_APDS9960"]), "instance")
        .appendField(".enableProximitySensor")
        .appendField(new Blockly.FieldDropdown([["True","1"], ["False","0"]]), "status");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("");
  }
};
Blockly.Blocks['SparkFun_APDS9960_UpdateProximity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("APDS9960_1",null,["Plugin.SparkFun_APDS9960"],["Plugin.SparkFun_APDS9960"]), "instance")
        .appendField('.UpdateProximity');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("");
  }
};
Blockly.Blocks['SparkFun_APDS9960_readProximity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("APDS9960_1",null,["Plugin.SparkFun_APDS9960"],["Plugin.SparkFun_APDS9960"]), "instance")
        .appendField('.readProximity');
    this.setInputsInline(true);
    this.setOutput(true, ["int", "Number"]);
    this.setColour(165);
 this.setTooltip("read readProximity");
 this.setHelpUrl("");
  }
};