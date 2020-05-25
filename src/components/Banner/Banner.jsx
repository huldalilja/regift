import React, { PureComponent } from 'react'
import "./Banner.css"

class Banner extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            headerHeight: window.innerWidth*0.269
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        var height= 0;
        if(window.innerWidth < window.innerHeight) {
            // Portrait mode
            height = window.innerWidth * 0.5;
        }
        else {
            // Landscape mode
            height = window.innerHeight;
        }
        this.setState({
            headerHeight: height
        })
    }

    render() {
        return (
            <header className="App-banner"/>      
        )
    }
}

export default Banner