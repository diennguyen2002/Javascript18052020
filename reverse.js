// Viết hàm đảo ngược chuỗi ‘abc’ => ‘cba’
function reverse(str) {
    var rt = '';
	for (let i= str.length-1; i>=0; i--) {
        rt = rt + str[i];
    }
    return rt;
}

console.log(reverse('nguyen vo the dien'));