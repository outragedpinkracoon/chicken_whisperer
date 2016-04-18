// var Chicken = function(options){
//   var chicken = Object.create(chickenProto)
//   chicken.name = options.name;
//   chicken.speed = options.speed;
//   chicken.scare = options.scare;
//   return chicken;
// }

// var chickenProto = {
//   decreaseSpeed: function(value) {
//     if(this.speed === 0) return;
//     if(!value) value = 1;
//     this.speed = this.speed - value;
//   }
// }

class Chicken {

  constructor(options){
    this.name = options.name;
    this.speed = options.speed;
    this.maxScare = options.maxScare;
    this.maxSpeed = options.speed;
    this.scare = options.maxScare;
  }

  reduceScare(value = 1){
    if(this.scare === 0) return;
    this.scare = this.scare - value;
  }

  reduceSpeed(value = 1){
    if(this.speed === 0) return;
    this.speed = this.speed - value;
  }

  refresh(){
    this.speed = this.maxSpeed;
    this.scare = this.maxScare
  }


  
}

module.exports = Chicken;