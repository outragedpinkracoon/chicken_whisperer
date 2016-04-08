"use strict"

class Chicken {

  constructor(options){
    this.name = options.name;
    this.speed = options.speed;
    this.scare = options.scare;
  }
}

module.exports = Chicken;