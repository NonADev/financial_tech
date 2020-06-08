import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class LoginPage extends React.Component {
    usernameTextFieldTreatment(e) {
        if (e.target.value.length > 8)
            e.preventDefault();
    }

    render() {
        // document.body.style = "background-image: linear-gradient(to bottom, #643A71 , #8B5FBF)";
        return (
            <div>
                <Grid container justify={"center"} style={{
                    marginTop: "31vh",
                }}>
                    <Grid item xs={12} align={"center"}>
                        <TextField align={"left"} required
                                   inputProps={{
                                       style: {textAlign: "center"},
                                       onKeyPress: this.usernameTextFieldTreatment
                                   }}
                                   label={"Username"} variant="outlined" variant={"outlined"}
                        />
                    </Grid>
                    <Grid item xs={12} align={"center"} style={{marginTop: "4vh"}}>
                        <TextField align={"left"} required
                                   inputProps={{style: {textAlign: "center"}}}
                                   type={"password"} label={"Password"} variant={"outlined"}
                        />
                    </Grid>
                    <Grid item xs={12} style={{marginLeft: "14vw", marginTop: "2vh"}}>
                        <Checkbox color={"primary"}/><span>Remember me</span>
                    </Grid>
                    <Grid item xs={12} align={"center"} style={{marginTop: "4vh"}}>
                        <Button size={"large"} variant="contained" color="primary">
                            Primary
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}