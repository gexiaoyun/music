import React from 'react';
import '../../less/header.less'

class Header extends React.Component{
   constructor(){
       super();
       this.state = {
            recommend:'给你推荐远走高飞'
       }
   }

    render (){
        const {recommend} = this.state;
        return (
            <header className='head'>
                <div className='head-search'>
                    <span className='musicIcon fa fa-microphone fa-2x'></span>
                    <p>
                        <i className='searchIcon'></i>
                        <input type="text" defaultValue={recommend} />
                    </p>
                    <span className='playAni'></span>
                </div>
                
            </header>
        )
    }
}

export default Header