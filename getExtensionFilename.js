//Viết hàm lấy extension của một file
function getExtensionFilename(filename) {
    return filename.split('.')[1];	
}


console.log(getExtensionFilename('hinh.jpg'));
