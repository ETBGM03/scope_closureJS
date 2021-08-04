var scope = "Hola mundo";

//en este ejemplo se explica el ambito léxico, ya que var scope al estar dentro de una funcion
//que es retornada dentro de otra, esa hace referencia a la misma y NO a la global. Ojo con eso.
const hola = () => {
  //para este caso scope está en local y no global
  var scope = "lololo";
  const hola2 = () => {
    return scope;
  };
  console.log(hola2());
};
hola();
console.log(scope);
