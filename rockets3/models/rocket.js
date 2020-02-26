"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code) {
        this.thrusters = new Array();
        this.code = code;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    Rocket.prototype.velocityRocket = function () {
        var suma = 0;
        for (var i = 0; i < this.thrusters.length; i++) {
            suma += this.thrusters[i].actualPower;
        }
        return suma;
    };
    Rocket.prototype.accelerate = function () {
        this.thrusters.forEach(function (Thruster) {
            if (Thruster.actualPower < Thruster.power) {
                Thruster.actualPower += 10;
            }
            return Thruster.actualPower;
        });
        return this.velocityRocket;
    };
    Rocket.prototype.brake = function () {
        this.thrusters.forEach(function (Thruster) {
            if (Thruster.actualPower >= 10) {
                Thruster.actualPower -= 10;
            }
            return Thruster.actualPower;
        });
        return this.velocityRocket;
    };
    return Rocket;
}());
