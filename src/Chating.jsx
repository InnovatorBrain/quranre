import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
  MDBInputGroup,
} from 'mdb-react-ui-kit';

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchChats();
    fetchProfile();
  }, []);

  useEffect(() => {
    if (currentChat) {
      fetchMessages(currentChat.id);
    }
  }, [currentChat]);

  const fetchChats = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get('http://127.0.0.1:8000/chat/chats/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setChats(response.data);
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  const fetchMessages = async (chatId) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get(`http://127.0.0.1:8000/chat/messages/?chat=${chatId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get('http://127.0.0.1:8000/auth/profile/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const sendMessage = async () => {
    if (!currentChat) {
      console.error('No chat selected.');
      return;
    }

    try {
      if (newMessage.trim()) {
        const token = localStorage.getItem('accessToken');
        const response = await axios.post(
          'http://127.0.0.1:8000/chat/messages/',
          {
            chat: currentChat.id,
            content: newMessage,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMessages([...messages, response.data]);
        setNewMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const deleteMessage = async (messageId) => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.delete(`http://127.0.0.1:8000/chat/messages/${messageId}/delete/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(messages.filter((msg) => msg.id !== messageId));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: '#CDC4F9' }}>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard id="chat3" style={{ borderRadius: '15px' }}>
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
                      <span className="input-group-text border-0" id="search-addon">
                        <MDBIcon fas icon="search" />
                      </span>
                    </MDBInputGroup>

                    <div style={{ position: 'relative', height: '400px', overflowY: 'scroll' }}>
                      <MDBTypography listUnStyled className="mb-0">
                        {chats.map((chat) => (
                          <li
                            key={chat.id}
                            className="p-2 border-bottom"
                            onClick={() => setCurrentChat(chat)}
                          >
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
                                  <p className="fw-bold mb-0">
                                    {chat.participants.map((p) => p.first_name).join(', ')}
                                  </p>
                                  <p className="small text-muted">
                                    {messages.length > 0 ? messages[messages.length - 1].content : 'No messages'}
                                  </p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">Just now</p>
                                <span className="badge bg-danger rounded-pill float-end">
                                  {messages.length}
                                </span>
                              </div>
                            </a>
                          </li>
                        ))}
                      </MDBTypography>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="6" lg="7" xl="8">
                  <div style={{ position: 'relative', height: '400px', overflowY: 'scroll' }} className="pt-3 pe-3">
                    {currentChat ? (
                      messages.map((msg) => (
                        <div
                          className={`d-flex flex-row justify-content-${
                            msg.sender.id === profile?.id ? 'end' : 'start'
                          }`}
                          key={msg.id}
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                            alt="avatar 1"
                            style={{ width: '45px', height: '100%' }}
                          />
                          <div>
                            <p
                              className="small p-2 ms-3 mb-1 rounded-3"
                              style={{ backgroundColor: msg.sender.id === profile?.id ? '#007bff' : '#f5f6f7' }}
                            >
                              {msg.content}
                            </p>
                            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                              {new Date(msg.created_at).toLocaleTimeString()}
                            </p>
                            {msg.sender.id === profile?.id && (
                              <button onClick={() => deleteMessage(msg.id)} className="btn btn-sm btn-danger">
                                Delete
                              </button>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                        <p className="text-muted">Select a chat to start messaging</p>
                      </div>
                    )}
                  </div>
                  <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 3"
                      style={{ width: '40px', height: '100%' }}
                    />
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput2"
                      placeholder="Type message"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <a className="ms-1 text-muted" href="#!" onClick={sendMessage}>
                      <MDBIcon fas icon="paper-plane" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Chat;
