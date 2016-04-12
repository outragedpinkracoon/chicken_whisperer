"use strict"
class Turn {
  constructor(player, chickenPen){
    if (!player) throw new Error("Turn must have player");
    if (!chickenPen) throw new Error("Turn must have chicken pen");
    
    this.player = player;
    this.chickenPen = chickenPen;
    this.finished = false;
  }

}

module.exports = Turn;