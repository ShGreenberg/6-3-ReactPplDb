import React from "react";
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

    onAddPerson = () => {
        const { person } = this.state;
        axios.post("/api/home/addperson", person).then(() => {
            //axios.get("/api/home/getpeople").then(({ data }) => {
            //    this.setState({ people: data, person: { firstName: "", lastName: "", age: "" } });
            //})
            this.props.history.push('/');
        })
    }

    render() {
        return (<div className="container" style={{ marginTop: 60 }}>
            <PersonForm onAddPerson={this.onAddPerson} onInputChange={this.onInputChange} person={this.state} />
        </div>)
    }
}