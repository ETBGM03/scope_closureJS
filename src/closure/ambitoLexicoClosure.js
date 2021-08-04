const buildCount = (i) => {
  let cont = i;
  const fun = () => {
    console.log(cont++);
  };
  return fun;
};
let contar = buildCount(5);
contar();
contar();
contar();
