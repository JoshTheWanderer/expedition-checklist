import styles from './lead.module.css';

const Lead = ({ text }: { text: string }) => {
  return <p className={styles.lead}>{text}</p>;
};

export default Lead;
