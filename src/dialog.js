import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Dialog extends React.Component {

    maskClosable = (e) => {
        const props = this.props;
        if (props.maskClose !== false) {
            if (e.target === e.currentTarget) {
                props.onCancel();
              }
        }
    }

    getMaskElement = () => {
        const props = this.props;
        let maskElement;
        if ( props.maskOpen !== false) {
            maskElement = (
               <div className="mask" /> 
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
                    <button className="modal-submit" onClick={props.onOk}>{props.okText || 'ok'}</button>
                    <button className="modal-cancel" onClick={props.onCancel}>{props.cancelText || 'cancel'}</button>
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
                <div className="dialog"
                     onClick={(e) => {this.maskClosable(e); }}
                >
                   {this.getDialogElement()}
                </div>
            </div>
        );
    }
}

export default Dialog;

Dialog.prototypes = {
    maskOpen: PropTypes.bool,
    maskClose: PropTypes.bool,
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