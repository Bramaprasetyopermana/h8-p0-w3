function groupAnimals(animals) {
var hasil=[];
for(var i=0;i<4;i++){
  hasil.push([])
}
for(var j=0;j<animals.length;j++){
  if(animals[j][0]==='a'){
    hasil[0].push(animals[j])
  }
  else if(animals[j][0]==='c'){
    hasil[1].push(animals[j])
  }
  else if(animals[j][0]==='k'){
    hasil[2].push(animals[j])
  }
  else{
    hasil[3].push(animals[j])
  }
}
return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda',kancil], ['unta'] ]
