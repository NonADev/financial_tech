import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {useIndexedDB} from "react-indexed-db";

export default class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    setUsername(evt) {
        this.setState({username: evt.target.value});
    }

    setPassword(evt) {
        this.setState({password: evt.target.value});
    }

    getDateTime() {
        return new Date().toLocaleString();
    }

    writeSystemAccess() {
        let db = useIndexedDB('system_access');
        db.add({
            dateTime: this.getDateTime(),
            username: this.state.username,
            password: btoa(this.state.password)
        }).catch((err) => console.log(err));
        this.props.setUserSecure(1);
    }

    handShake() {
        let db = useIndexedDB('funcionario');
        let logicalBoolean;
        db.getAll().then((items) => {
            let e;
            for (let i = 0; i < items.length; i++) {
                e = items[i];
                if ((this.state.username === e.username) && (btoa(this.state.password) === e.password)) {
                    logicalBoolean = true;
                    this.props.setUserData(e);
                    this.props.getPontosById(e.id);
                    this.writeSystemAccess();
                    return;
                }
                else if((this.state.username === e.username) && !(btoa(this.state.password) === e.password)){
                    alert("Senha Errada");
                    return;
                }
            }
            if (!logicalBoolean) {
                db.add({username: this.state.username, password: btoa(this.state.password), valorHora: 15}).then();
                this.handShake();
            }
        });
    }

    loginClickHandler() {
        this.handShake();
    }

    render() {
        return (
            <Grid container justify={"center"} style={{
                marginTop: "31vh",
            }}>
                <Grid item xs={12} align={"center"}>
                    <TextField align={"left"} required
                               inputProps={{
                                   style: {textAlign: "center"},
                                   onKeyPress: this.usernameTextFieldTreatment
                               }}
                               value={this.state.username} onChange={this.setUsername.bind(this)}
                               label={"Username"} variant={"outlined"}
                    />
                </Grid>
                <Grid item xs={12} align={"center"} style={{marginTop: "4vh"}}>
                    <TextField align={"left"} required
                               inputProps={{style: {textAlign: "center"}}}
                               value={this.state.password} onChange={this.setPassword.bind(this)}
                               type={"password"} label={"Password"} variant={"outlined"}
                    />
                </Grid>
                <Grid item xs={12} style={{marginLeft: "14vw", marginTop: "2vh", fontWeight: "bolder"}}>
                    <FormControlLabel label={"Remember me"}
                                      control={
                                          <Checkbox name={"rememberLogin"} color={"primary"}/>
                                      }
                    />
                </Grid>
                <Grid item xs={12} align={"center"} style={{marginTop: "4vh"}}>
                    <Button onClick={this.loginClickHandler.bind(this)} size={"large"} variant="contained"
                            color="primary">
                        login
                    </Button>
                </Grid>
            </Grid>
        );
    }
}