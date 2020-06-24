//Viết hàm Kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 

function startWith(str){
	return str.indexOf('Java') === 0 ? true : false;
}


console.log(startWith('Java is a popular language'));