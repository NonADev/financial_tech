import React from "react";
import {useIndexedDB} from "react-indexed-db";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import _ from 'lodash';
import UserController from '../../userControl/UserController';

export default class AdminUI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            AllUsersData: []
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
                });
                UserController.addInicio(funcionario);
                let UserToData = this.state.AllUsersData;
                if(funcionario.salario<=0) funcionario.salario=300;
                UserToData.push(funcionario);
                this.setState({AllUsersData: Array.from(UserToData)});
            });
            console.log(this.state.AllUsersData);
            // this.setState({AllUsersData: UserController.getAll()}); //não precisa
        });
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
        console.log(this.state.AllUsersData);
        return (
            <div style={{backgroundColor: "white"}}>
                <BarChart
                    width={700} //350
                    height={450}//300
                    margin={{
                        top: 0, right: 0, left: 0, bottom: 0,
                    }}
                    data={this.state.AllUsersData}
                >
                    <XAxis type="category" dataKey="username"/>
                    <YAxis type="number"/>
                    <Tooltip/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Legend/>
                    <Bar dataKey="id" stroke="#8884d8" fill={"#8884d8"} background={{stroke: '#8884d8'}}
                         isAnimationActive={false} barSize={20}/>
                </BarChart>
            </div>
        )
    }
}