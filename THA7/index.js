// 1 
var student =
{
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
console.log(Object.getOwnPropertyNames(student))
console.log(Object.keys(student))

// 2
console.log(student)
delete student.rollno
console.log(student)

// 3 
var student1 =
{
  name: "David Ray",
  sclass: "VI",
  rollno: 12
};
console.log(Object.keys(student1).length)

// 4 
var library = [{
  author: 'Bill Gates',
  title: 'The Road Ahead',
  readingStatus: true
},
{
  author: 'Steve Jobs', title: 'Walter Isaacson',
  readingStatus: true
},
{
  author: 'Suzanne Collins',
  title: 'Mockingjay: The Final Book of The Hunger Games',
  readingStatus: false
}];
for(let i in library){
  console.log("Author: " + library[i].author)
  console.log("Book Nam: " + library[i].title)
  console.log("Reading Status: " + library[i].readingStatus + '\n')
}

// 5 
var obj = {
  Volume: function(r,h) {
    pie = 22/7
    vol = pie*r*r*h
    return vol
  }
}
result = obj.Volume(3,6);
console.log(result.toFixed(4));

// 6 
var library1 = [{
  title: 'The Road Ahead',
  author: 'Bill Gates',
  libraryID: 1254
},
{
  title: 'Walter Isaacson',
  author: 'Steve Jobs',
  libraryID: 4264
},
{
  title: 'Mockingjay: The Final Book of The Hunger Games',
  author: 'Suzanne Collins',
  libraryID: 3245
}];

new_obj = []
for (let i in library1) {
  keys = Object.keys(library1[i])
  len = keys.length
  keys.sort();
  new_obj[i] = {}

  for (let j = 0; j < len; j++) {
    k = keys[j];
    new_obj[i][k] = library1[i][k]
  }
}

new_obj.sort((a,b)=>{
  return b.libraryID - a.libraryID
})

console.log(new_obj)
