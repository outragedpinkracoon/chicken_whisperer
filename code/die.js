class Die {

  constructor(sides = 6) {
    this.sides = sides;
  }

  roll(){
    return Math.ceil(Math.random() * this.sides);
  }

  rollMultiple(times, func) {
    
    if(func == undefined) {
      func = (x,y) => x + y;
    }

    var results = [];
    for(var i = 0; i < times; i++)
    {
      results.push(this.roll());
    }
    
    return results.reduce( (prev, curr) => func(prev,curr) );
  }

}

module.exports = Die