import styles from './ButtonOutliner.module.css';

interface ButtonOutlinerProps {
  text: string;
  href?: string;     // Optional href prop
  onClick?: () => void; // Optional onClick prop
}

const ButtonOutliner: React.FC<ButtonOutlinerProps> = ({ text, href, onClick }) => {
  // Render as a link if href is provided; otherwise, render as a button
  return href ? (
    <a href={href} className={styles.button}>
      {text}
    </a>
  ) : (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonOutliner;
