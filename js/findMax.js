//viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a,b,c){
    return Math.max(Math.max(a,b),c);
}

console.log(findMax(10,9,100));