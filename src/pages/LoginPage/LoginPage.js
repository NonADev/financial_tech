import React from 'react';
import LoginContainer from "../../components/LoginContainer/LoginContainer";

export default class LoginPage extends React.Component {
    usernameTextFieldTreatment(e) {
        if (e.target.value.length > 8)
            e.preventDefault();
    }

    loginHandShake() {
        this.props.setUserSecure(1);
    }

    render() {
        return (
            <div>
                <LoginContainer loginHandShake={this.loginHandShake.bind(this)}/>
            </div>
        );
    }
}