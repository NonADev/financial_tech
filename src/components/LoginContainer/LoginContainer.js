import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

export default class LoginContainer extends React.Component {
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
                               label={"Username"} variant={"outlined"}
                    />
                </Grid>
                <Grid item xs={12} align={"center"} style={{marginTop: "4vh"}}>
                    <TextField align={"left"} required
                               inputProps={{style: {textAlign: "center"}}}
                               type={"password"} label={"Password"} variant={"outlined"}
                    />
                </Grid>
                <Grid item xs={12} style={{marginLeft: "14vw", marginTop: "2vh", fontWeight: "bolder"}}>
                    <Checkbox color={"primary"}/><span>Remember me</span>
                </Grid>
                <Grid item xs={12} align={"center"} style={{marginTop: "4vh"}}>
                    <Button onClick={this.props.loginHandShake} size={"large"} variant="contained" color="primary">
                        login
                    </Button>
                </Grid>
            </Grid>
        );
    }
}