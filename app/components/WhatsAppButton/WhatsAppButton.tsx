import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Optional, if you're using react-icons

const WhatsAppButton = () => {
    const phoneNumber = '17163061452'; 
  return (
    <div style={styles.container}>
      <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={50} style={styles.icon} />
      </a>
    </div>
  );
};

// Define styles using React.CSSProperties
const styles: { container: React.CSSProperties; icon: React.CSSProperties } = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  },
  icon: {
    color: '#25D366', // WhatsApp green color
    backgroundColor: 'white',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  },
};

export default WhatsAppButton;
