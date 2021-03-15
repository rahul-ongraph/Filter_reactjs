import React, { useState, useEffect } from "react";
import {
  Layout,
  Typography,
  Input,
  Menu,
  Slider,
  Row,
  Col,
  Checkbox,
  Image,
  Rate,
  Button,
} from "antd";
import {
  SearchOutlined,
  MenuOutlined,
  MailTwoTone,
  BellTwoTone,
  UserOutlined,
  HomeOutlined,
  GiftOutlined,
  LoadingOutlined,
  InboxOutlined,
  CloseCircleOutlined,
  CloseCircleFilled,
  StarTwoTone,
  Loading3QuartersOutlined,
} from "@ant-design/icons";
import "../src/Profile.css";
import coastal from "../src/images/coastal.jpg";
import kings from "../src/images/kings.jpg";
import Lustrio from "../src/images/Lustrio.jpg";
import massView from "../src/images/massView.jpg";
import omni from "../src/images/omni.jpg";
import paramount from "../src/images/paramount.jpg";
import primland from "../src/images/primland.jpg";
import roadside from "../src/images/roadside.jpg";
import hill from "../src/images/hill.jpg";
import Malibu from "../src/images/Malibu.jpg";
import { findByDisplayValue } from "@testing-library/dom";

const data1 = [
  {
		icon: <StarTwoTone />,
		// value:4,
    text: "Coasts Hotels",
    Price: 2252,
    image: coastal,
    facility: ["spa"],
    text2: "APARTMENT",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    icon1: 4,
  },
  {
    icon: <StarTwoTone />,
    text: "Kings Inn",
    Price: 6120,
    image: kings,
    facility: ["spa", "wifi", "cafe"],
    text2: "HOLIDAY",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    icon1: 3,
  },
  {
    icon: <StarTwoTone />,
    text: "Lustrio Inn",
    Price: 1129,
    image: Lustrio,
    facility: ["bar", "cafe"],
    text2: "GUEST",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    icon1: 4,
  },
  {
    icon: <StarTwoTone />,
    text: "Moss Hotel",
    Price: 3125,
    image: massView,
    facility: ["spa", "wifi"],
    text2: "RESORT",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    icon1: 5,
  },
  {
    icon: <StarTwoTone />,
    text: "Omni Hotels",
    Price: 5542,
    image: omni,
    facility: ["spa", "wifi", "bar", "cafe"],
    text2: "BNB",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    icon1: 3,
  },
  {
    icon: <StarTwoTone />,
    text: "param Hotels",
    Price: 6180,
    image: paramount,
    facility: ["wifi", "cafe"],
    text2: "BNB",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    icon1: 5,
  },
  {
    icon: <StarTwoTone />,
    text: "primland Hotels",
    Price: 5987,
    image: primland,
    facility: ["spa", "bar", "cafe"],
    text2: "GUEST HOUSE",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    icon1: 5,
  },
  {
    icon: <StarTwoTone />,
    text: "Roadside",
    Price: 3466,
    image: roadside,
    facility: ["spa", "wifi", "bar", "cafe"],
    text2: "RESORT",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    icon1: 1,
  },
  {
    icon: <StarTwoTone />,
    text: "Malibu",
    Price: 2142,
    image: Malibu,
    facility: ["spa", "wifi", "cafe"],
    text2: "APARTMENT",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    icon1: 3,
  },
  {
    icon: <StarTwoTone />,
    text: "Hillside Hotel",
    Price: 2341,
    image: hill,
    facility: ["wifi", "cafe"],
    text2: "HOLIDAY",
    text3:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    icon1: 2,
  },
];

function Profile() {
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState([]);
  const [data, setData] = useState(data1);
  const [text, setText] = useState([]);
  const [button, setButton] = useState([]);
  const [min, setMin] = useState(1000);
  const [max, setMax] = useState(7000);
  const [sliderChange, SetsliderChange] = useState(false);

  const checkbox_Star = [
    {
      id: 1,
      value: 5,
      item: "five",
    },
    {
      id: 2,
      value: 4,
      item: "four",
    },
    {
      id: 3,
      value: 3,
      item: "three",
    },
  ];
  const checkbox_Property = [
    {
      id: 1,
      item: "Apartment",
    },
    {
      id: 2,
      item: "Holiday",
    },
    {
      id: 3,
      item: "Guest",
    },
    {
      id: 4,
      item: "Resort",
    },
    {
      id: 5,
      item: "BnB",
    },
  ];
  const checkbox_Facility = [
    {
      id: 1,
      item: "Spa",
    },
    {
      id: 2,
      item: "Wi-Fi",
    },
    {
      id: 3,
      item: "Bar",
    },
    {
      id: 4,
      item: "Cafe",
    },
  ];
  const searchFilter = (event) => {
    // if (event.target.value == "") {
    // 	setData(data1)
    // } else {
    // 	const temp = data1.filter((value) => (value.text.toLowerCase().includes(event.target.value.toLowerCase())))
    // 	setData(temp)
    // }
    setSearch(event.target.value);
  };

  const card = (user, index) => {
    return (
      <div key={index} style={{ marginTop: 30 }} className="card1">
        <div className="div1">
         
          <Title   level={3}>  {user.icon}</Title>
						<Button
						style={{marginTop:-8,marginLeft:-15}}
          size="small"
          type="primary"
					shape="circle"
        >
            {user.icon1}
        </Button>
				 <Title style={{}} level={3}>
						{user.text}{" "}
            <Title style={{ marginLeft: 25 }} level={5}>
              ${user.Price}/night
            </Title>
          </Title>
        </div>
        <Image preview={false} src={user.image} width={280} height={130} />
        {user.facility.map((item) => (
          <Button className="button">{item} </Button>
        ))}
        <Title style={{ marginLeft: 20, marginTop: 10 }} level={5}>
          {user.text2}
        </Title>
        <p style={{ marginLeft: 20, width: 250 }}>{user.text3}</p>
        <Rate defaultValue={user.icon1} />
      </div>
    );
  };

  useEffect(() => {
    // handlefilter()
    console.log("datavalue", search, "hii", rate, text, button, min, max);
    let datax;
    if (search == "") {
      datax = data1;
      // setData(data1)
    } else {
      const temp = data1.filter((value) =>
        value.text.toLowerCase().includes(search.toLowerCase())
      );
      // setData(temp)
      datax = temp;
    }
    if (rate.length == 0) {
      // setData(data1)
      datax = datax;
    } else {
      let temp1 = [];
      rate.map((item1) => {
        const temp = datax.filter((item) => item.icon1 == item1);
        let temp2 = temp1.concat(temp);
        temp1 = temp2;
      });
      // setData(temp1)
      datax = temp1;
    }
    if (text.length == 0) {
      // setData(data1)
      datax = datax;
    } else {
      let temp1 = [];
      text.map((item1) => {
        const temp = datax.filter(
          (item) => item.text2.toLowerCase() == item1.toLowerCase()
        );
        let temp2 = temp1.concat(temp);
        temp1 = temp2;
      });
      datax = temp1;
      // setData(temp1)
    }
    if (button.length == 0) {
      // setData(data1)
      datax = datax;
    } else {
      let temp1 = [];
      button.map((item1) => {
        const temp = datax.filter((item) =>
          item.facility.includes(item1.toLowerCase())
        );
        let temp2 = temp1.concat(
          temp.filter((item) => temp1.indexOf(item) < 0)
        );
        temp1 = temp2;
      });
      // setData(temp1)
      datax = temp1;
    }
    if (min < max) {
      const temp = datax.filter((item) => item.Price < max && item.Price > min);
      // setData(temp)
      datax = temp;
    } else if (min == max) {
      const temp = datax.filter((item) => item.Price == max);
      // setData(temp)
      datax = temp;
    }
    setData(datax);
  }, [search, rate, text, button, min, max]);

  //  function 	handlefilter() {

  // }

  function onChange(value) {
    // if (value.length == 0) {
    // 	setData(data1)
    // } else {
    // 	let temp1 = []
    // 	value.map((item1) => {
    // 		const temp = data1.filter((item) => item.icon1 == item1)
    // 		let temp2 = temp1.concat(temp)
    // 		temp1 = temp2
    // 	})
    // 	setData(temp1)
    // }
    setRate(value);
  }

  function onChangeProperty(value) {
    // if (value.length == 0) {
    // 	setData(data1)
    // } else {
    // 	let temp1 = []
    // 	value.map((item1) => {
    // 		const temp = data1.filter((item) => item.text2.toLowerCase() == item1.toLowerCase())
    // 		console.log("hhhhhhhhhhhh", temp, value)
    // 		let temp2 = temp1.concat(temp)
    // 		temp1 = temp2
    // 	})
    // 	setData(temp1)
    // }
    setText(value);
  }

  function onChangeFacility(value) {
    // if (value.length == 0) {
    // 	setData(data1)
    // } else {
    // 	let temp1 = []
    // 	value.map((item1) => {
    // 		const temp = data1.filter((item) => item.facility.includes(item1.toLowerCase()))
    // 		console.log("pppppppppppppp", temp)
    // 		let temp2 = temp1.concat(temp.filter((item) => temp1.indexOf(item) < 0))
    // 		temp1 = temp2
    // 	})
    // 	setData(temp1)
    // }
    setButton(value);
  }

  function sliderdata(value) {
    console.log("value", value);
    if (value[0] < value[1]) {
      // const temp = data1.filter((item) => item.Price <= value[1] && item.Price > value[0])
      // setData(temp)
      // console.log("zzzzzzzzzzzzzzz", temp)
      setMin(value[0]);
      setMax(value[1]);
      SetsliderChange(true);
    }
  }
  const { Header, Content, Footer, Sider } = Layout;
  const { Title } = Typography;
  const { SubMenu } = Menu;
  return (
    <Layout>
      <Header className="header">
        <MenuOutlined className="menu" />
        <Input.Group className="search">
          <Input
            className="input"
            size="large"
            value={search}
            placeholder="Search Hotel Name..."
            prefix={<SearchOutlined />}
            onChange={(event) => searchFilter(event)}
          />
        </Input.Group>

        <MailTwoTone className="email" />
        <Button
          style={{ marginTop: 8, marginLeft: -10 }}
          className="Button_Circle"
          size="small"
          type="primary"
          shape="circle"
        >
          4{" "}
        </Button>
        <BellTwoTone className="notification" />
        <Button
          style={{ marginTop: 8, marginLeft: -10 }}
          className="Button_Circle"
          size="small"
          type="primary"
          shape="circle"
        >
          17{" "}
        </Button>
        <UserOutlined className="userIcon" /> 
      </Header>
      <div style={{ display: "flex" }}>
        <div className="first">
          <Content>
            <Menu style={{ color: "rgba(0, 0, 0, 0.54)" }} mode="inline">
              <SubMenu
                style={{ color: "rgba(0, 0, 0, 0.54)" }}
                key="sub1"
                icon={<HomeOutlined style={{ fontSize: "20px" }} />}
              >
                <Menu.Item
                  style={{ color: "rgba(0, 0, 0, 0.54)" }}
                  key="1"
                  icon={
                    <Loading3QuartersOutlined style={{ fontSize: "20px" }} />
                  }
                ></Menu.Item>
                <Menu.Item
                  key="2"
                  icon={
                    <Loading3QuartersOutlined style={{ fontSize: "20px" }} />
                  }
                ></Menu.Item>
              </SubMenu>
              <SubMenu
							 style={{ color: "rgba(0, 0, 0, 0.54)" }}
                key="sub2"
                icon={<GiftOutlined style={{ fontSize: "20px" }} />}
              >
                <Menu.Item
                  key="5"
                  icon={
                    <Loading3QuartersOutlined style={{ fontSize: "20px" }} />
                  }
                ></Menu.Item>
                <Menu.Item
                  key="6"
                  icon={
                    <Loading3QuartersOutlined style={{ fontSize: "20px" }} />
                  }
                ></Menu.Item>
              </SubMenu>
              <SubMenu
							 style={{ color: "rgba(0, 0, 0, 0.54)" }}
                key="sub4"
                icon={<InboxOutlined style={{ fontSize: "25px" }} />}
              >
                <Menu.Item
                  key="9"
                  icon={
                    <Loading3QuartersOutlined style={{ fontSize: "20px" }} />
                  }
                ></Menu.Item>
                <Menu.Item
                  key="10"
                  icon={
                    <Loading3QuartersOutlined style={{ fontSize: "20px" }} />
                  }
                ></Menu.Item>
              </SubMenu>
            </Menu>
          </Content>
        </div>
        <div className="border"></div>
        <div className="second">
          <Content style={{ marginLeft: 20 }}>
            {sliderChange && (
              <div>
                <Title style={{ marginTop: 25 }} level={4}>
                  Applied Filters
                </Title>
                <div className="filter">
                  <Title style={{ marginLeft: 20 }} level={5}>
                    $ {min}-{max}{" "}  
                    <Button onClick={() => SetsliderChange(false)}>
                      {" "}
                      <CloseCircleFilled />{" "}
                    </Button>{" "}
                  </Title>
                </div>
              </div>
            )}
            <Title style={{ marginTop: 20 }} level={4}>
              Set Filters
            </Title>
            <Title level={5}>Price Range</Title>
            <Slider
              className="slider"
              step={10}
              min={1000}
              max={7000}
              onChange={(value) => sliderdata(value)}
              range={true}
              defaultValue={[min, max]}
              value={[min, max]}
            />
            <Title  style={{color:'rgba(0, 0, 0, 0.54)'}} level={5}>Star Category</Title>
            <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
              <Col>
                {checkbox_Star.map((user, index) => (
                  <Row key={index} span={8}>
                    <Checkbox
                      className="fontCommon"
                      level={2}
                      value={user.value}
                    >
                      {user.item}
                    </Checkbox>
                  </Row>
                ))}
              </Col>
            </Checkbox.Group>
            <Title   style={{color:'rgba(0, 0, 0, 0.54)'}} className="checkbox" level={5}>
              Property Type
            </Title>
            <Checkbox.Group
              style={{ width: "100%" }}
              onChange={onChangeProperty}
            >
              <Col>
                {checkbox_Property.map((user, index) => (
                  <Row key={index} span={8}>
                    <Checkbox className="fontCommon" value={user.item}>
                      {user.item}
                    </Checkbox>
                  </Row>
                ))}
              </Col>
            </Checkbox.Group>
            <Title  style={{color:'rgba(0, 0, 0, 0.54)'}}  className="checkbox" level={5}>
              Facility
            </Title>
            <Checkbox.Group
              style={{ width: "100%" }}
              onChange={onChangeFacility}
            >
              <Col>
                {checkbox_Facility.map((user, index) => (
                  <Row key={index} span={8}>
                    <Checkbox className="fontCommon" value={user.item}>
                      {user.item}
                    </Checkbox>
                  </Row>
                ))}
              </Col>
            </Checkbox.Group>
          </Content>
        </div>
        <div className="third">
          <Content>
            <div style={{ display:"flex", flexWrap: "wrap" }}>
              {data.map((user, index) => card(user, index))}
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}
export default Profile;
