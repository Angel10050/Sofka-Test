const airplaneTotalCapacity = 18000;
const maxWeightAllowedPerPackage = 500;

let totalPackagesweight = Array.from(
  { length: 15 },
  () => Math.floor(Math.random() * (maxWeightAllowedPerPackage - 0)) + 0
); // array de pesos de paquetes

const numberOfPackages = totalPackagesweight.length; //cantidad de paquetes

const everage = totalPackagesweight.reduce((acum, current) => {
  // promedio
  return acum + current / numberOfPackages;
}, 0);

const maxWeightPackage = Math.max(...totalPackagesweight); // paquete mas pesado
const mixWeightPackage = Math.min(...totalPackagesweight); // paquete mas liviano

let heavyWeight = totalPackagesweight.filter(
  //paquetes livianos
  weight => weight < 25 && weight >= 0
);

let mediumWeight = totalPackagesweight.filter(
  //paquetes de peso medio
  weight => weight > 25 && weight <= 300
);

let highWeight = totalPackagesweight.filter(
  //paquetes pesados
  weight => weight > 300 && weight <= 500
);

let ceroCost = heavyWeight
  .map(weight => weight * 0)
  .reduce((acum, current) => {
    return acum + current;
  }, 0); // paquetes gratis

let mediumCost = mediumWeight
  .map(weight => weight * 1500)
  .reduce((acum, current) => {
    return acum + current;
  }, 0); //paquetes baratos

let highCost = highWeight
  .map(weight => weight * 2500)
  .reduce((acum, current) => {
    return acum + current;
  }, 0); // paquetes caros

let loadPrice = ceroCost + mediumCost + highCost;

document.write(
  `Numero total de bultos ingresados => ${numberOfPackages}<br/> Peso del bulto mas pesado => ${maxWeightPackage}<br/> Peso del bulto mas liviano => ${mixWeightPackage}<br/> Peso promedio de los bultos => ${everage.toFixed(
    1
  )}<br/> Valor por concepto de carga => COP ${loadPrice}, USD $${(
    loadPrice / 3200
  ).toFixed(1)}`
);
