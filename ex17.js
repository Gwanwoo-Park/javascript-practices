// URL 다루기
var url = 'http://localhost:8080/mysite3?n=박관우';

// 1. escape (x) : URL을 전부 encoding, deprecated
var url2 = escape(url);
console.log(url2);

// 2. encodeURI (o) = parameter 부분만 encoding
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent
var url4 = encodeURIComponent(url);
console.group(url4);

// 4. encodeURIComponent 사용 
var toQueryString = function(o) {
    var qs = [];
    for(property in o) {
        qs.push(property + "=" + encodeURIComponent(o[property]));
    }

    return qs.join('&');
}

var url = 'http://localhost:8080/mysite3';

var o = {
    no: 10,
    name: '안대혁',
    mail: 'kickscar@gmail.com'
};

var url5 = url + "?" + toQueryString(o);
console.log(url5);