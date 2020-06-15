import React from 'react';
import CurrentPage from "./pages/CurrentPage/CurrentPage";

import {DBConfig} from "./database/DBConfig";
import {initDB} from "react-indexed-db";

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

export default class App extends React.Component {

    render() {
        initDB(DBConfig);
        return (
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <CurrentPage />
                </MuiPickersUtilsProvider>
            </div>
        );
    }
}