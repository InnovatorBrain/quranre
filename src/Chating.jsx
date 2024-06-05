import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
  MDBInputGroup,
} from "mdb-react-ui-kit";

export default function ChatApp() {
  const [authenticated, setAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('http://127.0.0.1:8000/auth/validate/token/')
        .then(response => {
          setAuthenticated(true);
          fetchUserProfile();
          fetchMessages();
        })
        .catch(error => {
          console.log('Token validation failed');
        });
    }
  }, []);

  const fetchUserProfile = () => {
    axios.get('http://127.0.0.1:8000/auth/profile/')
      .then(response => {
        setUserProfile(response.data);
      })
      .catch(error => {
        console.log('Error fetching user profile:', error);
      });
  };

  const fetchMessages = () => {
    const userId = 2; // Replace with dynamic user ID
    axios.get(`http://127.0.0.1:8000/chat/my-messages/${userId}/`)
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.log('Error fetching messages');
      });
  };

  const sendMessage = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (token) {
        // Set bearer token for authentication
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await axios.post("http://127.0.0.1:8000/chat/send-messages/", {
          message: newMessage,
        });
        // Clear the message input after sending
        setNewMessage("");
        // Fetch updated messages
        fetchMessages();
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#CDC4F9" }}>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard id="chat3" style={{ borderRadius: "15px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                  <div className="p-3">
                    <MDBInputGroup className="rounded mb-3">
                      <input
                        className="form-control rounded"
                        placeholder="Search"
                        type="search"
                      />
                      <span
                        className="input-group-text border-0"
                        id="search-addon"
                      >
                        <MDBIcon fas icon="search" />
                      </span>
                    </MDBInputGroup>
                    <MDBTypography listUnStyled className="mb-0">
                      {messages.map((message, index) => (
                        <li key={index} className="p-2 border-bottom">
                          <a href="#!" className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-success badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">User Name</p>
                                <p className="small text-muted">{message.content}</p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-muted mb-1">{new Date(message.timestamp).toLocaleTimeString()}</p>
                              <span className="badge bg-danger rounded-pill float-end">3</span>
                            </div>
                          </a>
                        </li>
                      ))}
                    </MDBTypography>
                  </div>
                </MDBCol>
                <MDBCol md="6" lg="7" xl="8">
                  <div className="d-flex flex-row justify-content-start">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1"
                      style={{ width: "45px", height: "100%" }}
                    />
                    <div>
                      <p
                        className="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                    </div>
                  </div>
                  <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                  <img
                    src={userProfile?.profile_picture?.image || "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"}
                    alt="avatar 3"
                    style={{ width: "40px", height: "100%" }}
                  />
                  <div className="flex-grow-1 ms-3">
                    <p className="fw-bold mb-0">{`${userProfile?.first_name} ${userProfile?.last_name}`}</p>
                    <p className="small text-muted mb-0">{userProfile?.email}</p>
                  </div>
                </div>
                <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Type message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <a className="ms-1 text-muted" href="#!">
                    <MDBIcon fas icon="paperclip" />
                  </a>
                  <a className="ms-3 text-muted" href="#!">
                    <MDBIcon fas icon="smile" />
                  </a>
                  <button className="ms-3 btn btn-primary" onClick={sendMessage}>
                    Send
                  </button>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);
}
