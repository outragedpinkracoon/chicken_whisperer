"use strict"

class ChickenPen {

  constructor(chickens){
    if(!chickens)
      throw new Error("Must have chickens");
  }

}

module.exports = ChickenPen;