import React from 'react'
import '../src/pricing.css'
import { Layout, Typography, Input, Button } from 'antd'
function Pricing() {
	const { Header, Content } = Layout;
	const { Title } = Typography;
	return (
		<Layout className="main">
			<div className="content">
				<Content>
					<div className="div1">
						<div style={{ display: 'flex' }}>
							<Title className="title" style={{ color: 'white' }} level={3}>Pricing</Title>
							<Button type="text" className="monthly" style={{ color: 'white' }}> Monthly</Button>
							<Button type="primary" className="Yearly"  > Yearly</Button>
						</div>
						<Title className="text" style={{ color: 'white' }} level={5}>Use linear for free with your whole team.Upgrade
		      to unlimited files uploads,issues and additional features </Title>
					</div>
					<Title className="title1" style={{ color: 'white' }} level={5}>For enterprise plans,Contact us.</Title>
					<div className="div2" >
						<Content className="content_col">
							<Title class="title2">Free</Title>
							<Title className="text4" level={2}>$0/month</Title>
							<Title className="title3" level={5}>Some features</Title>
							<Title className="common" level={5}>Some features</Title>
							<Title className="common" level={5}>Some features</Title>
							<Button type="primary" disabled className="Button1">current plan </Button>
						</Content>
						<Content className="content2">
							<Title class="middle_box">Premium</Title>
							<Title className="text4" style={{ color: 'white' }} level={2}>$29/month</Title>
							<Title className="common" level={5}>Some features</Title>
							<Title className="common" level={5}>Some features</Title>
							<Title className="common" level={5}>Some features</Title>
							<Button type="primary" disabled className="Button1">Upgrade</Button>
						</Content>
						<Content className="content_col">
							<Title class="title2">Enterprise</Title>
							<Title className="text4" level={2}>$49/month</Title>
							<Title className="common" level={5}>Some features</Title>
							<Title className="common" level={5}>Some features</Title>
							<Title className="common" level={5}>Some features</Title>
							<Button block className="Button1">Upgrade</Button>
						</Content>
					</div>
				</Content>
			</div>
		</Layout>
	);
}
export default Pricing;