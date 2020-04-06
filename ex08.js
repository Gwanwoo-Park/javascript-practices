var o = {
	name: "둘리",
	age: 10,
	isFemale: false
};

var f = function() {
	console.log("hello world");
}

var i = 10;
var n = new Number(10);

f();
console.log(o);

console.log("============객체(object, function) 확장=============");

o.another = {
	name: "마이콜",
	age: 30
};

console.log(o);

f.another = {
	name: "또치",
	age: 10,
	info: function() {
		console.log(this.name + ":" + this.age);
	}
};

console.log(f.another);
f.another.info();

console.log("==============기본 타입은 확장 X================");

i.another = {};
console.log(i.another);