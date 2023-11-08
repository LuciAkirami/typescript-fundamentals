/*
Interface here in this context is similar to Traits in Rust, for a Struct
to implement a Trait, it needs to use all the functions and the vars 
inside the given trait

Similar is the case in typescript. To implement an interface, the class must
follow / define all the vars and funcs defined in the interface
*/
interface TakePhoto {
    cameraMode: string 
    filter: string 
    burst: number
}

interface Stories {
    createStory(): void
}
// for a class to implement an interface it needs to have all the
// interface variables, its like a protocol, saying those vars are a must
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}
}

// extending the interface variables
class Youtube implements TakePhoto, Stories  {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public videoMode: string
    ) {}

    // implementing stories
    createStory(): void {
        console.log("story created");
    }
}