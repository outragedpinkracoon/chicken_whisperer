"use strict"

class Die {

  constructor(sides) {
    this.sides = sides ? sides : 6;
  }

  roll(){
    return Math.ceil(Math.random() * this.sides);
  }
}

module.exports = Die