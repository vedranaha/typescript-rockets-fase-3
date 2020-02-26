class Rocket{
    code:string;
    thrusters:Thruster[]=new Array();
    
    constructor(code:string){
        this.code=code;
    }
    
    addThruster(thruster:Thruster):void{
        this.thrusters.push(thruster);
    }

    velocityRocket(){
        let suma=0;
        for(var i = 0; i < this.thrusters.length; i++){
            suma += this.thrusters[i].actualPower;
        }
        return suma;
    }

    accelerate(){
        this.thrusters.forEach(Thruster => {
            if(Thruster.actualPower<Thruster.power){
                Thruster.actualPower += 10;
            }
            return Thruster.actualPower;
        });
        return this.velocityRocket;
    }
    brake(){
        this.thrusters.forEach(Thruster => {
            if(Thruster.actualPower>=10){
                Thruster.actualPower -= 10;
            }
            return Thruster.actualPower;
        });
        return this.velocityRocket;
    }

}