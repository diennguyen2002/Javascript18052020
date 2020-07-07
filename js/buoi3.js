// //constructor function
// //fp vs oop
// function Dog(name, weight) { // Viết hoa chữ đầu
//     this.name = name;
//     this.weight = weight;
//     this.showName = function() {
//         console.log(this.name);
//     }
// }

// //Để mở rộng chức năng
// Dog.prototype.showWeight = function(){
//     console.log(this.weight);
// }

// var myDog1 = new Dog("Kiki", 5);
// var myDog2 = new Dog("Lulu", 7);

// myDog1.showWeight();
// myDog2.showWeight();
// //console.log(myDog1, myDog2);

// Viết lại hàm map
Array.prototype.mymap = function (cb) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i));
    }
    return newArr;
}


var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // sử dụng reduce không co giá trị khởi tạo
// var total = numArr.reduce(function(preVal, curVal){ // preVal = 1, curVal = 2
//     console.log(preVal,curVal);
//     return preVal + curVal
// })


var newArr = numArr.mymap(function (val, idx) {
    return val * 2
})

console.log(newArr);


// var teo = {
//     name: 'Teo',
//     age: 7,
//     address: 'Quan 1'
// }

// // Xóa thuộc tính/hàm
// delete teo.address

// console.log(teo);