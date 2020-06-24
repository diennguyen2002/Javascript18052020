// const mouse = {
//     name : 'Mickey',
//     sayhi : function() {
//       console.log('Hi, my name is' , this.name)
//     }
//   }

//   const say = mouse.sayhi
//   say.bind({name: 'cat'})()


// function run(cb) {
//     console.log('run...')
//     cb()
// }

// const mouse = {
//     name: 'Mickey',
//     run: function () {
//         console.log(this.name + ' is running')
//     }
// }

// run(mouse.run)


// const arrNum = [2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newArrNum = arrNum.map((val, idx) => val * 2)

// console.log(newArrNum)

// const a = {
//     name: 'AAA',
//     run: function () {
//         var run2 = () => {
//             console.log(this.name)
//         }
//         run2()
//     }
// }

// a.run()

// function greeting(name, age) {
//     console.log(`Hi! ${name} . I am ${age}`)
// }
// greeting.call(null, 'Tom', 10)


// function greeting(name,age){
//     console.log(`Hi! ${name} . I am ${age}`)
//   }
//   greeting.call(null,'Tom' , 10)

function sum(...nums) {
    return nums.reduce((a, b) => a + b)
}

console.log(sum(1,2,3,4,5))