"use strict"

class Die {

  constructor(sides = 6) {
    this.sides = sides !== undefined ? sides : 6;
  }

  roll(){
    return Math.ceil(Math.random() * this.sides);
  }
}

module.exports = Die