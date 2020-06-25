import React from "react";
import {useIndexedDB} from "react-indexed-db";
import {VictoryChart, VictoryBar, VictoryTheme} from 'victory';
import _ from 'lodash';
import UserController from '../../userControl/UserController';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default class AdminUI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            AllUsersData: [],
            salarioTotal: 0
        }
    }

    getSalarioMesAtual(data) {
        let pontosRetorno = [];
        data.forEach((ponto) => {
            pontosRetorno.push(new Date(ponto.dataHora).toLocaleDateString());
        })
        pontosRetorno = _.uniqWith(pontosRetorno, _.isEqual);
        pontosRetorno = pontosRetorno.filter((item) => item.split("/")[1] === new Date().toLocaleDateString().split("/")[1]);
        return pontosRetorno.length * this.props.userData.valorHora * 8;
    }

    getAllUserFromDBWithPontos = () => {
        let db = useIndexedDB('funcionario');
        db.getAll().then((funcionarios) => {
            funcionarios.forEach((funcionario) => {
                let db2 = useIndexedDB('pontoBatido');
                db2.getAll().then((pontos) => {
                    let pontosFuncionario = [];
                    pontos.forEach((ponto) => {
                        if (ponto.fkFuncionario === funcionario.id) pontosFuncionario.push(ponto);
                    });
                    funcionario.salario = this.getSalarioMesAtual(pontosFuncionario);
                    UserController.addInicio(funcionario);
                    let UserToData = this.state.AllUsersData;
                    UserToData.push(funcionario);
                    this.setState({AllUsersData: Array.from(UserToData)});
                    this.getSalarioTotal();
                });
            });
            // console.log(this.state.AllUsersData);
            // this.setState({AllUsersData: UserController.getAll()}); //não precisa
        });
    }

    getSalarioTotal() {
        let total = 0;
        this.state.AllUsersData.forEach((elem) => {
            total += elem.salario;
        });
        this.setState({salarioTotal: total});
    }

    componentDidMount() {
        this.getAllUserFromDBWithPontos();
        this.forceUpdate();
    }

    render() {
        document.body.style.backgroundColor = '#eff2f2';

        // tmp.id = User.id;
        // tmp.username = User.username;
        // tmp.password = User.password;
        // tmp.cargo = User.cargo;
        // tmp.valorHora = User.valorHora;
        return (
            <div style={{
                boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                backgroundColor: "white"
            }}>
                <Typography>Salarios do Mês {new Date().toLocaleDateString().split("/")[1]}</Typography>
                <VictoryChart
                    theme={VictoryTheme.material}
                >
                    <VictoryBar
                        alignment="start"
                        barWidth={30}
                        // horizontal
                        data={this.state.AllUsersData}
                        x={"username"}
                        y={"salario"}
                    />
                </VictoryChart>
                <Box>
                    <Typography>Salario Total do time do mes: {this.state.salarioTotal}</Typography>
                </Box>
                <Box>
                    {this.state.AllUsersData.map((elem) => {
                        // eslint-disable-next-line array-callback-return
                        if (this.props.userData.username === "") {
                            return (
                                <Typography>
                                    {elem.username} trabalhou {elem.salario / 15} dias e ganhou R${elem.salario}
                                </Typography>
                            )
                        }
                        else if(this.props.userData.id === elem.id){
                            return (
                                <Typography>
                                    {elem.username} trabalhou {elem.salario / 15} dias e ganhou R${elem.salario}
                                </Typography>
                            )
                        }
                    })}
                </Box>
                <Button onClick={() => {
                    this.props.setUserSecure(1)
                }} variant="contained" color="primary">
                    Voltar
                </Button>
            </div>
        )
    }
}