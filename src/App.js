import React from 'react';
import CurrentPage from "./pages/CurrentPage/CurrentPage";

import {DBConfig} from "./database/DBConfig";
import {initDB, useIndexedDB} from "react-indexed-db";

import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';

export default class App extends React.Component {
    deleteRowFromObjectStore(objectStore, key) { //done
        let db = useIndexedDB(objectStore);
        db.deleteRecord(key).then(()=>console.log("tabela "+objectStore+" key "+key+" apagada"));
    }

    deleteAllRowsFromObjectStore(objectStore) { //done
        let db = useIndexedDB(objectStore);
        db.clear().then(()=>console.log("tabela "+objectStore+" apagada"));
    }

    resetDB() {
        indexedDB.deleteDatabase("project_db");
        console.log("banco de dados apagado, por favor reinicie a página --DebugOnly");
    }

    render() {
        initDB(DBConfig);
        return (
            <div>
                <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                    <CurrentPage resetDB={this.resetDB.bind(this)}/>
                </MuiPickersUtilsProvider>
            </div>
        );
    }
}