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
            <div className="about-page section" id="AboutDiv">
                <a href="./" className="anchor" id="About">a</a>
                <div className="testimonial">
                    <div className="title">About the idea</div>
                    <img className="profile" src={logo} alt="Logo"/>
                    <p>For a long time, my dad has made a big effort in saving the Christmas wrapping paper. 
                        I'm talking about us trying to unwrapping the gifts more carefully (or as much as our excitement allows) so my dad could collect the paper and then the following days he would spend trimming and organizing the paper.
                        Close to last Christmas I started to think this wasn't the most useful way of not wasting all that paper and started thinking about reusable packaging.
                        The idea isn't new but I wanted to make it in a such way that it would look a lot like traditional gift wrapping and be convenient and easy to use.
                        I started thinking of a way to stick the ribbon to the material so it would be just one piece that you could be sure would fit.
                        To help with that the idea about having three different standardized gifts came, adapted to the three most famously common gifts.</p>
                </div>
            </div> 
        );
    }
}

export default About