var array = ['A','B','C','D'];
var array1 = new Array(1, 2, 3, 4)
console.log(array);
console.log(array1);
console.log(array[0]);

console.log(array.toString());
console.log(array.join('-'));

// xóa phần tử cuối và trả về phần tử đã xóa
console.log(array.pop())
// thêm phần tử vào cuối mảng va trả về số lượng phần tử
console.log(array.push('D'))
// xóa phần tử ở đầu mảng và trả về phần tử đã xóa
console.log(array.shift())
// thêm phần tử vào đầu mảng và trả về số lượng phần tử
console.log(array.unshift('A'))
// xóa nhiều phần tử phần tử (vị trí bắt đầu, số lượng xóa , thêm phần tử vào vị trí bắt đầu) trả về phần tử đã xóa
console.log(array.splice(1, 2, 'B', 'C'))
// nối mảng
var  array2 = ['E', 'F', 'G', 'H']
console.log(array.concat(array2))
// cắt mảng (vị trí bắt đầu, vị trí kết thúc- ko cắt)
console.log(array.slice(2, 3))

var ArrayObject = [
    {
        id: 123,
        name: 'abc',
        add: 'hanoi'
    },
    {
        id: 456,
        name: 'xyz',
        add: 'hcm'
    },
    {
        id: 789,
        name: 'mno',
        add: 'hue'
    }
]
// duyệt từng phần tử 
ArrayObject.forEach(function(ArrayObject, index){
    console.log(ArrayObject, index)
})
// kiểm tra toán bộ
var everyTrue = ArrayObject.every(function(ArrayObject, index){
    return ArrayObject.id > 0;
})
console.log(everyTrue);
var everyFalse = ArrayObject.every(function(ArrayObject, index){
    return ArrayObject.id > 500;
})
console.log(everyFalse);
// kiểm tra chỉ cần 1 phần đúng thì đúng
var someTrue = ArrayObject.some(function(ArrayObject, index){
    return ArrayObject.id > 500;
})
console.log(someTrue);
// tìm kiếm (chỉ trả về đối tượng đầu tiên tìm thấy)
var find = ArrayObject.find(function(ArrayObject, index){
    return ArrayObject.name === 'xyz';
})
console.log(find);
// tìm kiếm tất cả phần tử thỏa mãn
var filter = ArrayObject.filter(function(ArrayObject, index){
    return ArrayObject.id > 200;
})
console.log(filter);
// duyệt mảng và trả về mảng mới tùy theo yêu cầu
var map = ArrayObject.map(function(ArrayObject, index){
    return ArrayObject;
})
console.log(map);
var map1 = ArrayObject.map(function(ArrayObject, index){
    return ArrayObject.name;
})
console.log(map1);
// reduce method
//                 (biến lưu trữ, giá trị hiện tại, vị trí hiện tại, mảng)
function reduceTest(accumulator, currentValue, currentIndex, originArray){
    return accumulator+ currentValue.id;
}
//                              (method, giá trị khởi tạo)
var reduce = ArrayObject.reduce(reduceTest, 0);
console.log(reduce)
// làm phẳng mảng với reduce
var array3 = [1, 2, [3, 4], 5, 6, [7, 8, 9]]
var flatArray = array3.reduce(function(output, currentValue){
    return output.concat(currentValue)
}, [])
console.log(flatArray)
// kiểm tra phần tử con có tồn tại hay không
var string = 'sang som thuc day anh bong thay qua dep trai';
console.log(string.includes('dep'));
console.log(string.includes('som', 10)); // tìm từ vị trí 10
var array4 = ['a', 'b', 'c', 'd'];
console.log(array4.includes('c'));
console.log(array4.includes('e'));

// tự viết lại method
var test = [500, 200, 300]
// reduce
Array.prototype.reduce2 = function(callback, currentValue){
    let i = 0;
    if(arguments.length < 2){
        i = 1;
        currentValue = this[0];
    }
    for(i; i < this.length; i++){
        currentValue = callback(currentValue, this[i], i, this);
    }
    return currentValue;
}

testReduce = test.reduce2(function(total, number){
    return total + number;
})
console.log(testReduce);
testReduce2 = test.reduce2(function(total, number){
    return total + number;
}, 100)
console.log(testReduce2);
// map
Array.prototype.map2 = function(callback){
    var arrayLeght = this.length;
    for(let i = 0; i < arrayLeght; i++){
        callback(this[i], i);
    }
}

testMap = test.map2(function(number, index){
    console.log(index, number)
})
// forEach
Array.prototype.forEach2 = function(callback){
    for(var index in this){
        if (this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}

testForEach = ArrayObject.forEach2(function(object, index){
    console.log(index, object);
})
//filter
Array.prototype.filter2 = function(callback){
    var output = [];
    for(var index in this){
        if (this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index])
            }
        }
    }
    return output;
}
testFilter = test.filter2(function(number, index){
    return number > 400;
})
console.log(testFilter);
//some
Array.prototype.some2 = function(callback){
    for( var index in this ){
        if (this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                return true;
            }
        }
    }
    return false;
}
testSome = test.some2(function(number, index){
    return number > 400;
})
console.log(testSome);
// every
Array.prototype.every2 = function(callback){
    var output = true;
    for(var index in this){
        if (this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if (!result){
                 output = false;
                 break;
            }
        }
    }
    return output;
}

testEvery = test.every2(function(number, index){
    return number > 500;
})
console.log(testEvery);