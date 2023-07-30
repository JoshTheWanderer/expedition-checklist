import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr />
      <p>
        This list is designed for my solo backpacking trips in remote areas, and
        is based on my own experiences and needs in the wilderness.
      </p>
      <p>Do not rely on this list for your own packing needs.</p>
    </footer>
  );
};

export default Footer;
