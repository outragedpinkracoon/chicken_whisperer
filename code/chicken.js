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
  }

  scare(value = 1){
    if(this.speed === 0) return;
    if(!value) value = 1;
    this.speed = this.speed - value;
  }
  
}

module.exports = Chicken;