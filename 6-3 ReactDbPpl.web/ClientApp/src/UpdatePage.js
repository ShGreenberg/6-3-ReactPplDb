import React from "react";
import PersonForm from "./PersonForm";
export default class UpdatePage extends React.Component {
    state = {
        person: {
            firstName: "",
            lastName: "",
            age: ""
        }
    }


    onInputChange = e => {
        const person = this.state.person;
        person[e.target.name] = e.target.value;
        this.setState({ person })
    }

    onUpdatePerson = () => {

    }

    render() {
        
        return (<div className="container" style={{ marginTop: 60 }}>
            <PersonForm onInputChange={this.onInputChange} person={this.state.person} />
        </div>)
    }
}