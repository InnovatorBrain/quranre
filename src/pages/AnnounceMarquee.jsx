import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AnnounceMarquee() {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/auth/lectures/');
        setLectures(response.data);
      } catch (error) {
        console.error("Error fetching lectures", error);
      }
    };

    fetchLectures();
  }, []);

  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <marquee behavior="scroll" direction="left" scrollamount="8" style={{ backgroundColor: 'black', color: 'white' }}>
        {lectures.map((lecture, index) => (
          <span key={index} style={{ marginRight: '100px' }}>
            {lecture.title} - &nbsp;&nbsp; Will be started: {new Date(lecture.start_time).toLocaleString()} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </marquee>
    </div>
  );
}
