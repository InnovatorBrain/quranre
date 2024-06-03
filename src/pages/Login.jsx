import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8000/auth/login/', formData);
        console.log(response); 
        if (response.status === 200) {
            localStorage.setItem('accessToken', response.data.token.access);
            localStorage.setItem('refreshToken', response.data.token.refresh);
            window.location.href = '/teacher-pro';
        } else {
            setError('Login failed. Please try again.');
        }
    } catch (error) {
        console.error('Login failed:', error); 
        setError('Login failed. Please try again.');
    }
};

  return (
    <div className="container">
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-lg-8">
          <form onSubmit={handleSubmit}>
            <div className="mx-auto mt-4">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                style={{ width: '90%' }}
              />
            </div>
            <div className="mx-auto">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                style={{ width: '90%' }}
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="text-center">
              <button type="submit" className="btn btn-primary mb-4 mt-4">Sign in</button>
              <p>Not a member? <Link to="/signup">Register</Link></p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// hi dear