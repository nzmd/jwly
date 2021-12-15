import React, { Component } from 'react'
import { Button, Row, Col, message } from 'antd';
import Carousel from './components/Carousel/Carousel';
import Read from './components/Read/Read'
import './index.less'
import foot1 from './img/foot1.png'
import foot2 from './img/foot2.png'
import foot3 from './img/foot3.png'
import tieba from './img/tieba.png'
import read from './img/read.png'
import vedio from './img/vedio.png'
import TimelineItem from 'antd/lib/timeline/TimelineItem';

class App extends Component {
	constructor() {
		super()
		this.state = {
			show: 1,
		}
	}
	async componentWillUnmount() {

	}
	async componentDidMount() {

	}
	ReturnBack = async (data) => {
		console.log(data, '接收子组件返回按键传值')
		await this.setState({ show: data })
	}

	render() {
		return (
			<div style={{ margin: '10px' }}>
				{/* show为1、2、3分别控制底部导航栏三个显示区域,4控制阅读区域*/}
				{
					this.state.show === 1
						? <div>
							{/* 图片轮播区域 ↓↓↓*/}
							<Carousel />
							{/* 导航区 ↓↓↓*/}
							<div className='Nav' style={{ marginTop: '10px' }}  >
								<Row gutter={16}>
									<Col span={8}>
										<p
											onClick={() => {
												this.setState({ show: 4 })

											}}
										>
											<p style={{ width: '50%', float: 'left' }}>
												<span className='Module'>文章</span>
												<p className='Module-back'>好文分享</p>
											</p>
											<p style={{ width: '50%', float: 'right' }}>
												<img src={read} style={{ width: '100%' }} />
											</p>
										</p>
									</Col>
									<Col span={8}>
										<p
											onClick={() => {
												message.error('对不起，该功能暂未开放')
											}}
										>
											<p style={{ width: '50%', float: 'left' }}>
												<sapn className='Module'>贴吧</sapn>
												<p className='Module-back'>跳转贴吧</p>
											</p>
											<p style={{ width: '50%', float: 'right' }}>
												<img src={tieba} style={{ width: '100%' }} />
											</p>
										</p>
									</Col>
									<Col span={8}>
										<p
											onClick={() => {
												message.error('对不起，该功能暂未开放')
											}}
										>
											<p style={{ width: '50%', float: 'left' }}>
												<span className='Module'>视频</span>
												<p className='Module-back'>视频分享</p>
											</p>
											<p style={{ width: '50%', float: 'right' }}>
												<img src={vedio} style={{ width: '100%' }} />
											</p>
										</p>
									</Col>
								</Row>
								{
									false
									&& <Row >
										<Col span={8}>
											<sapn className='Module'>漫画</sapn>
											<p className='Module-back'>漫画分享</p>
										</Col>
										<Col span={8}>
											<span className='Module'>音频</span>
											<p className='Module-back'>音频分享</p>
										</Col>
										<Col span={8}>
											<sapn className='Module'>网站</sapn>
											<p className='Module-back'>网站汇总</p>
										</Col>
									</Row>
								}

							</div>
							{/* 主体内容区 ↓↓↓ */}

						</div>
						: ' '
				}
				{
					this.state.show === 2
						? <div> 打卡区暂未开发 ，敬请期待</div>
						: ' '
				}
				{
					this.state.show === 3
						? <div> 我的暂未开发，敬请期待</div>
						: ' '
				}
				{
					this.state.show === 4
						? <Read ReturnBack={this.ReturnBack} />
						: ' '
				}
				{/* 页尾部分 ↓↓↓ */}
				<div className='Footer'>
					<Row>
						<Col span={8}>
							<div
								onClick={() => {
									this.setState({ show: 1 })
								}}
							>
								<img src={foot1} className='FootImg'></img>
								<p>良药</p>
							</div>
						</Col>
						<Col span={8}>
							<div
								onClick={() => {
									this.setState({ show: 2 })
								}}
							>
								<img src={foot3} className='FootImg'></img>
								<p>打卡</p>
							</div>
						</Col>
						<Col span={8}>
							<div
								onClick={() => {
									this.setState({ show: 3 })
								}}
							>
								<img src={foot2} className='FootImg'></img>
								<p>我的</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default App
