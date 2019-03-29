import React from 'react';
import './index.css';

class Dialog extends React.Component {
    render () {
        const props = this.props;
        return (
            <div>
                {props.maskOpen ? <div className="mask"/> : null}
                <div className="dialog">
                    <div 
                        className="g-modal"
                    >
                        <div className="g-modal-header">
                            {props.title ? props.title : `Modal`}
                        </div>
                        <div className="g-modal-body">
                            {props.children}
                        </div>
                        {
                            props.footer === true ? 
                            <div className="g-modal-footer">
                                <button onClick={props.onOk}>ok</button>
                                <button onClick={props.onCancel}>cancel</button>
                            </div>
                            :
                            null
                        }
                        
                    </div>
                    

                </div>
            </div>
        );
    }
}

export default Dialog;