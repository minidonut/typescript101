import { _ } from "lodash";
var print = (x)=>console.log(x);

print(_.flatten([1,2,[3,4]]));
print(_.map([1,2,3,4], (x)=>(x**3)));

var a = [10,9,8,7];
var b = _.map(a, (x)=>(-1*x));
// map function returns new array

print(a);
print(b);

