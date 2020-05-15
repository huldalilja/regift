import React, { Component} from 'react';
import "./About.css";
import logo from "../../assets/icon.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class About extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="page" id="AboutDiv">
                <a href="./" className="anchor" id="About">a</a>
                <div className="testimonial">
                    <div className="title">About</div>
                    <img className="profile" src={logo} alt="Logo"/>
                    <p>My name is Hulda Lilja Hannesdóttir and I am a Computer Scientist and a Software Engineering student. <br/>
                        I also work as a research assistant at Reykjavík University.</p>
                </div>
            </div> 
        );
    }
}

export default About