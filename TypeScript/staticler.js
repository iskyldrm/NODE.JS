var Daire = /** @class */ (function () {
    function Daire(yaricap) {
        this.yarıCap = yaricap;
    }
    Daire.AlanHesabı = function (yaricap) {
        return this.Pi * yaricap * yaricap;
    };
    Daire.Pi = 3.14;
    return Daire;
}());
console.log(Daire.AlanHesabı(9));
