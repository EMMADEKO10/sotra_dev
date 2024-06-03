// import React from 'react'
import { message } from "antd";
import { useEffect, useState } from "react"
import { useNavigate,Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from "axios";



export default function ProtectedPage({ children }) {
    const [user, setUser] = useState(null)
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [isTokenExist, SetIsTokenExist] = useState(false)
    
    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const validateToken = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await axios.get(`${apiUrl}/currentuser`, config);
                console.log("Reussite totale", response.data.message )
                SetIsTokenExist(true)
                if (response.data.message) {
                    setUser(response.data)
                    console.log("Reussite totale")
                    // navigate('/')

                } else {
                    message.error(response.data.message)
                }
            } catch (error) {
                message.error(error.message)
            }
        };

        if (localStorage.getItem("token")) {
            validateToken();
          

        } else {
            message.error("please login to continue")
        }
    }, [navigate, token]);

    if (isTokenExist) {
        SetIsTokenExist(false)
        return <Navigate to="/home" />;
    }

  return (
    <div>
        {user && (
            <div>{user.data.name}
                {children}
            </div>
        )}
    </div>
    );
}


ProtectedPage.propTypes = {
    children: PropTypes.node.isRequired,
};
