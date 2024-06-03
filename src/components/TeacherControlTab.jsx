import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBInputGroup, MDBInput } from 'mdb-react-ui-kit';

export default function TeacherControlTab() {
  const [students, setStudents] = useState([]);
  const [usernameInput, setUsernameInput] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    const token = localStorage.getItem('accessToken');
    axios.get('http://127.0.0.1:8000/auth/teacher/students/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setStudents(response.data);
    })
    .catch(error => {
      console.error('Error fetching students:', error);
    });
  };

  const handleAddStudent = () => {
    const token = localStorage.getItem('accessToken');
    axios.post('http://127.0.0.1:8000/auth/teacher/add-student/', { student_username: usernameInput }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Student added successfully');
      fetchStudents(); // Refresh the student list
      setUsernameInput(''); // Clear the input field
    })
    .catch(error => {
      console.error('Error adding student:', error);
    });
  };

  const handleRemoveStudent = (studentUsername) => {
    const token = localStorage.getItem('accessToken');
    axios.post('http://127.0.0.1:8000/auth/teacher/remove-student/', { student_username: studentUsername }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Student removed successfully');
      setStudents(students.filter(student => student.user.username !== studentUsername));
    })
    .catch(error => {
      console.error('Error removing student:', error);
    });
  };

  return (
    <>
      <MDBInputGroup className="mb-3 mt-5" style={{ width: '50%', margin: '0 auto' }}>
        <MDBInput
          label="Type Username"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <MDBBtn color="primary" onClick={handleAddStudent}>
          Add
        </MDBBtn>
      </MDBInputGroup>
      <MDBTable align='middle' style={{ width: '90%', margin: '0 auto' }}>
        <MDBTableHead>
          <tr>
            <th scope='col'>Students</th>
            <th scope='col'>Platform Joined Date</th>
            <th scope='col'>Enroll Date</th>
            <th scope='col'>Status</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {students.map(student => (
            <tr key={student.id}>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src={`https://mdbootstrap.com/img/new/avatars/${student.id}.jpg`} // Assuming you have images named by student ID
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{student.user.first_name} {student.user.last_name}</p>
                    <p className='text-muted mb-0'>{student.user.username}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-0'>{new Date(student.user.date_joined).toLocaleDateString()}</p>
              </td>
              <td>
                <p className='fw-normal mb-0'>{student.enrolled_date ? new Date(student.enrolled_date).toLocaleDateString() : 'N/A'}</p>
              </td>
              <td>
                <MDBBadge color={student.enrollment_status ? 'success' : 'danger'} pill>
                  {student.enrollment_status ? 'Active' : 'Inactive'}
                </MDBBadge>
              </td>
              <td>
                <MDBBtn color='link' rounded size='sm' onClick={() => handleRemoveStudent(student.user.username)}>
                  Remove
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </>
  );
}
