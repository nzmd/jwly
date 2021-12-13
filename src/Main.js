import React, { Component } from 'react'
import { Button, DatePicker } from 'antd';
import { WechatOutlined, WeiboOutlined, SearchOutlined } from '@ant-design/icons'
import './index.less'

const { RangePicker } = DatePicker;

class App extends Component {
	constructor() {
		super()
		this.state = {
			show: false,
		}
	}
	async componentWillUnmount() {

	}
	async componentDidMount() {

	}
	fun = async () => {

	}

	render() {
		return (
			<div style={{ margin: '20px' }}>
				<div>
					<button>点我</button>
					<Button type="primary">按钮1</Button>
				</div>
				<div>
					<Button >按钮2</Button>
					<Button type="link">按钮3</Button>
				</div>
				<div>
					<Button type="primary" icon={<SearchOutlined />}>
						Search
					</Button>
				</div>
				<div>
					<DatePicker />
				</div>
			</div>
		)
	}
}

export default App
