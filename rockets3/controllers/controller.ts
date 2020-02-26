let rocket1 = new Rocket('32WESSDS');
rocket1.addThruster(new Thruster(10,0)); 
rocket1.addThruster(new Thruster(30,0)); 
rocket1.addThruster(new Thruster(80,0)); 

let rocket2 = new Rocket('LDSFJA32');
rocket2.addThruster(new Thruster(30,0)); 
rocket2.addThruster(new Thruster(40,0)); 
rocket2.addThruster(new Thruster(50,0)); 
rocket2.addThruster(new Thruster(50,0)); 
rocket2.addThruster(new Thruster(30,0)); 
rocket2.addThruster(new Thruster(10,0)); 

const infoRocket = <HTMLElement>document.getElementById('infoRocket');
const elementRocket1: HTMLElement = document.createElement('div');


function showRockets(){

    let rockets = [rocket1, rocket2];
    for (let i of rockets) {
        console.log(i);
        elementRocket1.innerHTML += '<br> <i class="fa fa-rocket"></i> ROCKET ' + i.code +' -' +' MAX POWER THRUSTERS:  ';
        infoRocket.appendChild(elementRocket1);
        i.thrusters.forEach(Thruster => {
            elementRocket1.innerHTML += Thruster.power + '  ';
            infoRocket.appendChild(elementRocket1);
        });
        elementRocket1.innerHTML += '<br> VELOCITY ROCKET:  ' + i.velocityRocket()+'<br> ';
    
     }
    var button = <HTMLElement>document.getElementById("create-rocket");
    button.classList.add('hide');

    for (var i = 0; i < rockets.length; i++) { 
    var button = <HTMLElement>document.getElementById('accelerate-rocket'+(i+1)); //rocket 1&2
    button.classList.remove('hide');
    var button = <HTMLElement>document.getElementById('brake-rocket'+(i+1)); //rocket 1&2
    button.classList.remove('hide');
    }
}
function accelerateRocket(x:any){
    elementRocket1.innerHTML = '';  //not repeating
    x.accelerate();
    let rockets = [rocket1, rocket2];
    for (let i of rockets) {
        console.log(i);
        elementRocket1.innerHTML += '<br> <i class="fa fa-rocket"></i> ROCKET ' + i.code +' -' +'POWER THRUSTERS:  ';
        infoRocket.appendChild(elementRocket1);
        i.thrusters.forEach(Thruster => {
            elementRocket1.innerHTML += Thruster.actualPower + '  ';
            infoRocket.appendChild(elementRocket1);
        });
        elementRocket1.innerHTML += '<br> VELOCITY ROCKET:  ' + i.velocityRocket()+'<br> ';
    }
}
function brakeRocket(x:any){
    elementRocket1.innerHTML = ''; //not repeating
    x.brake();
    let rockets = [rocket1, rocket2];
    for (let i of rockets) {
        console.log(i);
        elementRocket1.innerHTML += '<br> <i class="fa fa-rocket"></i> ROCKET ' + i.code +' -' +' POWER THRUSTERS:  ';
        infoRocket.appendChild(elementRocket1);
        i.thrusters.forEach(Thruster => {
            elementRocket1.innerHTML += Thruster.actualPower + '  ';
            infoRocket.appendChild(elementRocket1);
        });
        elementRocket1.innerHTML += '<br> VELOCITY ROCKET:  ' + i.velocityRocket()+'<br> ';
    }
}

