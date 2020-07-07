const obj = {a:1, b:2, c:3};

for (const property in obj){
    console.log(`${property}:${obj[property]}`);
}


const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}