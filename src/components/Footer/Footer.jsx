import React, { PureComponent, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.css";
import ribbon from "../../assets/footerribbon.svg"

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <img src={ribbon} className="footer-ribbon"/>
                </div>
                <div className="footer">
                    <a href="https://www.linkedin.com/in/huldalilja" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
                    </a>
                    <a href="https://www.instagram.com/huldalilja" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                        <FontAwesomeIcon icon={['fab', 'instagram']}/>
                    </a>
                    <a href="https://github.com/huldalilja/huldalilja.com" target="_blank" rel="noopener noreferrer" className="social-icon github">
                        <FontAwesomeIcon icon={['fab', 'github']}/>
                    </a>
                    <a href = "mailto:hulda@huldalilja.com?subject=What's up?&body=Hello!" target="_blank" rel="noopener noreferrer" className="social-icon envelope">
                        <FontAwesomeIcon icon="envelope"/>
                    </a>
                    <p className="made-by-text">Made by: Hulda Lilja Hannesdóttir</p>
                </div>
            </Fragment>
        )
    }
}

export default Footer