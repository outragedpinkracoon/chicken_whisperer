"use strict"

class Chicken {

  constructor(options){
    this.name = options.name;
    this.speed = options.speed;
    this.scare = options.scare;
  }

  decreaseSpeed() {
    if(this.speed === 0) return;
    this.speed--;
  }

}

module.exports = Chicken;