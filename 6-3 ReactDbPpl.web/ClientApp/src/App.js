import React from "react";
import { Route } from 'react-router-dom';
import HomePage from "./HomePage"
import UpdatePage from "./UpdatePage";
import AddPersonPage from "./AddPersonPagejs";

export default class App extends React.Component {

    render() {
        return (<div className="container" style={{ marginTop: 40 }}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/addperson" component={AddPersonPage} />
            <Route exact path="/updateperson/:id?" component={UpdatePage} />

        </div>)
    }
}