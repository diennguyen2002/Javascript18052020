// function* test1(a){
//     var i=0;
//     while(i < a){
//         yield i++
//     }
// }

// const n = test1(5);
// const [a,b,c,d] = n;

// console.log(a, b, c, d)
// while(b = n.next()){
//     if(!b.done) console.log(b.value)
// }

// function* fibonaci(){
//     var a = yield 1;
//     console.log("a="+a)
//     yield a*2
// }

// const n = fibonaci();

// console.log(n.next())
// console.log(n.next())

function* test2(){
    yield 1;
    yield 2;
    return 'abc';
}

const a = test2();

console.log(a.next())
console.log(a.next())
console.log(a.next())


