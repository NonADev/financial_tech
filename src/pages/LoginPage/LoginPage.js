import React from 'react';
import LoginContainer from "../../components/LoginContainer/LoginContainer";

export default class LoginPage extends React.Component {
    usernameTextFieldTreatment(e) {
        if (e.target.value.length > 8)
            e.preventDefault();
    }

    render() {
        return (
            <div>
                <LoginContainer setUserData={this.props.setUserData} setUserSecure={this.props.setUserSecure}/>
            </div>
        );
    }
}