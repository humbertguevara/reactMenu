import React from 'react';

class Item extends React.Component {
    
    render() {
        return (
            <div className="grit-item-container">
                <div className="img-wrapper">
                    <img src={this.props.img_url} alt={this.props.name}/>
                </div>
                <div className="info">
                    <div className="name">
                        {this.props.name}                    
                    </div>
                </div>
            </div>
        );
    }
};

export default Item;