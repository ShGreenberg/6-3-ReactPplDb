import React from "react";
import axios from "axios";
import PersonForm from "./PersonForm";
export default class UpdatePage extends React.Component {
    state = {
        person: {
            firstName: "",
            lastName: "",
            age: "",
            
        },
        people: []
    }

    componentDidMount = () => {
        if (this.props.match.params.id) {
            axios.get(`/api/home/getperson/${this.props.match.params.id}`).then(({ data }) => {
                this.setState({ person: data });
            });
        } else {
            axios.get('/api/home/getpeople').then(({ data }) => {
                this.setState({ people: data });
            });
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

    onSelect = e => {
        const id = e.target.value;
        axios.get(`/api/home/getperson/${id}`).then(({ data }) => {
            this.setState({ person: data });
        });
    }

    render() {
        let content;
        if (this.state.person.firstName) {
            content = <PersonForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} person={this.state.person} />;
        } else {
            content = <div className="row">
                <div className="col-md-6 col-md-offset-3 well">
                    <select onChange={this.onSelect} >
                        <option value="0">----Select person to update----</option>
                        {this.state.people.map((p) => 
                            <option key={p.id} value={p.id}>{p.firstName + " " + p.lastName}</option>
                        )}
                    </select>
                </div>
            </div>
        }
        return (<div className="container" style={{ marginTop: 60 }}>
            {content}
        </div>)
    }
}