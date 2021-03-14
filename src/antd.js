import React from 'react'
import { QuestionCircleOutlined, DownOutlined } from "@ant-design/icons";
import { Layout, Typography, Input, Button } from 'antd'
import './App.css'
function Antd() {
	const { Header, Content } = Layout;
	const { Title } = Typography;

	return (
		<div style={{ backgroundColor: '#141414' }} className="App">
			<Layout className="main" >
				<Title style={{ color: 'white', width: '15%' }} level={5}>Logged in as:andy@hologram.dev</Title>
			</Layout>
			<div style={{ marginTop: 15 }}>
				<Title style={{ color: 'white', textAlign: 'center' }} level={3}>Create a new workspace</Title>
				<Title style={{ color: 'white', textAlign: 'center', width: '35%', marginLeft: '32%' }} level={5}>Workspace as shared environments where teams can work on projects,cycles and tasks</Title>
			</div>
			<Content className="content">
				<div style={{ marginTop: 30, marginLeft: '18%' }}>
					<Title style={{ color: 'white' }} level={5}>Workspace Name<QuestionCircleOutlined /> </Title>
					<Input.Group>
						<input className="inputFiels" />
					</Input.Group>
					<div style={{ marginTop: 30 }}>
						<Title style={{ color: 'white' }} level={5}>Workspace URL<QuestionCircleOutlined /> </Title>
						<Input.Group>
							<input className="inputFiels" placeholder="hologram.app/ mygroup" />
						</Input.Group>
					</div>
					<div style={{ marginTop: 30 }}>
						<Title style={{ color: 'white' }} level={5}>How large is your company<QuestionCircleOutlined /> </Title>
						<Input.Group>
							<input className="inputFiels" placeholder="Select company size" />
						</Input.Group>
					</div>
					<div style={{ marginTop: 30 }}>
						<Title style={{ color: 'white' }} level={5}>What is your role<QuestionCircleOutlined /> </Title>
						<Input.Group style={{ display: 'flex' }}>
							<input className="inputFiels" placeholder="Select your role in the company" />
						</Input.Group>
					</div>
				</div>
			</Content>
			<Button className="Button">Log in</Button>
		</div>
	);
}
export default Antd;
