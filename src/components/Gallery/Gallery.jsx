import React, { PureComponent} from 'react'
import "./Gallery.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import slides from './Slides.js';

class Gallery extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            skipOneAutomaticChange: false,
            imgFadeClass: true,
            slideIndex: 0
        }
        this.slides = slides;
    }

    componentDidMount() {
        setTimeout(this.automaticNextSlide, 8000);
    }

    automaticNextSlide= (n) => { 
        if (!this.state.skipOneAutomaticChange) {
            this.plusSlides(1);
        }
        else{
            this.setState({skipOneAutomaticChange: false})
        }
        setTimeout(this.automaticNextSlide, 5000);
    }

    plusSlides= (n) => {
        var idx = this.state.slideIndex + n;
        if (idx >= this.slides.length) {
            idx = 0;
        }
        else if (idx < 0) {
            idx = this.slides.length - 1;
        }
        this.setState({
            skipOneAutomaticChange: true,
            slideIndex: idx,
            imgFadeClass: !this.state.imgFadeClass
        })
    }


    currentSlide = (n) => {
        this.setState({
            skipOneAutomaticChange: true,
            slideIndex: n,
            imgFadeClass: !this.state.imgFadeClass
        })
    }


    render() {
        var slides = this.slides;
        var imglink = null;
        var imgClassNames = "carousel-img"
        if (!this.state.imgFadeClass){
            imgClassNames += " fade"
        }
        else {
            imgClassNames += " fade2"
        }
        if (this.slides[this.state.slideIndex].link !== undefined) {
            imglink =(
                <a target="_blank" rel="noopener noreferrer" href={this.slides[this.state.slideIndex].url}><br/>{this.slides[this.state.slideIndex].link}</a>
            )
        }
        return (
            <div id="ActivitiesDiv" style={{ marginTop: 80 }}>
                <div className="title carousel-title">How it looks</div>
                <p style={{textAlign: "center"}}>Send me your results to hulda@huldalilja.com so I can feature it here!</p>
                <div className="carousel-container">
                    <a href="./" className="anchor" id="Activities">a</a>
                    <img className={imgClassNames} alt="" src={this.slides[this.state.slideIndex].img}/>
                    <div className="text">{this.slides[this.state.slideIndex].text}
                        {imglink}
                    </div>
                    <a className="prev" onClick={ () => {
                            this.plusSlides(-1)
                        }}><span className="center-inside">&#10094;</span></a>
                    <a className="next" onClick={ () => {
                            this.plusSlides(1)
                        }}><span className="center-inside">&#10095;</span></a>
                </div>

                <div className="carousel-dots">
                    {slides.map((item, idx) => {
                        let classNames = "dot";
                        if (this.state.slideIndex === idx) {
                            classNames += " active";
                        }
                        return (
                            <span key={idx} className={classNames} onClick={ () => {
                                this.currentSlide(idx)}}>
                            </span>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Gallery