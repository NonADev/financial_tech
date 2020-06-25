let UserController = {
    constructor() {
        this.initial = {};
        return this;
    },
    displayAll() {
        if (this.initial == null) {
            console.log({});
            return;
        }
        let node = this.initial;
        do {
            console.log(node.id);
            node = node.proximo;
        } while (node.id !== this.initial.id);
    },
    addFinal(User) {
        if (this.initial == null) {
            User.anterior = User;
            User.proximo = User;
            this.initial = User;
        } else {
            let tmp = this.initial;
            while (tmp.proximo.id !== this.initial.id) {
                tmp = tmp.proximo;
            }
            tmp.proximo = User;
            User.anterior = tmp;
            User.proximo = this.initial;
            this.initial.anterior = User;
        }
    },
    addInicio(User) {
        if (this.initial == null) {
            User.anterior = User;
            User.proximo = User;
            this.initial = User;
        } else {
            let tmp = this.initial;
            User.proximo = tmp;
            tmp.anterior = User;
            while (tmp.proximo.id !== this.initial.id) {
                tmp = tmp.proximo;
            }
            tmp.proximo = User;
            User.anterior = tmp;
            this.initial = User;
        }
    },
    length() {
        let tmp = this.initial;
        let counter = 1;
        if (this.initial == null) return 0;
        while (tmp.proximo.id !== this.initial.id) {
            tmp = tmp.proximo;
            counter++;
        }
        return counter;
    },
    add(pos, User) {
        if (this.initial == null) {
            User.anterior = User;
            User.proximo = User;
            this.initial = User;
        } else {
            if ((pos >= this.length())) return "error";
            let tmp = this.initial;
            for (let i = 0; i < this.length(); i++, tmp = tmp.proximo) {
                if (i === pos) {
                    tmp.id = User.id;
                    tmp.username = User.username;
                    tmp.password = User.password;
                    tmp.cargo = User.cargo;
                    tmp.valorHora = User.valorHora;
                    return;
                }
            }
        }
    },
    rmInicio() {
        let tmp = this.initial;
        let pr = tmp.proximo, an = tmp.anterior;
        tmp.anterior.proximo = pr;
        tmp.proximo.anterior = an;
        tmp = tmp.proximo;
        this.initial = tmp;
    },
    rmFinal() {
        let tmp = this.initial;
        while (tmp.proximo.id !== this.initial.id) {
            tmp = tmp.proximo;
        }
        let pr = tmp.proximo, an = tmp.anterior;
        tmp.anterior.proximo = pr;
        tmp.proximo.anterior = an;
        tmp = tmp.proximo;
        this.initial = tmp;
    },
    rm(pos) {
        let tmp = this.initial;
        if (pos >= this.length() || pos < 0) return;
        for (let i = 0; i < this.length(); i++, tmp = tmp.proximo) {
            if (i === pos) {
                let prox = tmp.proximo, anterior = tmp.anterior;
                tmp.anterior.proximo = prox;
                tmp.proximo.anterior = anterior;
                tmp = tmp.proximo;
                this.initial = tmp;
                return;
            }
        }
    },
    getAll() {
        return this.initial;
    }
}

module.exports = UserController;