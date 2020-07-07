
//Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
function capitalize(str) {
    // viết code ở đây  
    const words = str.split(' ');
    const newWords = words.map(w =>{
        return w.charAt(0).toUpperCase() + w.substr(1);
    });

    return newWords.join(' ');
}

console.log(capitalize('nguyen Vo the dien'));
