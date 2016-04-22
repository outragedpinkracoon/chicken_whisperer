class Player {

  constructor(name) {
    this.name = name;
    this.chickens = [];
    this.isWhisperer = false;
  }

  addChicken(chicken){
    this.chickens.push(chicken)
  }

  chickenCount(){
    return this.chickens.length;
  }
}

module.exports = Player