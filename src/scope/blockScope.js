const fruta = () => {
  if (true) {
    var x = 1;
    let y = 2;
    const n = 34;
    //para que pueda mostrar los 3 valores debo mostrar los valores de let y const dentro de ese scope
    console.log(y, n);
  }
  //Esto tira un error ya que al estar las variables dentro de una funcion, pero declaradas con let o const éstas respetan el
  // el scope donde son establecidad
  console.log(
    // x, y, c
    x
  );
};

var d = 1;
{
  var d = 2;
  console.log(d);
}
console.log(d);

const anotherF = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherF();
