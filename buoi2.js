// var arrayNames = ["A", "B", "C"];
// var myDog = {
//     name: 'Lu',
//     weight: 2
// };
// // for (var element of arrayNames) {
// //     console.log(element);
// // }


// for (var element in myDog) {
//     console.log(myDog[element]);
// }

// function multiply(arr) {
//     var rt = 1;
//     for (var el of arr ) {
//         rt = rt * el;
//     }

//     return rt;
// }

// console.log(multiply([2, 3, 4]));


// var arrayNames = ['A', 'B', 'C', 'D', 'E'];

// // them vi tri cuoi cho mang

// arrayNames.push('F');

// console.log(arrayNames);

// // xoa phan tu cuoi mang

// arrayNames.pop();

// console.log(arrayNames);

// // xoa phan tu dau mang

// arrayNames.shift();

// console.log(arrayNames);

// // them phan tu o giua mang

// arrayNames.splice(1, 0, 'G');

// console.log(arrayNames);

// // xoa phan tu giua mang

// arrayNames.splice(1, 2);

// console.log(arrayNames);

var numArr = [1,2,3,4,5];

var newNumArr = numArr.map(function(value, index){
    console.log(value*2, index);
});
