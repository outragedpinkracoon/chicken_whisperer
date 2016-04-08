"use strict"

class Player {

  constructor(name) {
    this.name = name;
    this.chickens = [];
  }

  addChicken(chicken){
    this.chickens.push(chicken)
  }

  chickenCount(){
    return this.chickens.length;
  }
}

module.exports = Player