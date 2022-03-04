import React, { Component } from 'react';
import QuickRoll from './QuickRoll';
import RollInput from './RollInput';
import RollTable from './RollTable';

class MainCanvas extends Component {
    render() {
        return (
            <div className="App">
                <QuickRoll />
                <RollInput />
			        	<RollTable />
            </div>
        );
    }
}

export default MainCanvas;