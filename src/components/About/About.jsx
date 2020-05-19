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
                    <p>For a long time my dad has made a big effort of saving the Christmas wrapping paper. 
                        I'm talking about us trying to unwrapping the gifts more carefully (or as much as our excitement allows) so my dad can collect the paper, cut the whole pieaces of it and almost ironing it as well!
                        Close to last christmas I started to think this wasn't the most useful way of not wasting all that paper and started thinking about reusable packaging.
                        The idea isn't new but I didn't really like the look of whole bags and just using a cloth and a ribbon can be annoying trying to pair a nice and big enough cloth and ribbon.
                        I started thinking of a way to stick the ribbon to the material in a convinient way. So whenever needed you could find a packaging and be sure it would fit the gift.
                        Later the idea about having three different standardized gifts came, adapted to the three most famously common gifts.First prototype with stapler etc</p>
                </div>
            </div> 
        );
    }
}

export default About