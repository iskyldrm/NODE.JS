"use strict";
exports.__esModule = true;
var animal_1 = require("./animal");
function HayvanBesle(hayvan) {
    console.log(hayvan.cins + " beslendi");
}
var kartal = new animal_1.kus("kartal", 20);
HayvanBesle(kartal);
