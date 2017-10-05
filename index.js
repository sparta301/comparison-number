 //assignment for level 0-1
 var level = 1000000
 if (level < 50 ){
     console.log("U are Trooper")
 } else if (level < 100 ) {"U are "
   console.log("U are Leader")
 } else {
   console.log("U are Legend")
 }
 
//assignment for level 2

var starving1 = true,
question = starving1 ? 'lapar' :'tidak';

console.log(question); 

//assignment for level 3-4
var newbie = 10
var master = 50
var legend = 100
 function dungeon(level){
     if(level<50){
         return "U are Newbie, and Cant enter this"
     }else if(level>=50){
         return "Welcome master"
     }else if(level>=100){
         return "Welcome Legend"
     }
 }

 var mathe = Math.floor(Math.random() *10) + 1;
 
 console.log(mathe)
