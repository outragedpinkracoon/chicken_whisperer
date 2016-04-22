Array.prototype.rotate = function(){
  if(this.length === 0) {
    return this;
  }

  var item = this.shift();
  this.push(item);
  
  return this;
}

Array.prototype.first = function(){
  return this[0];
}