import { useState } from 'react';
import { Form, Input, Button, Select, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import {
  TwitterOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  CodeOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import 'antd/dist/reset.css'; // Include Ant Design styles
import 'tailwindcss/tailwind.css'; // Include Tailwind CSS styles


const { Title, Paragraph } = Typography;
const { Option } = Select;

const CreateProfileSponsort = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="">

      <section className="container mx-auto p-6 mt-12 bg-white shadow-md rounded-md">
        <Title level={2} className="text-red-600">Create Your Profile</Title>
        <Paragraph className="text-lg">
          <UserOutlined className="mr-2" />
          Let's get some information to make your profile stand out
        </Paragraph>
        <small className="block mb-6">* = required field</small>
        <Form layout="vertical" onFinish={onFinish} className="space-y-4">
          <Form.Item
            label="Professional Status"
            name="status"
            rules={[{ required: true, message: 'Please select your status' }]}
          >
            <Select placeholder="* Select Professional Status">
              <Option value="Developer">Developer</Option>
              <Option value="Junior Developer">Junior Developer</Option>
              <Option value="Senior Developer">Senior Developer</Option>
              <Option value="Manager">Manager</Option>
              <Option value="Student or Learning">Student or Learning</Option>
              <Option value="Instructor">Instructor or Teacher</Option>
              <Option value="Intern">Intern</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Company" name="company">
            <Input placeholder="Company" />
          </Form.Item>
          <Form.Item label="Website" name="website">
            <Input placeholder="Website" />
          </Form.Item>
          <Form.Item label="Location" name="location">
            <Input placeholder="Location" />
          </Form.Item>
          <Form.Item
            label="* Skills"
            name="skills"
            rules={[{ required: true, message: 'Please enter your skills' }]}
          >
            <Input placeholder="Skills (comma separated)" />
          </Form.Item>
          <Form.Item label="Github Username" name="githubusername">
            <Input placeholder="Github Username" />
          </Form.Item>
          <Form.Item label="Bio" name="bio">
            <Input.TextArea placeholder="A short bio of yourself" />
          </Form.Item>
          <div className="my-2 flex items-center">
            <Button
              type="dashed"
              onClick={() => setShowSocialLinks(!showSocialLinks)}
            >
              Add Social Network Links
            </Button>
            <span className="ml-4">Optional</span>
          </div>
          {showSocialLinks && (
            <>
              <Form.Item label="Twitter URL" name="twitter">
                <Input prefix={<TwitterOutlined />} placeholder="Twitter URL" />
              </Form.Item>
              <Form.Item label="Facebook URL" name="facebook">
                <Input prefix={<FacebookOutlined />} placeholder="Facebook URL" />
              </Form.Item>
              <Form.Item label="YouTube URL" name="youtube">
                <Input prefix={<YoutubeOutlined />} placeholder="YouTube URL" />
              </Form.Item>
              <Form.Item label="LinkedIn URL" name="linkedin">
                <Input prefix={<LinkedinOutlined />} placeholder="LinkedIn URL" />
              </Form.Item>
              <Form.Item label="Instagram URL" name="instagram">
                <Input prefix={<InstagramOutlined />} placeholder="Instagram URL" />
              </Form.Item>
            </>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="mr-4">
              Submit
            </Button>
            <Button type="default" href="dashboard.html">
              Go Back
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default CreateProfileSponsort;
