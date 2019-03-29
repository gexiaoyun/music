import React from 'react';
import Dialog from './dialog';
import './index.css';

export default class FirstButton extends React.Component {
    render () {
        const { visible } = this.props;
        return (
            <div>
                { visible === true ? 
                    <Dialog  
                        {...this.props}
                    />
                    :
                    null
                 }
                
            </div>
            
        );
    }
}