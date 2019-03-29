const db = require('./conn');

class Burrito {
    constructor(id, name, order, heat) {
        this.id = id;
        this.name = name;
        this.order = order;
        this.heat = heat;
    }

    static getById(id) {
        return db.one(`select * from burrito where id=${id}`)
            .then((burritoData) => {
                const burritoInstance = new Burrito(burritoData.id,
                                                    burritoData.name,
                                                    burritoData.order,
                                                    burritoData.heat
                                                   );
                return burritoInstance;
            })
            .catch(() => {
                return null;
            })

    }
    save() {
        return db.result(`
        update coffee set
        name=${this.name},
        order=${this.order},
        heat=${this.heat},
    where id=${this.id}
        `)
    }
}

module.exports = Burrito;