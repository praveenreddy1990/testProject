"use strict";
var person = {
    name: 'praveen',
    age: 25,
    hobbies: ['sports', 'reading books'],
    role: [2, 'admin']
};
person.role.push('chairman');
//person.role[1] = 20;
person.role = [30, 'director'];
console.log("name and age of person " + person.name + " " + person.age);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log('my hobby ' + hobby);
}
for (var _b = 0, _c = person.role; _b < _c.length; _b++) {
    var r = _c[_b];
    console.log('my role ' + r);
}
