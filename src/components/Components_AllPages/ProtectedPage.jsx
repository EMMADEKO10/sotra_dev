// import React from 'react'
import { message } from "antd";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from "axios";

export default function ProtectedPage({ children }) {
    const [user, setUser] = useState(null)
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    
    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };


        const validateToken = async () => {
            try {
                const response = await axios.get("http://localhost:3700/api/currentuser", config);
                console.log("Reussite totale", response.data.message )

                if (response.data.message) {
                    setUser(response.data)
                    console.log("Reussite totale")
                    // navigate('/')

                } else {
                    navigate('/login')
                    message.error(response.data.message)
                }
            } catch (error) {
                message.error(error.message)
            }
        };

        if (localStorage.getItem("token")) {
            validateToken();
            // navigate('/')

        } else {
            navigate('/login')
            message.error("please login to continue")
        }
    }, [navigate, token]);

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
