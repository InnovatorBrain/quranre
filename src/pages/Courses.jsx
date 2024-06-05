import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/course/courses/');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <><h3 className='text-center mt-5'>
            Courses We Offer 
        </h3>
            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '85%' }}>
                    <MDBTable bordered borderColor="primary">
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Description</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {courses.map((course) => (
                                <tr key={course.id}>
                                    <td>{course.id}</td>
                                    <td>{course.name}</td>
                                    <td>{course.description}</td>
                                  
                                </tr>
                            ))}
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        </>
    );
}
