"use strict";
var list = [4, 5, 6];
for (var key in list) {
    console.log(key); //0,1,2
}
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var item = list_1[_i];
    console.log(item); //4,5,6
}
