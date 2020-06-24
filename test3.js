// let animals = ['pig', 'cat', 'dog'];

// animals.push('cow');

// console.log(animals);

// const arr1 = ['duck', 'chicken'];

// animals.push(...arr1);

// console.log(animals);

// animals.pop();

// console.log(animals);

// const numbers = [9, 4, 16];

// let newArr = numbers.map(function(x){
//     return Math.sqrt(x);
// });

// console.log(newArr);

// let numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => b -a);
// console.log(numbers);
// run();
// function run(){
//     console.log(a);
//     var a = 1;
//   }

// var mouse = {
//     name : 'Mickey',
//     sayhi : function() {
//       console.log('Hi, my name is' , this.name)
//     }
//   }
  
//   var say = mouse.sayhi.bind(mouse);

//   console.log(say());

// function run(cb){
//     console.log('run...');
//     cb();
// }
  
// const mouse = {
//     name : 'Mickey',
//     run : function() {
//         console.log(this.name + ' is running');
//     }
// }
  
// run(mouse.run.bind(mouse));

// var a = {
//     name : 'AAA',
//     run : function() {
//       //var that = this
//       var run2 = () => {
//         console.log(this.name)
//       }
//       run2()
//     }
//   }
  
//   a.run()
  
  
// var a = {
//     foo : 'bar' ,
//     run : function() {
//         //var that = this
//       setTimeout(() => {
//         console.log(this.foo)
//       },2000)
//     }
//   }
  
//   a.run()
  
var a = [1, 2];
var b = [1, 2];
console.log(typeof a === typeof b);




  