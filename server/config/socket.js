const AWS = require('aws-sdk');
const AWSMqtt = require('aws-mqtt');
const WebSocket = require('ws');
const client = AWSMqtt.connect({
    WebSocket: WebSocket,
    region: AWS.config.region,
    credentials: AWS.config.credentials,
    endpoint: 'a1qs749674of68.iot.us-east-1.amazonaws.com', // NOTE: get this value with `aws iot describe-endpoint`
    clientId: 'iotconsole-1484568658306-1' + (Math.floor((Math.random() * 100000) + 1)), // clientId to register with MQTT broker. Need to be unique per client 
  },(error,connect)=>{
    if(error)
    {
     console.log("error" +error);
    }
  });
  
  client.on('connect', () => {
    console.log("inside connect")
    client.subscribe('/Devices/+/status');
    client.subscribe('/Devices/+/automate');
    client.subscribe('/Devices/+/tamper');
  });  
  client.on('offline', () => {
  client.subscribe('/myTopic/off');
  client.publish('/myTopic/off','i am gone');
  });
  
module.exports = client;