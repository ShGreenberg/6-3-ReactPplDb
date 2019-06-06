import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from "react";
import { render } from "react-dom";
import PersonAdder from "./PersonAdder";
import PeopleTable from "./PeopleTable";
import ButtonRow from "./ButtonRow";
import axios from "axios";

class App extends React.Component{
    state = {
        person: {
            firstName: '',
            lastName: '',
            age: '',

        },
        people: [],
        checkedPeople: []
    }

    componentDidMount = () => {
        axios.get("/api/home/getpeople").then(({ data }) => {
            this.setState({ people: data });
        })
    }

    onInputChange = e => {
        const person = this.state.person;
        person[e.target.name] = e.target.value;
        this.setState({ person })
    }

    onAddPerson = () => {
        const { person } = this.state;
        axios.post("/api/home/addperson", person).then(() => {
            axios.get("/api/home/getpeople").then(({ data }) => {
                this.setState({ people: data, person: { firstName: "", lastName: "", age: "" } });
            })
        })
    }

    onClickCheckBox = e => {
        //didnt deal with uncheck - just tried ifelse not work..... now i think it does
        const copy = this.state.checkedPeople;
        console.log(parseInt(e.target.id));
        if (copy.includes(parseInt(e.target.id))) {
           const copy2 = copy.filter(p => p !== parseInt(e.target.id));
            console.log(copy);
            this.setState({ checkedPeople: copy2 });
        } else {
            copy.push(parseInt(e.target.id));
            this.setState({ checkedPeople: copy });

        }
        console.log(this.state.checkedPeople, e.target.id);
       
    }

    onClearAll = () => {
        this.setState({ checkedPeople: [] });
    }

    onCheckAll = () => { 
        const copy = this.state.people.map(p => p.id);
        this.setState({ checkedPeople: copy });
     
    }

    onDeleteChecked = () => {
        const pplDeleteIds = this.state.checkedPeople;
        axios.post("/api/home/deletepeople", { Ids: pplDeleteIds }).then(() => {
            axios.get("/api/home/getpeople").then(({ data }) => {
                this.setState({ people: data, checkedPeople: [] });
            });
        });
    }

    render() {
        return (<div className="containor" style={{ marginTop: 40, marginLeft: 20 }}>
            <PersonAdder onAddPerson={this.onAddPerson} onInputChange={this.onInputChange} person={this.state.person} />
            <PeopleTable people={this.state.people} checkedPeople={this.state.checkedPeople}
                onClickCheckBox={this.onClickCheckBox} />
            <ButtonRow onDeleteChecked={this.onDeleteChecked} onCheckAll={this.onCheckAll}
                onClearAll={this.onClearAll} />
        </div>);
    }
}

render(<App />, document.getElementById('root'));


