import React, { PureComponent, Fragment } from 'react'
import "./Tabs.css"
import Instructions from "../Instructions/Instructions"
import howToMake from './HowToMakeInstructions.js';
import howToUse from './HowToUseInstructions.js';

class Tabs extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            showingTab1: true,
            showingTab2: false
        }
    }

    showTab1= () => {
        this.setState({
            showingTab1: true,
            showingTab2: false
        })
    }

    showTab2= () => {
        this.setState({
            showingTab1: false,
            showingTab2: true
        })
    }

    render() {
        var tab1ClassName = "hide-tab-content";
        var tab2ClassName = "hide-tab-content";
        var tab1 = "tab";
        var tab2 = "tab";

        if (this.state.showingTab1) {
            tab1ClassName = "show-tab-content";
            tab1 = "tab active-tab";
            tab2 = "tab";
        }
        else {
            tab2ClassName = "show-tab-content";
            tab1 = "tab";
            tab2 = "tab active-tab";
        }

        return (
            <div className="tabs">
                <button onClick={this.showTab1} className={tab1}>How to use</button>
                <button onClick={this.showTab2} className={tab2}>How to make</button>
                <div className={tab1ClassName}>
                    <Instructions instructions={howToUse}/>
                </div>
                <div className={tab2ClassName}>
                    <Instructions instructions={howToMake}/>
                </div>
            </div>
        )
    }
}

export default Tabs