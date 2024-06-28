import { BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

export default function RetourEnHaut() {
  return (
    <BackTop>
      <div className="flex items-center justify-center w-12 h-12 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 active:bg-primary-700 transition-all duration-300 ease-in-out animate-bounce">
        <ArrowUpOutlined className="text-xl" />
      </div>
    </BackTop>
  );
}
