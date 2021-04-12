
const add = (a,b) => {
  return a + b;
};

console.log(add(55, 1, 1001));

const user = {
  name: "and",
  cities: ["Warszawa, Olsaztyn"],
  printPlacesLived(){    
   return this.cities.map((ct) => this.name + " Mieszkal w  " + ct);
  }
};
console.log(user.printPlacesLived());