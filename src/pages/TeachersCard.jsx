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

export default function ProfileStatistics() {
  const [teachers, setTeachers] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teachersResponse = await axios.get('http://127.0.0.1:8000/auth/teachers/');
        setTeachers(teachersResponse.data);
      } catch (error) {
        console.error("Error fetching teachers data", error);
      }
    };

    const fetchImages = async () => {
      try {
        const imagesResponse = await axios.get('http://127.0.0.1:8000/auth/teacher-images/');
        setImages(imagesResponse.data);
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };

    fetchTeachers();
    fetchImages();
  }, []);

  const getImageForTeacher = (teacher) => {
    const image = images.find(
      img => img.user_first_name === teacher.user_first_name && img.user_last_name === teacher.user_last_name
    );
    return image ? `http://127.0.0.1:8000${image.image}` : 'https://via.placeholder.com/150';
  };

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="flex-grow-1 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          {teachers.map(teacher => (
            <MDBCol key={teacher.id} md="12" xl="4" className="mb-4">
              <MDBCard style={{ borderRadius: '15px' }}>
                <MDBCardBody className="text-center">
                  <div className="mt-3 mb-4">
                    <MDBCardImage 
                      src={getImageForTeacher(teacher)}
                      className="rounded-circle" 
                      fluid 
                      style={{ width: '100px' }} 
                    />
                  </div>
                  <MDBTypography tag="h4">
                    {teacher.user_first_name} {teacher.user_last_name}
                  </MDBTypography>
                  <MDBCardText className="text-muted mb-4">
                    {teacher.user_email} <br />
                    {teacher.subject ? `Subject: ${teacher.subject}` : 'Subject: N/A'} <br />
                    {teacher.experience !== null ? `Experience: ${teacher.experience} years` : 'Experience: N/A'} <br />
                    {teacher.qualifications ? `Qualifications: ${teacher.qualifications}` : 'Qualifications: N/A'}
                  </MDBCardText>
                  <MDBBtn rounded size="lg">
                    Message now
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
