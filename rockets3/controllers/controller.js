"use strict";
var rocket1 = new Rocket('32WESSDS');
rocket1.addThruster(new Thruster(10, 0));
rocket1.addThruster(new Thruster(30, 0));
rocket1.addThruster(new Thruster(80, 0));
var rocket2 = new Rocket('LDSFJA32');
rocket2.addThruster(new Thruster(30, 0));
rocket2.addThruster(new Thruster(40, 0));
rocket2.addThruster(new Thruster(50, 0));
rocket2.addThruster(new Thruster(50, 0));
rocket2.addThruster(new Thruster(30, 0));
rocket2.addThruster(new Thruster(10, 0));
var infoRocket = document.getElementById('infoRocket');
var elementRocket1 = document.createElement('div');
function showRockets() {
    var rockets = [rocket1, rocket2];
    for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
        var i_1 = rockets_1[_i];
        console.log(i_1);
        elementRocket1.innerHTML += '<br> <i class="fa fa-rocket"></i> ROCKET ' + i_1.code + ' -' + ' MAX POWER THRUSTERS:  ';
        infoRocket.appendChild(elementRocket1);
        i_1.thrusters.forEach(function (Thruster) {
            elementRocket1.innerHTML += Thruster.power + '  ';
            infoRocket.appendChild(elementRocket1);
        });
        elementRocket1.innerHTML += '<br> VELOCITY ROCKET:  ' + i_1.velocityRocket() + '<br> ';
    }
    var button = document.getElementById("create-rocket");
    button.classList.add('hide');
    for (var i = 0; i < rockets.length; i++) {
        var button = document.getElementById('accelerate-rocket' + (i + 1)); //rocket 1&2
        button.classList.remove('hide');
        var button = document.getElementById('brake-rocket' + (i + 1)); //rocket 1&2
        button.classList.remove('hide');
    }
}
function accelerateRocket(x) {
    elementRocket1.innerHTML = ''; //not repeating
    x.accelerate();
    var rockets = [rocket1, rocket2];
    for (var _i = 0, rockets_2 = rockets; _i < rockets_2.length; _i++) {
        var i = rockets_2[_i];
        console.log(i);
        elementRocket1.innerHTML += '<br> <i class="fa fa-rocket"></i> ROCKET ' + i.code + ' -' + 'POWER THRUSTERS:  ';
        infoRocket.appendChild(elementRocket1);
        i.thrusters.forEach(function (Thruster) {
            elementRocket1.innerHTML += Thruster.actualPower + '  ';
            infoRocket.appendChild(elementRocket1);
        });
        elementRocket1.innerHTML += '<br> VELOCITY ROCKET:  ' + i.velocityRocket() + '<br> ';
    }
}
function brakeRocket(x) {
    elementRocket1.innerHTML = ''; //not repeating
    x.brake();
    var rockets = [rocket1, rocket2];
    for (var _i = 0, rockets_3 = rockets; _i < rockets_3.length; _i++) {
        var i = rockets_3[_i];
        console.log(i);
        elementRocket1.innerHTML += '<br> <i class="fa fa-rocket"></i> ROCKET ' + i.code + ' -' + ' POWER THRUSTERS:  ';
        infoRocket.appendChild(elementRocket1);
        i.thrusters.forEach(function (Thruster) {
            elementRocket1.innerHTML += Thruster.actualPower + '  ';
            infoRocket.appendChild(elementRocket1);
        });
        elementRocket1.innerHTML += '<br> VELOCITY ROCKET:  ' + i.velocityRocket() + '<br> ';
    }
}
