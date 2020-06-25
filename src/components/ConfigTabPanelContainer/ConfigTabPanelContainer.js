import React from "react";
import Button from "@material-ui/core/Button";

export default class ConfigTabPanelContainer extends React.Component{
    render() {
        return(
            <div align={"center"}>
                <Button onClick={()=>this.props.setUserSecure(2)} style={{minWidth: "14vw", marginTop: "1vh"}} variant="contained"
                        color="primary">
                    AdminUI
                </Button>
                <br/>
                <Button style={{minWidth: "14vw", marginTop: "1vh"}}
                        onClick={this.props.resetDB} variant="contained" color="primary">
                    ResetDB
                </Button>
                <br/>
                <Button style={{minWidth: "14vw", marginTop: "1vh"}}
                        onClick={() => window.location.reload(false)} variant="contained"
                        color="secondary">
                    Exit
                </Button>
            </div>
        );
    }
}