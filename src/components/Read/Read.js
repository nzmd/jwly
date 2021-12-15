import React, { Component } from 'react';
import './index.less'
import Return from '../../img/Return.png'
import jwly from '../../img/jingxin.png'
import txt from '../../img/txt.png'
import Show from '../../img/show.png'

class Read extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 1,// 1默认显示主页面
            MenuShow: false,//默认关闭左侧目录导航栏
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.show === 1
                        ? <div>
                            <div className='Head'>
                                <img
                                    src={Return}
                                    onClick={this.props.ReturnBack.bind(this, 1)}
                                />
                            </div>
                            <ul className='Box'>
                                <li
                                    onClick={() => {
                                        this.setState({ show: 2 })
                                    }}
                                >
                                    <div>
                                        <img src={jwly} />
                                    </div>
                                    <div>
                                        <p>良药苦口</p>
                                    </div>

                                </li>
                                <li>
                                    <div>
                                        <img src={txt} />
                                    </div>
                                    <div>
                                        <p>更多书籍收集中</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        : ' '
                }
                {
                    this.state.show === 2
                        ? <div>
                            <div className='Head'>
                                <img
                                    src={Return}
                                    onClick={() => this.setState({ show: 1 })}
                                />
                            </div>
                        </div>
                        : ' '
                }
            </div>
        );
    }
}

export default Read;