import React from 'react';
import LoginPage from "../LoginPage/LoginPage";
import PointPage from "../PointPage/PointPage";
import {useIndexedDB} from "react-indexed-db";
import AdminUI from "../AdminUI/AdminUI";

export default class CurrentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userSecure: 0,
            userData: {},
            pontos: null
        }
    }

    getAllPontos() {
        let db = useIndexedDB('pontoBatido');
        let allRows = db.getAll().then((rows) => {
            this.setState({pontos: rows});
        });
    }

    getPontosById(id) {
        let db = useIndexedDB('pontoBatido');
        let allRows = db.getAll().then((rows) => {
            let ownRows = rows.filter((value) => {
                return value.fkFuncionario === id;
            });
            this.setState({pontos: ownRows});
        });
    }

    setUserData(data) {
        this.setState({
            userData: data
        })
    }

    setUserSecure(number) {
        this.setState({
            userSecure: (number)
        });
    }

    render() {
        return (
            (this.state.userSecure === 0)
                ? <LoginPage
                    getPontosById={this.getPontosById.bind(this)}
                    setUserData={this.setUserData.bind(this)}
                    userSecure={this.state.userSecure}
                    setUserSecure={this.setUserSecure.bind(this)}
                />
                : (this.state.userSecure === 1)
                ? <PointPage setUserSecure={this.setUserSecure.bind(this)}
                             pontos={this.state.pontos}
                             getPontosById={this.getPontosById.bind(this)}
                             userData={this.state.userData}
                             resetDB={this.props.resetDB}/>
                : <AdminUI pontos={this.state.pontos}
                           userData={this.state.userData}/>
        );
    }
}