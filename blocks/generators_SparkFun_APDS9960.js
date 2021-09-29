Blockly.JavaScript['SparkFun_APDS9960_Setup'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_dht_type = block.getFieldValue('dht_type');
    var number_pin = block.getFieldValue('pin');
    if(number_pin == '0'){
      var code = `
      #EXTINC#include "SparkFun_APDS9960.h"#END

      #VARIABLE SparkFun_APDS9960 ${variable_instance}=SparkFun_APDS9960();#END
      #VARIABLE uint16_t ambient_light = 0;#END
      #VARIABLE uint16_t blue_light = 0;#END
      #VARIABLE uint16_t red_light = 0;#END
      #VARIABLE uint16_t green_light = 0;#END
      #VARIABLE uint8_t proximity_data = 0;#END
      
      Wire1.begin(4,5);
      ${variable_instance}.init(Wire1);
      `;
    }
    if(number_pin == '1'){
      var code = `
      #EXTINC#include "SparkFun_APDS9960.h"#END

      #VARIABLE SparkFun_APDS9960 ${variable_instance}=SparkFun_APDS9960();#END
      Wire.begin();
      ${variable_instance}.init(Wire);
      `;
    }
    
    return code;
  };
  Blockly.JavaScript['SparkFun_APDS9960_enableGestureSensor'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var variable_status = block.getFieldValue('status');
    var code = `${variable_instance}.enableGestureSensor(${variable_status});`;
    return code;
  };
  

  Blockly.JavaScript['SparkFun_APDS9960_GestureAvailable'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var statements_code = Blockly.JavaScript.statementToCode(block, 'HANDLER');
  // TODO: Assemble JavaScript into code variable.
  var code = `if(${variable_instance}.isGestureAvailable() ) \n{${statements_code}}\n`;
  return code;
  };
  Blockly.JavaScript['SparkFun_APDS9960_readGesture'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.readGesture()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };


  Blockly.JavaScript['SparkFun_APDS9960_enableLightSensor'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var variable_status = block.getFieldValue('status');
    var code = `${variable_instance}.enableLightSensor(${variable_status});`;
    return code;
  };
  Blockly.JavaScript['SparkFun_APDS9960_updateColor'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `if (  !${variable_instance}.readAmbientLight(ambient_light) ||
        !${variable_instance}.readRedLight(red_light) ||
        !${variable_instance}.readGreenLight(green_light) ||
        !${variable_instance}.readBlueLight(blue_light) ) {}\n`;
  return code;
  };
  Blockly.JavaScript['SparkFun_APDS9960_Color_ambient_light'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var variable_color = block.getFieldValue('color');
    var code = variable_color;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  
  Blockly.JavaScript['SparkFun_APDS9960_enableProximitySensor'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var variable_status = block.getFieldValue('status');
    
    var code = `if (!${variable_instance}.setProximityGain(PGAIN_2X) ) {}\n
                if ( ${variable_instance}.enableProximitySensor(${variable_status})) {}\n`;
    return code;
  };
  Blockly.JavaScript['SparkFun_APDS9960_UpdateProximity'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `if ( !${variable_instance}.readProximity(proximity_data) ) {}\n`;
    return code; 
  };
  Blockly.JavaScript['SparkFun_APDS9960_readProximity'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `proximity_data`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
