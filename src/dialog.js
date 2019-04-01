import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Dialog extends React.Component {


    getMaskElement = () => {
        const props = this.props;
        let maskElement;
        if (props.maskOpen !== false) {
            maskElement = (
               <div className="mask"/> 
            ) 
        }
        return maskElement
    }

    getDialogElement = () => {
        const props = this.props;
        let dest = {};
        if (props.width !== undefined) {
            dest.width = props.width;
        }
        if (props.height !== undefined) {
            dest.height = props.height;
        }

        const style = {...props.style, ...dest};

        let headerElement, footerElement;
        if (props.header !== false) {
            headerElement = (
                <div className="g-modal-header">
                    {props.title ? props.title : `Modal`}
                </div>
            )
        }

        if (props.footer !== false ) {
            footerElement = (
                <div className="g-modal-footer">
                    <button onClick={props.onOk}>{props.okText || 'ok'}</button>
                    <button onClick={props.onCancel}>{props.cancelText || 'cancel'}</button>
                </div>
            )
        }

        return (
            <div 
                className="g-modal"
                style={style}
            >
                {headerElement}
                <div className="g-modal-body">
                    {props.children}
                </div>
                {footerElement}
            </div>
        

        )
    }

    render () {
        const props = this.props;
        return (
            <div>
                {this.getMaskElement()}
                <div className="dialog">
                   {this.getDialogElement()}
                </div>
            </div>
        );
    }
}

export default Dialog;

Dialog.prototypes = {
    maskOpen: PropTypes.bool,
    header: PropTypes.bool,
    title: PropTypes.string,
    footer: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.elementType
    ]),
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    width: PropTypes.string,
    heiht: PropTypes.string,
    style: PropTypes.object,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
}