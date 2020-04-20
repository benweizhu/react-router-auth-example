import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { authenticate } from "../service/AuthService";

export default function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    // @ts-ignore
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        authenticate(() => {
            history.replace(from);
        });
    };
    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    );
}