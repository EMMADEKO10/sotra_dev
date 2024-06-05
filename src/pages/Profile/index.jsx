import { Tabs } from 'antd'
import Projects from './Projects'
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';

function Profile() {
  return (
    <div>
        <Navbar />
        <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Projects" key="1">
                <Projects/>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Propositions" key="2">
                <h1>Propositions</h1>
            </Tabs.TabPane>

            <Tabs.TabPane tab="General" key="3">
                <h1>General</h1>
            </Tabs.TabPane>

        </Tabs>
        <Footer />
    </div>
  )
}

export default Profile