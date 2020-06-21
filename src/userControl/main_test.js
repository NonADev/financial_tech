function main() {
    let controller = require('./UserController');

    let u = {};
    u.id = 13;
    u.username = "wesley lima";
    u.password = "qwe123";
    u.cargo = "React Developer";
    u.valorHora = 12;
    // =======================================
    let g = {};
    g.id = 12;
    g.username = "gabi sampaio";
    g.password = "qweqwe";
    g.cargo = "React Developer";
    g.valorHora = 12;
    let k = {};
    k.id = 51;
    k.username = "Montero";
    k.password = "qweqwe";
    k.cargo = "React Developer";
    k.valorHora = 12;
    controller.addInicio(u);
    controller.addInicio(g);
    controller.addInicio(k);
    controller.addFinal({id: 3});
    controller.add(2,{id: 17});
    controller.rmInicio();
    controller.rmFinal();
    controller.rm(1);
    controller.displayAll();
}

//EXEMPLO DE USER
// let g = {};
// g.id = 12;
// g.username = "gabi sampaio";
// g.password = "qweqwe";
// g.cargo = "React Developer";
// g.valorHora = 12;

main();