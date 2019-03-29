import React from 'react';
import './index.css';

class Dialog extends React.Component {
    render () {
        const { 
            title,
            footer,
            onOk,
            onCancel,
            maskOpen
         } = this.props;
        return (
            <div>
                {maskOpen ? <div className="mask"/> : null}
                <div className="dialog">
                    <div 
                        className="g-modal"
                    >
                        <div className="g-modal-header">
                            {title ? title : `Modal`}
                        </div>
                        <div className="g-modal-body">
                            沙发舒服撒到发疯 阿萨德撒
                        </div>
                        {
                            footer === true ? 
                            <div className="g-modal-footer">
                                <button onClick={onOk}>ok</button>
                                <button onClick={onCancel}>cancel</button>
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