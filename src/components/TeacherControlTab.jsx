import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBInputGroup } from 'mdb-react-ui-kit';

export default function TeacherControlTab() {
  const [students, setStudents] = useState([]);
  const [emailInput, setEmailInput] = useState('');

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
    axios.post('http://127.0.0.1:8000/auth/teacher/add-student/', { id: id }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Student added successfully');
      fetchStudents(); // Refresh the student list
    })
    .catch(error => {
      console.error('Error adding student:', error);
    });
  };

  const handleRemoveStudent = (studentId) => {
    const token = localStorage.getItem('accessToken');
    axios.post(`http://127.0.0.1:8000/auth/teacher/remove-student/${studentId}/`, null, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Student removed successfully');
      // Filter out the removed student from the list
      setStudents(students.filter(student => student.id !== studentId));
    })
    .catch(error => {
      console.error('Error removing student:', error);
    });
  };

  return (
    <>
      <MDBInputGroup
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        className="mb-3"
        prepend="Add Student by Email"
        append={
          <MDBBtn color="primary" onClick={handleAddStudent}>
            Add
          </MDBBtn>
        }
      />
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Students</th>
            <th scope='col'>Date Joined</th>
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
                    <p className='text-muted mb-0'>{student.user.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-0'>{student.enrolled_date}</p>
              </td>
              <td>
                <MDBBadge color={student.enrollment_status ? 'success' : 'danger'} pill>
                  {student.enrollment_status ? 'Active' : 'Inactive'}
                </MDBBadge>
              </td>
              <td>
                <MDBBtn color='link' rounded size='sm' onClick={() => handleRemoveStudent(student.id)}>
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
