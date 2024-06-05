import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function Timetable() {
    const [timetables, setTimetables] = useState([]);
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [timetablesResponse, teachersResponse] = await Promise.all([
                    axios.get('http://127.0.0.1:8000/course/timetables/'),
                    axios.get('http://127.0.0.1:8000/auth/teachers/')
                ]);

                setTimetables(timetablesResponse.data);
                setTeachers(teachersResponse.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    const getTeacherName = (teacherId) => {
        const teacher = teachers.find(teacher => teacher.id === teacherId);
        return teacher ? `${teacher.user_first_name} ${teacher.user_last_name}` : 'Unknown Teacher';
    };

    return (
        <>
        <h3 className='text-center mt-5'>
            Classes Time Table
        </h3>
            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '85%' }}>
                    <MDBTable bordered borderColor="primary">
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Day</th>
                                <th scope='col'>Start Time</th>
                                <th scope='col'>End Time</th>
                                <th scope='col'>Course</th>
                                <th scope='col'>Teacher</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {timetables.map((timetable) => (
                                <tr key={timetable.id}>
                                    <th scope='row'>{timetable.id}</th>
                                    <td>{timetable.day}</td>
                                    <td>{timetable.start_time}</td>
                                    <td>{timetable.end_time}</td>
                                    <td>{timetable.course_name}</td>
                                    <td>{getTeacherName(timetable.teacher)}</td>
                                </tr>
                            ))}
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        </>
    );
}
