import React from 'react'
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Input, Button } from 'antd';
function Home() {
	return (
		<div style={{ backgroundColor: '#1f2024', height:700 }}>
			<div style={{ marginLeft: '5%' }}>
				<h6 style={{ color: 'white', width: '10%' }}>Logged in as: andy@hologram.dev</h6>
			</div>
			<div style={{ marginTop: 30 }}>
				<h4 style={{ color: 'white', textAlign: 'center' }}>Create a new work space</h4>
				<h6 style={{ textAlign: 'center', color: 'white', width: '25%', marginLeft: '38%' }}>Workspace are shared environments where teams can work on projects cycles and tasks </h6>
				<div style={{ marginLeft: '37%', width: '28%', backgroundColor: '#27282c', height: 440, borderRadius: 20 }}>
					<div style={{ padding: 15, marginLeft: '10%' }}>
						<h6 style={{ color: 'white' }}>Workspace Name <QuestionCircleOutlined /> </h6>
						<Input.Group>
							<input   style={{ width: '80%' }} />
						</Input.Group>
						<h6 style={{ color: 'white' }}>Workspace URL <QuestionCircleOutlined /> </h6>
						<Input.Group>
							<input placeholder="hologram.app/ my-app" style={{ width: '80%' }} />
						</Input.Group>
						<p style={{ marginLeft: 10 }}>---------------------------------</p>
						<h6 style={{ color: 'white' }}>How large is your company <QuestionCircleOutlined /> </h6>
						<Input.Group>
							<input placeholder="Select company size" style={{ width: '80%' }} />
						</Input.Group>
						<h6 style={{ color: 'white' }}>What is your role<QuestionCircleOutlined /> </h6>
						<Input.Group>
							<input placeholder="Select your role in the company " style={{ width: '80%' }} />
						</Input.Group>
					</div>
				</div>
				<Button style={{ marginTop: 20, marginLeft: '40%', backgroundColor: '#6a3dc7', width: '20%' }}>Log in</Button>
			</div>
		</div>
	);
}
export default Home;