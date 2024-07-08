import React from 'react';
import { Link } from 'react-router-dom';
import { Space } from 'antd';
import {
  LinkedinOutlined,
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from '@ant-design/icons';

const FollowUs = ({ iconColor = 'text-gray-100' }) => {
  return (
    <>
      <Space size="middle">
        <Link to="#" className={`${iconColor} hover:text-blue-500 text-2xl`}>
          <LinkedinOutlined />
        </Link>
        <Link to="#" className={`${iconColor} hover:text-blue-400 text-2xl`}>
          <TwitterOutlined />
        </Link>
        <Link to="#" className={`${iconColor} hover:text-pink-500 text-2xl`}>
          <InstagramOutlined />
        </Link>
        <Link to="#" className={`${iconColor} hover:text-blue-700 text-2xl`}>
          <FacebookOutlined />
        </Link>
      </Space>
    </>
  );
};

export default FollowUs;
