"use strict"

class Dice {

  constructor(sides) {
    this.sides = sides;
  }

  roll(){
    return Math.ceil(Math.random() * this.sides);
  }
}

module.exports = Dice