let User = {
    constructor() {
        this.id = null;
        this.username = null;
        this.password = null;
        this.cargo = null;
        this.valorHora = null;
        this.anterior = null;
        this.proximo = null;
        return this;
    }
}

module.exports = User;