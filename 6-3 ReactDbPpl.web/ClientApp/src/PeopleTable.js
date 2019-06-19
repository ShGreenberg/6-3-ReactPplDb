import React from "react";
import {Link} from "react-router-dom";
export default class PeopleTable extends React.Component {

    render() {
        const { people, checkedPeople, onClickCheckBox } = this.props;
        const check = (id) => {
            if (checkedPeople.includes(id)) {
                console.log(id);
                return "checked"
            }
        }

        return (<table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Delete</th>
                    <th>First Name</th>
                    <th>Last Name </th>
                    <th>Age</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {people.map((person, idx) => {
                    return (<tr key={idx} style={checkedPeople.includes(person.id) ? { backgroundColor: "#FF0000" } :
                        { backgroundColor: "" }} >
                        <td ><input type="checkbox" onChange={onClickCheckBox} id={person.id} checked={check(person.id)} /></td>
                        <td>{person.firstName}</td>
                        <td>{person.lastName}</td>
                        <td>{person.age}</td>
                        <td><Link to={`/updateperson/${person.id}`} /></td>
                    </tr>)
                })}
            </tbody>
        </table>)
    }
}


