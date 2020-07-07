//Viêt 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
var equal_pt = (str) => {
    if (str) {
        var count_p = 0;
        var count_t = 0;
        
        for(let c of str) {
            if(c === 'p') {
                count_p++;
            }
            if(c === 't') {
                count_t++;
            }
        }
        return count_p === count_t ? true : false;
    }

    return false;
}

console.log(equal_pt(''));