"use strict";
// abstract classes provide similar functionality as interfaces as we
// saw in the second.ts, but they do have some differences. 
// in abstract class all the class variables must be declared as in a
// constructor
class TakePhoto2 {
    // the below doesn't work and we need a constructor
    // cameraMode: string 
    // filter: string 
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
// we cannot create an instance of an abstract class
// so the below gives us an error
// const myohoto = new TakePhoto("burst","somthing")
// creating an class that takes in the abstract class must use
// super to initialize the abstract class variables and also
// must implement all the abstract functions
class Instagram2 extends TakePhoto2 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const hc = new Instagram("test", "Test", 3);
// below doesnt work as it doesnt exist on the type Instagram2
// hc.getReelTime()
