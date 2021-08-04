//De esta manera guardamos una variable "privada" en javaScript, accediendo a ella mediante los métodos get y set
const person = () => {
  var saveName = "esteban";
  return {
    getName: function () {
      return saveName;
    },
    setName: function (name) {
      saveName = name;
    },
  };
};

newPerson = person();
console.log(newPerson.getName()); // esteban
console.log(newPerson.setName("juan")); // juan);
