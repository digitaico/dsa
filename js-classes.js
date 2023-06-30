var Vehicle = /** @class */ (function () {
    function Vehicle(id, family, status, brand, doors, engine_volume) {
        var _this = this;
        this.getVehicle = function (family) {
            return "id: ".concat(_this.id, "\nfamily: ").concat(_this.family, "\nbrand: ").concat(_this.brand, "\ndoors: ").concat(_this.doors, "\nengine: ").concat(_this.engine_volume, " cc");
        };
        this.setVehicle = function (id, family, status, brand, doors, engine_volume) {
            _this.id = id;
            _this.family = family;
            _this.status = status;
            _this.brand = brand;
            _this.doors = doors;
            _this.engine_volume = engine_volume;
        };
        this.id = id;
        this.family = family;
        this.status = status;
        this.brand = brand;
        this.doors = doors;
        this.engine_volume = engine_volume;
    }
    return Vehicle;
}());
var carro0 = new Vehicle(12545, 'Infineon', true, 'Stellantis', 4, 4780);
var carro1 = new Vehicle(74856, 'Armata', true, 'Iveco', 2, 2498);
var carro2 = new Vehicle(812741, 'Infineon', true, 'Renault', 2, 2998);
console.log(carro2.getVehicle('Armata'));
