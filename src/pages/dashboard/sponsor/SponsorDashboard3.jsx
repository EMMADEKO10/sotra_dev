// import React from "react"
// import {
//   Layout,
//   Menu,
//   Breadcrumb,
//   Avatar,
//   Typography,
//   Divider,
//   Tag,
//   Row,
//   Col,
//   Card,
//   Statistic,
//   Space,
//   Table,
//   Tooltip,
//   Button,
// } from "antd"
// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
//   LikeOutlined,
//   MessageOutlined,
//   DollarCircleOutlined,
//   ProjectOutlined
// } from "@ant-design/icons"
// import { Pie, Line } from "@ant-design/charts";
// import "tailwindcss/tailwind.css";
// // Assuming you have Tailwind CSS setup

// const { Header, Content, Footer, Sider } = Layout
// const { SubMenu } = Menu
// const { Title, Paragraph } = Typography






// const ProfilePage = () => {

    
//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       <Header className="header">
//         <div className="logo" />
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={["2"]}
//         >
//           <Menu.Item key="1">Developers</Menu.Item>
//           <Menu.Item key="2">Register</Menu.Item>
//           <Menu.Item key="3">Login</Menu.Item>
//         </Menu>
//       </Header>
//       <Content style={{ padding: "0 50px" }}>
//         <Breadcrumb style={{ margin: "16px 0" }}>
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>Profiles</Breadcrumb.Item>
//         </Breadcrumb>
//         <div className="site-layout-content">
//           <div className="container mx-auto p-8">
//             <div className="grid grid-cols-3 gap-4">
//               {/* Profile Top */}
//               <div className="bg-primary p-4 rounded-lg text-center">
//                 <Avatar
//                   size={150}
//                   src="https://avatars.githubusercontent.com/u/101941972?v=4"
//                 />
//                 <Title
//                   level={2}
//                   className="text-white"
//                 >
//                   Criho James
//                 </Title>
//                 <Paragraph className="text-white">
//                   Developer web at Kadea
//                 </Paragraph>
//                 <Paragraph className="text-white">Seattle, WA</Paragraph>
//                 <div className="flex justify-center mt-4">
//                   <a href="#">
//                     <i className="fab fa-globe fa-2x text-white mx-2"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-twitter fa-2x text-white mx-2"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-facebook fa-2x text-white mx-2"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-linkedin fa-2x text-white mx-2"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-youtube fa-2x text-white mx-2"></i>
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-instagram fa-2x text-white mx-2"></i>
//                   </a>
//                 </div>
//               </div>

//               {/* About */}
//               <div className="bg-light p-4 rounded-lg">
//                 <Title
//                   level={3}
//                   className="text-primary"
//                 >
//                   James's Bio
//                 </Title>
//                 <Paragraph>
//                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
//                   doloremque nesciunt, repellendus nostrum deleniti recusandae
//                   nobis neque modi perspiciatis similique?
//                 </Paragraph>
//                 <Divider />
//                 <Title
//                   level={3}
//                   className="text-primary"
//                 >
//                   Skill Set
//                 </Title>
//                 <div className="flex flex-wrap">
//                   <Tag className="m-1">HTML</Tag>
//                   <Tag className="m-1">CSS</Tag>
//                   <Tag className="m-1">JavaScript</Tag>
//                   <Tag className="m-1">Python</Tag>
//                   <Tag className="m-1">C#</Tag>
//                 </div>
//               </div>

//               {/* Experience */}
//               <div className="bg-white p-4 rounded-lg">
//                 <Title
//                   level={3}
//                   className="text-primary"
//                 >
//                   Experience
//                 </Title>
//                 <div>
//                   <Title
//                     level={4}
//                     className="text-dark"
//                   >
//                     Kadea
//                   </Title>
//                   <Paragraph>Oct 2011 - Current</Paragraph>
//                   <Paragraph>
//                     <strong>Position: </strong>Junior Developer
//                   </Paragraph>
//                   <Paragraph>
//                     <strong>Description: </strong>Lorem ipsum dolor sit amet
//                     consectetur adipisicing elit. Dignissimos placeat, dolorum
//                     ullam ipsam, sapiente suscipit dicta eius velit amet
//                     aspernatur asperiores modi quidem expedita fugit.
//                   </Paragraph>
//                 </div>
//                 <div className="mt-4">
//                   <Title
//                     level={4}
//                     className="text-dark"
//                   >
//                     Developpement web
//                   </Title>
//                   <Paragraph>Mai 2023 - Mai 2024</Paragraph>
//                   <Paragraph>
//                     <strong>Position: </strong>Fullstack developer
//                   </Paragraph>
//                   <Paragraph>
//                     <strong>Description: </strong>Lorem ipsum dolor sit amet
//                     consectetur adipisicing elit. Dignissimos placeat, dolorum
//                     ullam ipsam, sapiente suscipit dicta eius velit amet
//                     aspernatur asperiores modi quidem expedita fugit.
//                   </Paragraph>
//                 </div>
//               </div>

//               {/* Education */}
//               <div className="bg-white p-4 rounded-lg">
//                 <Title
//                   level={3}
//                   className="text-primary"
//                 >
//                   Education
//                 </Title>
//                 <div>
//                   <Title level={4}>
//                     INSTITUT SUPERIEUR D'INFORMATIQUE PROGRAMMATION ET ANALYSE
//                   </Title>
//                   <Paragraph>Sep 2017 - June 2022</Paragraph>
//                   <Paragraph>
//                     <strong>Degree: </strong>Masters
//                   </Paragraph>
//                   <Paragraph>
//                     <strong>Field Of Study: </strong>Computer Science
//                   </Paragraph>
//                   <Paragraph>
//                     <strong>Description: </strong>Lorem ipsum dolor sit amet
//                     consectetur adipisicing elit. Dignissimos placeat, dolorum
//                     ullam ipsam, sapiente suscipit dicta eius velit amet
//                     aspernatur asperiores modi quidem expedita fugit.
//                   </Paragraph>
//                 </div>
//               </div>

//               {/* Github Repos */}
//               <div className="bg-white p-4 rounded-lg">
//                 <Title
//                   level={3}
//                   className="text-primary"
//                 >
//                   <i className="fab fa-github"></i> Github Repos
//                 </Title>
//                 <div className="repo my-4">
//                   <div>
//                     <Title level={4}>
//                       <a href="#">Repo One</a>
//                     </Title>
//                     <Paragraph>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Repellat, laborum!
//                     </Paragraph>
//                   </div>
//                   <div className="flex">
//                     <Tag className="m-1 bg-primary">Stars: 44</Tag>
//                     <Tag className="m-1 bg-dark">Watchers: 21</Tag>
//                     <Tag className="m-1 bg-light">Forks: 25</Tag>
//                   </div>
//                 </div>
//                 <div className="repo my-4">
//                   <div>
//                     <Title level={4}>
//                       <a href="#">Repo Two</a>
//                     </Title>
//                     <Paragraph>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Repellat, laborum!
//                     </Paragraph>
//                   </div>
//                   <div className="flex">
//                     <Tag className="m-1 bg-primary">Stars: 44</Tag>
//                     <Tag className="m-1 bg-dark">Watchers: 21</Tag>
//                     <Tag className="m-1 bg-light">Forks: 25</Tag>
//                   </div>
//                 </div>
//               </div>

//               {/* Education */}
//               <div className="bg-white p-4 rounded-lg">
//                 <Title
//                   level={3}
//                   className="text-primary"
//                 >
//                   Education
//                 </Title>
//                 <div>
//                   <Title level={4}>
//                     INSTITUT SUPERIEUR D'INFORMATIQUE PROGRAMMATION ET ANALYSE
//                   </Title>
//                   <Paragraph>Sep 2017 - June 2022</Paragraph>
//                   <Paragraph>
//                     <strong>Degree: </strong>Masters
//                   </Paragraph>
//                   <Paragraph>
//                     <strong>Field Of Study: </strong>Computer Science
//                   </Paragraph>
//                   <Paragraph>
//                     <strong>Description: </strong>Lorem ipsum dolor sit amet
//                     consectetur adipisicing elit. Dignissimos placeat, dolorum
//                     ullam ipsam, sapiente suscipit dicta eius velit amet
//                     aspernatur asperiores modi quidem expedita fugit.
//                   </Paragraph>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Content>
//       <Footer style={{ textAlign: "center" }}>
//         Ant Design & Tailwind CSS Demo
//       </Footer>
//     </Layout>
//   )
// }

// export default ProfilePage
