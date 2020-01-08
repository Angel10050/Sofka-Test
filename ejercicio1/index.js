const costPerKm = 35;

let distanceToTravel = prompt("Ingrese la distancia a recorrer", "");
let daysOfStay = prompt("ingrese el numero de dias de la estancia", "");

let priceWithOutOff = distanceToTravel * costPerKm;

function lastCost() {
  if (distanceToTravel > 1000 && daysOfStay > 7) {
    const priceOff = (priceWithOutOff * 30) / 100;
    return priceWithOutOff - priceOff;
  } else {
    return priceWithOutOff;
  }
}
alert(`El precio de tu tickete es $${lastCost()}`);
