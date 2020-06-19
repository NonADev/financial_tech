//export default
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

function main(){
    let u = User.constructor();
    u.id = 13;
    u.username = "wesley lima";
    u.password = "qwe123";
    u.cargo = "React Developer";
    u.valorHora = 12;
    u.anterior = u;
    u.proximo = u;
    let g = User.constructor();
    g.id = 12;
    g.username = "gabi sampaio";
    g.password = "qweqwe";
    g.cargo = "React Developer";
    g.valorHora = 12;
    g.anterior = u;
    g.proximo = u;
    u.anterior = g;
    u.proximo = g;

    console.log(u.proximo);
    // console.log(g);
}

main();