import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConfigProvider } from 'antd'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
    theme={{
      components: {
        Button : {
          colorPrimary : '#405138',
          colorPrimaryBgHover : '#405138',
          borderRadius : '2px',
        }
      },
      token : {
        borderRadius : '2px'
      }
    }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
