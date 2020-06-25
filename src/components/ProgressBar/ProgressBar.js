import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

export default class ProgressBar extends React.Component{
    render() {
        return(
            <Grid item xs={12} style={{paddingLeft: "1vw", marginRight: "1vw", marginTop: "3vh"}}>
                <Container style={{
                    paddingTop: "3vh",
                    paddingBottom: "3vh",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
                }}>
                    <Typography align={"center"} style={{marginBottom: "1vh"}}>Progresso
                        Mensal</Typography>
                    <LinearProgress variant="determinate" value={90}/>
                </Container>
            </Grid>
        );
    }
}