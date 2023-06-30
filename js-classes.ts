interface ToolType {
  id: number;
  family: string;
  status: boolean;
  brand: string;
  doors: number;
  engine_volume: number;
}


class Vehicle implements ToolType {
  id: number;
  family: string;
  status: boolean;
  brand: string;
  doors: number;
  engine_volume: number;


  constructor (id: number, family: string, status: boolean, brand: string, doors: number, engine_volume: number) {
    this.id = id;
    this.family = family;
    this.status = status;
    this.brand = brand;
    this.doors = doors;
    this.engine_volume = engine_volume;
  }

  public getVehicle = (family: string) => {

    return `id: ${this.id}\nfamily: ${this.family}\nbrand: ${this.brand}\ndoors: ${this.doors}\nengine: ${this.engine_volume} cc`;
  }

  public setVehicle = (id: number, family: string, status: boolean, brand: string, doors: number, engine_volume: number) => {
    this.id = id;
    this.family = family;
    this.status = status;
    this.brand = brand;
    this.doors = doors;
    this.engine_volume = engine_volume;
  }
}

const carro0 = new Vehicle(12545, 'Infineon', true, 'Stellantis', 4, 4780);
const carro1 = new Vehicle(74856, 'Armata', true, 'Iveco', 2, 2498);
const carro2 = new Vehicle(812741, 'Infineon', true, 'Renault', 2, 2998);


console.log(carro2.getVehicle('Armata'))
