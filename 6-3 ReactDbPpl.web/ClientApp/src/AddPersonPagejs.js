import React from "react";
import axios from "axios";
import PersonForm from "./PersonForm";
export default class AddPersonPage extends React.Component {
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

    onSubmit = () => {
        const { person } = this.state;
        console.log(person);
        axios.post("/api/home/addperson", person).then(() => {
            this.props.history.push('/');
        })
    }

    render() {
        return (<div className="container" style={{ marginTop: 60 }}>
            <PersonForm onSubmit={this.onSubmit} onInputChange={this.onInputChange} person={this.state} />
        </div>)
    }
}