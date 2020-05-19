import React, { PureComponent, Fragment } from 'react'
import "./Instructions.css"

class Instructions extends PureComponent {
    constructor(props) {
        super(props)
        this.instructions = this.props.instructions;
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                {this.instructions.map((item, idx) => {
                    return (
                        <div key={idx}>
                            <div>
                                <img className="instruction-img" src={item.img} alt="Instruction picture"></img>
                            </div>
                            <p className="instruction-text">{item.text}</p>
                        </div>
                    )
                })}
            </div> 
        )
    }
}

export default Instructions