const hola = () => {
  var fuit = "apple";
  console.log(fuit);
};

hola();
console.log(fuit); //esto tira error

const another = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  let y = 2;
  console.log(x, y);
};
another();
