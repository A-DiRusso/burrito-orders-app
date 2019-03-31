const db = require('./conn');

class Burrito {
    constructor(id, name, style, heat) {
        this.id = id;
        this.name = name;
        this.style = style;
        this.heat = heat;
    }

    static getById(id) {
        return db.one(`select * from burrito where id=${id}`)
            .then((burritoData) => {
                const burritoInstance = new Burrito(burritoData.id,
                                                    burritoData.name,
                                                    burritoData.style,
                                                    burritoData.heat
                                                   );
                
                return burritoInstance;
            })
            .catch(() => {
                return null;
            })

    }

    static getAll() {
        return db.any(`select * from burrito`)
            .then((arrayOfBurritoData) => {
                return arrayOfBurritoData.map((burritoData) =>{
                    const aBurritoOrder = new Burrito(
                        burritoData.id,
                        burritoData.name,
                        burritoData.style,
                        burritoData.heat
                    );
                    console.log(aBurritoOrder);
                    return aBurritoOrder;
                });
            })
    }

    save() {
        return db.result(`
        update coffee set
        name=${this.name},
        style=${this.style},
        heat=${this.heat},
    where id=${this.id}
        `)
    }
}

module.exports = Burrito;