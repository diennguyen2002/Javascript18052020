
// function multiply(arr) {
//     var result = 1;
//     for(const el of arr) {

//         //console.log(el);
//         result = result * el;

//     }
//     return result;
// }

// console.log(multiply([2, 3, 4])); 

// function print() {
//     console.log(this.mVal)
// }

// var obj = {
//     mVal: "Tôi yêu thành phố Hồ Chí Minh",

//     mMethod: function(callback) {
//         // truyền đối tượng hiện tại cho hàm phản hồi callback
//         callback.call(this)
//     }
// }

// obj.mMethod(print)

const obj = {
    mVal: "Việt Nam",
 
    mMethod: function() {
        console.log("Hello " + this.mVal)
    }
}
 
// const oMethod = obj.mMethod.bind(obj) // this trong oMethod sẽ bị ép thành giá trị obj

// oMethod() // Hello Việt Nam

// obj.mVal = "Hà Nội"
 
// oMethod() // Hello Hà Nội

obj.mMethod.apply(obj)
