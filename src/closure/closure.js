const alcancia = (moneda) => {
  var saveMoneda = 0;
  saveMoneda += moneda;
  console.log(`mi alcancia: ${saveMoneda}`);
};

alcancia(1);
alcancia(10);

//closure en JS
const money = () => {
  var savM = 0;
  const closure = (coins) => {
    savM += coins;
    console.log(`alcancia es: $${savM}`);
  };
  return closure;
};
let mymoneyBox = money();
mymoneyBox(4);
mymoneyBox(6);
mymoneyBox(45);
