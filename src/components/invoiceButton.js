import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class InvoiceButton extends Component {
    render() {
        return (
            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <RaisedButton label="FAKTURA" fullWidth={true} onTouchTap={() => { alert('elo!');}}/>
            </div>
        )
    }
}