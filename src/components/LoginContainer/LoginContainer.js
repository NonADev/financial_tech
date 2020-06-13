import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

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
        let val = evt.target.value;
        val = val.replace(/[^\x00-\x7F]/ig, '');
        this.setState({username: val});
    }

    setPassword(evt) {
        this.setState({password: evt.target.value});
    }

    getDateTime() {
        return new Date().toLocaleString();
    }

    writeAccess() {
        let db = useIndexedDB('system_access');
        db.add({dateTime: this.getDateTime(), username: this.state.username, password: btoa(this.state.password)}).catch((err)=>console.log(err));
        this.props.setUserSecure(1);
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
                    <Checkbox color={"primary"}/><span>Remember me</span>
                </Grid>
                <Grid item xs={12} align={"center"} style={{marginTop: "4vh"}}>
                    <Button onClick={this.writeAccess.bind(this)} size={"large"} variant="contained" color="primary">
                        login
                    </Button>
                </Grid>
            </Grid>
        );
    }
}