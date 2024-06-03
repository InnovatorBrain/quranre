import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
    const [role, setRole] = useState('student'); // Default to Student
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        is_student: true,
        is_teacher: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRoleChange = (e) => {
        const selectedRole = e.target.value;
        setRole(selectedRole);
        setFormData({
            ...formData,
            is_student: selectedRole === 'student',
            is_teacher: selectedRole === 'teacher'
        });
    };
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/auth/register/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            setMessage('Registration successful!'); // Set success message
        } catch (error) {
            console.error(error);
            setMessage('Registration failed. Please try again.'); // Set error message
        }
    };


    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-8 d-flex justify-content-center flex-column">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2 mt-3">
                            <label htmlFor="role">Select Your Role</label>
                            <select
                                className="form-select"
                                name="role"
                                value={role}
                                onChange={handleRoleChange}
                                style={{ width: '67%' }}
                                aria-label="Default select example"
                            >
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                style={{ width: '67%' }}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                style={{ width: '67%' }}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{ width: '67%' }}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                style={{ width: '67%' }}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="confirm_password"
                                value={formData.confirm_password}
                                onChange={handleChange}
                                style={{ width: '67%' }}
                            />
                        </div>

                        {message && <p>{message}</p>}
                        <div>
                            <button type="submit" className="btn btn-primary mb-4 mt-4">Sign up</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
