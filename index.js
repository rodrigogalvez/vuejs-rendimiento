"use strict";

import Cronometer from './cronometer.js';
import generateID from './uuid.js';

let app = new Vue({
    el: "#app",
    data: {
        maxAttemps: 5000,
        lapseNormalArrayWithSet: 0,
        lapseNamedArray: 0,
        lapseNormalArray: 0,
        lapseSet: 0,
        countNormalArrayWithSet: 0,
        countNamedArray: 0,
        countNormalArray: 0,
        countSet: 0
    },
    methods: {
        testNormalArrayWithSet() {
            let NormalArrayWithSet = [];
            let cronometer = new Cronometer("NormalArrayWithSet");
            cronometer.start();
            for (let i = 0; i < this.maxAttemps; i++) {
                let id = generateID();
                NormalArrayWithSet.push(id);
            }
            let set = new Set(NormalArrayWithSet);
            this.lapseNormalArrayWithSet += cronometer.stop();
            this.countNormalArrayWithSet++;
        },
        testNamedArray() {
            let namedArray = {};
            let cronometer = new Cronometer("NamedArray");
            cronometer.start();
            for (let i = 0; i < this.maxAttemps; i++) {
                let id = generateID();
                if (!(id in namedArray)) {
                    namedArray[id] = true;
                }
            }
            this.lapseNamedArray += cronometer.stop();
            this.countNamedArray++;
        },
        testNormalArray() {
            let normalArray = [];
            let cronometer = new Cronometer("NormalArray");
            cronometer.start();
            for (let i = 0; i < this.maxAttemps; i++) {
                let id = generateID();
                if (!normalArray.includes(id)) {
                    normalArray.push(id);
                }
            }
            this.lapseNormalArray += cronometer.stop();
            this.countNormalArray++;
        },
        testSet() {
            let usingSet = new Set();
            let cronometer = new Cronometer("usingSet");
            cronometer.start();
            for (let i = 0; i < this.maxAttemps; i++) {
                let id = generateID();
                if (!usingSet.has(id)) {
                    usingSet.add(id);
                }
            }
            this.lapseSet += cronometer.stop();
            this.countSet++;
        }
    }

})
