import React from 'react';
import Section from './Section';
import Arrow from './Arrow';


class Menu extends React.Component {      
    
    constructor(props) {
        super(props);   
        this.state = {
            sections: this.props.sections,
            currIndex: 0,
            cantImgVisibles: 5,
            leftArrowVisible: false,
            rightArrowVisible: true,  
            selectedSection: this.props.selectedSection         
        }     
    } 

    prev() {
        if(this.state.currIndex > 0){
            const newIndex =  this.state.currIndex - 1;
            this.setState({
                currIndex: newIndex,
                rightArrowVisible: true,
                leftArrowVisible: newIndex === 0 ? false : true
            });
        } else {
            this.setState({                
                leftArrowVisible: false
            });
        }
    }

    next() {
        if(this.state.currIndex + this.state.cantImgVisibles < this.state.sections.length){
            const newIndex =  this.state.currIndex + 1;
            this.setState({
                currIndex: newIndex,
                leftArrowVisible: true
            });
        } else {
            this.setState({                
                rightArrowVisible: false
            });
        }               
    }
    
    render() {        
        const currSections = this.state.sections.slice(this.state.currIndex, this.state.currIndex + this.state.cantImgVisibles);        
        return (
            <div className="top-menu-container">
                {this.state.leftArrowVisible ? <Arrow 
                    direction="left" 
                    clickFunction={this.prev.bind(this)}
                    glyph="<"
                /> : null }

                <ul>
                    {currSections.map(section => 
                        <Section
                            key={section.id}                                                     
                            {...section} 
                            {...this.props}/>)}
                </ul>

                {this.state.rightArrowVisible ? <Arrow 
                    direction="right" 
                    clickFunction={this.next.bind(this)}
                    glyph=">"
                 /> : null}
            </div>        
        )
    } 
}

export default Menu ;