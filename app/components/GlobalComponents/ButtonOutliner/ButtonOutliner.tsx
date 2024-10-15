import styles from './ButtonOutliner.module.css';

interface ButtonOutlinerProps {
  text: string;
  href: string;
}

const ButtonOutliner: React.FC<ButtonOutlinerProps> = ({ text, href }) => (
  <a href={href} className={styles.button}>
    {text}
  </a>
);

export default ButtonOutliner;
