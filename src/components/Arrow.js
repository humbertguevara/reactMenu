import React from 'react';

class Arrow extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {        
            direction: props.direction,            
            glyph: props.glyph
        }
    }    

    clickFunction() {
        this.props.clickFunction();
    }
    
    render() {
        return (
            <div className={`slide-arrow ${this.state.direction}`} 
                onClick = { this.clickFunction.bind(this) }>
                { this.state.glyph }
            </div>
        );
    }
}

export default Arrow;