import React from "react";
import axios from "axios";
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

    onSubmit = () => {
        axios.post("/api/home/updateperson", this.state.person).then(() => {
            this.props.history.push('/');
        });
    }

    render() {
        
        return (<div className="container" style={{ marginTop: 60 }}>
            <PersonForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} person={this.state.person} />
        </div>)
    }
}