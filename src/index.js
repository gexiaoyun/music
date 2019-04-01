import React from 'react';
import Dialog from './dialog';
import './index.css';

export default class Modal extends React.Component {

    render () {
        const { visible } = this.props;
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
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