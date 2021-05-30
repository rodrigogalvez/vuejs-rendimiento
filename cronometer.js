class Cronometer {
    constructor(name) {
        this.name = name;
        this.startingMarker = 0;
        this.finalMarker = 0;
        this.leapMarker = 0;
        this.lapse = 0;
    }
    start() {
        this.startingMarker = +new Date();
        this.finalMarker = this.startingMarker;
        this.leapMarker = this.startingMarker;
        this.lapse = 0;
        // console.log(`${this.name} - START - ${this.startingMarker}`);
        return this.startingMarker;
    }
    stop() {
        this.finalMarker = +new Date();
        this.leapMarker = this.finalMarker;
        this.lapse = this.finalMarker - this.startingMarker;
        // console.log(`${this.name} - STOP - ${this.lapse}`);
        return this.lapse;
    }
    leap() {
        this.leapMarker = +new Date();
        this.lapse = this.leapMarker - this.finalMarker;
        this.finalMarker = this.leapMarker;
        // console.log(`${this.name} - LEAP - ${this.lapse}`);
        return this.lapse;
    }
}

export default Cronometer;