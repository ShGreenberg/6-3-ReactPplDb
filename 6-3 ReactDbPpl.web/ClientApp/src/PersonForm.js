import React from "react";

export default class PersonForm extends React.Component {

    render() {
        const { onInputChange, onSubmit, person } = this.props;
        return (<div className="row">
            <div className="col-md-3">
                <input type="text" placeholder="first name" value={person.firstName} name="firstName" className="form-control" onChange={onInputChange} />
            </div>
            <div className="col-md-3">
                <input type="text" placeholder="last name" value={person.lastName} name="lastName" className="form-control" onChange={onInputChange} />
            </div>
            <div className="col-md-3">
                <input type="text" placeholder="age" value={person.age} name="age" className="form-control" onChange={onInputChange} />
            </div>
            <div className="col-md-3">
                <button className="btn btn-primary" onClick={onSubmit}>Save Person</button>
            </div>
        </div>)
    }
}