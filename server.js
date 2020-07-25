const app = require('express')()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;

const port = new SerialPort('COM4');
const parser = new Readline();
port.pipe(parser);
io.on('connection',(socket) => {
    
})
parser.on('data', function (data){
    try {
        data = JSON.parse(data); 
        io.emit('HCSR04',data);
        // console.log(data);
    } catch(e) {
    //console.log("onData-err : ", e); 
    }
});
// port.write('ROBOT PLEASE RESPOND\n');
// board.on("ready", function() {
//     console.log("### Board ready!");
//     io.on('connection',(socket) => {
        
//         console.log("### Socket ready!");

//         const led = new five.Led(13);
//         socket.on("LED",(data)=>{
//             if(data){
//                 led.on()
//                 xx['LED']=true
//             } else {
//                 led.off()
//                 xx['LED']=false
//             }
//         });

//         const proximity = new five.Proximity({
//             controller: HCSR04, // Custom controller
//             triggerPin: 3,
//             echoPin: 2
//           });

//         proximity.on("data", function (){
//             let data = this.cm
//             console.log(data)
//         });
//     })
// })

http.listen(3001, function(){
    console.log('listening on *:3001');
});