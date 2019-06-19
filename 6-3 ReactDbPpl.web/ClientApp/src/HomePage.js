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

    onClickCheckBox = e => {
        const copy = this.state.checkedPeople;
        if (copy.includes(parseInt(e.target.id))) {
            const copy2 = copy.filter(p => p !== parseInt(e.target.id));
            this.setState({ checkedPeople: copy2 });
        } else {
            copy.push(parseInt(e.target.id));
            this.setState({ checkedPeople: copy });
        }
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
            <ButtonRow onDeleteChecked={this.onDeleteChecked} onCheckAll={this.onCheckAll}
                onClearAll={this.onClearAll} />
            <br/>
            <PeopleTable people={this.state.people} checkedPeople={this.state.checkedPeople}
                onClickCheckBox={this.onClickCheckBox} />
           
        </div>);
    }
}
