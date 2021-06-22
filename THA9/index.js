var obj1 ={
  name: "Devsnest",
  platform: "Discord",
  teach: function() {
    console.log("Name: "+ this.name+" Platform: "+ this.platform)
  }
  // teach: function(n,p) {
  //   console.log("Name: "+ n +" Platform: "+ p);
  // }
}

const obj2 ={
  name: "Youtube",
  platform: "Site/App",
  teach: function() {
    console.log("Free content is available.")
  }
}

// obj= obj1.teach()
// console.log(obj)
// obj = obj1.teach.call(obj2)
// console.log(obj)
// next = obj1.teach.call(obj2,"LinkedIn","App");
// console.log(next);
var teach2 = obj1.teach.bind(obj1);
teach2();