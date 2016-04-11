"use strict"

class ChickenPen {

  constructor(chickens){
    if(!chickens)
      throw new Error("Must have chickens");
    this.chickens = chickens;
  }

  chickenCount(){
    return this.chickens.length;
  }

}

module.exports = ChickenPen;