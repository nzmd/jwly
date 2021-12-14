import React, { Component } from 'react';
import './index.less'

class Read extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='Head'>
                    <p>返回</p>
                </div>
                <ul className='Box'>
                    <li>良药</li>
                    <li>语录</li>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ul>
            </div>
        );
    }
}

export default Read;