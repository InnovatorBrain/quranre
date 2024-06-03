import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoutes = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                try {
                    await axios.get('http://127.0.0.1:8000/auth/validate/token/');
                    setAuthenticated(true);
                } catch (error) {
                    console.error('Token validation failed', error);
                    setAuthenticated(false);
                    window.location.href = "/login";
                }
            } else {
                setAuthenticated(false);
                window.location.href = "/login";
            }
            setLoading(false);
        };

        checkAuthentication();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return authenticated ? <Outlet /> : null;
};

export default PrivateRoutes;
