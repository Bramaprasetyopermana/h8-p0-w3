// SOAL 2,WEEK 3

// //input "hello world!"
// //output
// "!dlrow olleh"

function balikString(data){
  var hasil='';
  for(var i=data.length-1;i>=0;i--){
    hasil+=data[i]
  }
  return hasil
}
console.log(balikString('Hello world!!'))
