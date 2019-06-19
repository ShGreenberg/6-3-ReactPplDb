import React from "react";
import { Route } from 'react-router-dom';
import HomePage from "./HomePage"
import UpdatePage from "./UpdatePage";
import AddPersonPage from "./AddPersonPagejs";
export default class App extends React.Component {

    render() {
        return (<div className="container" style={{ marginTop: 40 }}>
            <Route exact path="/" Component={HomePage} />
            <Route exact path="/addperson" Component={AddPersonPage} />
            <Route exact path="/updateperson/:id?" Component={UpdatePage} />

        </div>)
    }
}