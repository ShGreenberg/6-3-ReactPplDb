import React from "react";
import axios from "axios";
import PeopleTable from "./PeopleTable";
import ButtonRow from "./ButtonRow";
export default class HomePage extends React.Component {
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

    //onInputChange = e => {
    //    const person = this.state.person;
    //    person[e.target.name] = e.target.value;
    //    this.setState({ person })
    //}

    //onAddPerson = () => {
    //    const { person } = this.state;
    //    axios.post("/api/home/addperson", person).then(() => {
    //        axios.get("/api/home/getpeople").then(({ data }) => {
    //            this.setState({ people: data, person: { firstName: "", lastName: "", age: "" } });
    //        })
    //    })
    //}

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
        console.log("hp");
        return (<div className="containor" style={{ marginTop: 40, marginLeft: 20 }}>
           
            <PeopleTable people={this.state.people} checkedPeople={this.state.checkedPeople}
                onClickCheckBox={this.onClickCheckBox} />
            <ButtonRow onDeleteChecked={this.onDeleteChecked} onCheckAll={this.onCheckAll}
                onClearAll={this.onClearAll} />
        </div>);
    }
}
// <PersonAdder onAddPerson={this.onAddPerson} onInputChange={this.onInputChange} person={this.state.person} />