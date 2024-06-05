// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function AnnounceLecture() {
  const [teachers, setTeachers] = useState([]);
  const [lectureTitle, setLectureTitle] = useState('');
  const [lectureStartTime, setLectureStartTime] = useState('');

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        // Fetch teachers data
        const teachersResponse = await axios.get('http://127.0.0.1:8000/auth/teachers/');
        // Set teachers state
        setTeachers(teachersResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchTeachers();
  }, []);

  const handleUploadLecture = async () => {
    try {
      // Make a POST request to upload the lecture
      await axios.post('http://127.0.0.1:8000/auth/upload-lecture/', {
        title: lectureTitle,
        start_time: lectureStartTime
      });
      // Refresh teachers data after successful upload
      fetchTeachers();
    } catch (error) {
      console.error("Error uploading lecture", error);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="flex-grow-1 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          {teachers.map(teacher => (
            <MDBCol key={teacher.id} md="12" xl="4" className="mb-4">
              {/* Existing teacher card code */}
            </MDBCol>
          ))}
          {/* Form to upload lecture */}
          <MDBCol md="12" xl="4" className="mb-4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <h4>Upload Lecture</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Lecture Title"
                    value={lectureTitle}
                    onChange={e => setLectureTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={lectureStartTime}
                    onChange={e => setLectureStartTime(e.target.value)}
                  />
                </div>
                <MDBBtn rounded size="lg" onClick={handleUploadLecture}>
                  Upload
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
