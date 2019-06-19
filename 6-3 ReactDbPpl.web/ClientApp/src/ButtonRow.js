import React from "react";
import { Link } from "react-router-dom";
export default class ButtonRow extends React.Component {

    render() {
        const { onCheckAll, onClearAll, onDeleteChecked } = this.props;

        return (<div className="row">
            <div className="col-md-9">
                <div className="col-md-3">
                    <button className="btn btn-info" onClick={onClearAll}>Clear All</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-warning" onClick={onCheckAll}>Check All</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-danger" onClick={onDeleteChecked}>Delete Checked</button>
                </div>
                <div className="col-md-3">
                    <Link className="btn btn-primary" to={"/addperson"}>Add Person</Link>
                </div>
            </div>
        </div>)
    }
}