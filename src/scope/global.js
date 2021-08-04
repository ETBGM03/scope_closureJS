var a = "hello";
let b = "hello 2";
const c = "hello 3";
function saludas() {
  console.log(a, b, c);
}

saludas();

const d = () => {
  var g = (l = "hollaaaa");
};
console.log(l);
d();
