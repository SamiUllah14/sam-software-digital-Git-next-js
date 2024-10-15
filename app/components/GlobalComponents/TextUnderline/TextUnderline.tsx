import React from 'react';

// Define the props interface
interface UnderlineTextProps {
  text: string; // Required prop
  height?: string; // Optional prop
  width?: string;  // Optional prop
}

// UnderlineText component with height and width parameters
const TextUnderline: React.FC<UnderlineTextProps> = ({ text, height = 'auto', width = '100%' }) => {
  const styles: React.CSSProperties = {
    color: 'white',
    position: 'relative',
    height: height, // Use the height parameter
    width: width,   // Use the width parameter
    display: 'flex', // Use flex to manage layout
    flexDirection: 'column', // Stack text and underline vertically
    alignItems: 'start', // Center align items
  };

  const underlineStyles: React.CSSProperties = {
    display: 'block',
    width: '100%', // Ensure the underline takes full width
    height: '1px',
    backgroundColor: 'white', // Ensure the underline is visible
    flexShrink: 0, // Prevent underline from shrinking
  };

  return (
    <div style={styles}>
      <p style={{ margin: 0, textAlign: 'center' }}>{text}</p>
      <span style={underlineStyles} />
    </div>
  );
};

export default TextUnderline;
