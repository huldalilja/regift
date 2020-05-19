import React, { PureComponent, Fragment } from 'react'
import "./Tabs.css"

class Tabs extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="tabs">
                <button className="tab active-tab">How to use</button>
                <button className="tab">How to make</button>
            </div>
        )
    }
}

export default Tabs