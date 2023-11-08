"use strict";
// for a class to implement an interface it needs to have all the
// interface variables, its like a protocol, saying those vars are a must
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
// extending the interface variables
class Youtube {
    constructor(cameraMode, filter, burst, videoMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.videoMode = videoMode;
    }
    // implementing stories
    createStory() {
        console.log("story created");
    }
}
