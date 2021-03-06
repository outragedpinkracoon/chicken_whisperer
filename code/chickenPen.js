class ChickenPen {

  constructor(chickens){    
    this.chickens = chickens;
  }

  count(){
    return this.chickens.length;
  }

  add(chicken) {
    this.chickens.push(chicken);
  }

  hasChickensForCapture(){
    for(var chicken of this.chickens)
    {
      if(chicken.speed > 0)
        return true;
    }
    return false;
  }

  refresh(){
    this.chickens.forEach(function(chicken){
      chicken.refresh();
    })
  }

  remove(chicken_out) {
    var result = [];
    for(var chicken of this.chickens)
    {
      if(chicken !== chicken_out)
        result.push(chicken);
    }
    this.chickens = result;
  }

  scareChickens(){
    this.chickens.forEach(function(chicken, index){
      chicken.reduceScare();
    });
  }


}

module.exports = ChickenPen;