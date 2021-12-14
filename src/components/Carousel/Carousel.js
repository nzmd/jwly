import React, { Component } from 'react';
import img1 from '../../img/backgroundImg1.png'

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <img src={img1} style={{ width: '100%', height: '100%' }} />
            </div>
        );
    }
}

export default Carousel;