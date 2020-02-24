import React from 'react';
import Item from './Item';

class Grid extends React.Component {       
    
    render = () => {             
        return (            
            <div className="content-grid-container">
                {this.props.items.map(item => <Item {...item}/>)}                
            </div>        
        )
    } 
}

export default Grid;