module.exports = [
	{
		name : "SparkFun_APDS9960",
		blocks : [
		  {
              xml: `<sep gap="32"></sep><label text="คำสั่งเลือกการเชื่อมต่อ Sensor " web-class="headline"></label>`
          },
		  'SparkFun_APDS9960_Setup',
		  {
              xml: `<sep gap="32"></sep><label text="อ่านการเคลื่อนไหวของมือ" web-class="headline"></label>`
          },
		  'SparkFun_APDS9960_enableGestureSensor',
		  'SparkFun_APDS9960_GestureAvailable',
          'SparkFun_APDS9960_readGesture',
          {
              xml: `<sep gap="32"></sep><label text="อ่านค่าสี" web-class="headline"></label>`
          },
          'SparkFun_APDS9960_enableLightSensor',
          'SparkFun_APDS9960_updateColor',
          'SparkFun_APDS9960_Color_ambient_light',
          {
              xml: `<sep gap="32"></sep><label text="อ่านค่าระยะทาง" web-class="headline"></label>`
          },
          'SparkFun_APDS9960_enableProximitySensor',
          'SparkFun_APDS9960_UpdateProximity',
          'SparkFun_APDS9960_readProximity',

          //'DHT_ESP32_readHumid',
			
		]
	}	
];