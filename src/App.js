import React from 'react';
import CurrentPage from "./pages/CurrentPage/CurrentPage";

import {DBConfig} from "./database/DBConfig";
import {IndexedDB, initDB} from "react-indexed-db";

import { useIndexedDB } from 'react-indexed-db';

export default class App extends React.Component {

    render() {
        initDB(DBConfig);
        let db = useIndexedDB('funcionario');
        db.add({nome:'wesley',email:'oaskdoksa@.com'}).then(
            event => {
                console.log('ID Generated: ', event);
            },
            error => {
                console.log(error);
            }
        );
        db = useIndexedDB('ponto');
        let d = new Date();
        let s = d.getHours()+":"+d.getMinutes();
        db.add({horaInicio: s, horaFim: s});
        console.log(JSON.stringify(db));
        return (
            <div>
                <CurrentPage />
            </div>
        );
    }
}