import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from "./HomePage"
import UpdatePage from "./UpdatePage";
import AddPersonPage from "./AddPersonPagejs";
class App extends React.Component {

    render() {
        return (<div lassName="container" style={{ marginTop: 40 }}>
            <Route exact path="/" Component={HomePage} />
            <Route exact path="/addperson" Component={AddPersonPage} />
            <Route exact path="/updateperson/:id?" Component={UpdatePage} />

        </div>)
    }
}



render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById("root"));


