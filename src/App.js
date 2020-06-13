import React from 'react';
import CurrentPage from "./pages/CurrentPage/CurrentPage";

import {DBConfig} from "./database/DBConfig";
import {initDB} from "react-indexed-db";

export default class App extends React.Component {

    render() {
        initDB(DBConfig);
        return (
            <div>
                <CurrentPage />
            </div>
        );
    }
}