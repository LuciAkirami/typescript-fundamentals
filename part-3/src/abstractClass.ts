// abstract classes provide similar functionality as interfaces as we
// saw in the second.ts, but they do have some differences. 

// in abstract class all the class variables must be declared as in a
// constructor
abstract class TakePhoto2 {
    // the below doesn't work and we need a constructor
    // cameraMode: string 
    // filter: string 
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    
    // defining abstract methods
    abstract getSepia(): void
    getReelTime(): number{
        //some complex calculation
        return 8
    }
}

// we cannot create an instance of an abstract class
// so the below gives us an error
// const myohoto = new TakePhoto("burst","somthing")

// creating an class that takes in the abstract class must use
// super to initialize the abstract class variables and also
// must implement all the abstract functions
class Instagram2 extends TakePhoto2{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter)
        }

        getSepia(): void {
            console.log("Sepia");
            
        }
}

const hc = new Instagram("test", "Test", 3)

// below doesnt work as it doesnt exist on the type Instagram2
// hc.getReelTime()