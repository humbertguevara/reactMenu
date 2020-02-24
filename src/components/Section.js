import React from 'react';

class Section extends React.Component {  

    onSelectSection() {
        this.props.onSectionClick(this.props.id);        
    }

    render () {
        return (         
            <li>                
                <div                    
                    className="section-item-container"
                    onClick={this.onSelectSection.bind(this)}>  
                    <div className="img-wrapper">                       
                        <img src={this.props.img_url} alt={this.props.name}/>
                    </div>
                    <div className="info">
                        <div 
                        style={{
                            textDecoration: this.props.selectedSection === this.props.id ? 'underline' : ''
                        }}>
                            {this.props.name}
                           
                        </div>
                    </div>
                </div>
            </li>
        );
    }
};

export default Section;