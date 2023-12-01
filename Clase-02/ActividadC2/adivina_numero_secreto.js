const readlineSync = require("readline-sync");

const adivinar = () => {
  const numeroRandom = Math.floor(Math.random() * 100) + 1;
  // console.log(numeroRandom);
  do {
    const numeroUsuario = parseInt(
      readlineSync.question("Ingrese un numero: ")
    );
    const diferencia = Math.abs(numeroRandom - numeroUsuario);
    if (diferencia !== 0) {
      switch (true) {
        case diferencia >= 1 && diferencia <= 5:
          console.log("Tibio (-5)");
          break;
        case diferencia >= 6 && diferencia <= 10:
          console.log("Estas muy cerca");
          break;
        case diferencia >= 11 && diferencia <= 30:
          console.log("Sigue intentando");
          break;
        case diferencia > 30:
          console.log("Estas muy lejos");
          break;
      }
    } else{
          console.log(`Correcto, ${numeroRandom} era el numero!!`);
      }
    console.log(`diferencia: ${diferencia}`)
  } while (true);
};

adivinar();
