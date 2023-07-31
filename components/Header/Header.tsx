import Image from 'next/image';

import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src="/images/mountains.svg" alt="" width="64px" height="64px" />
      <h1>Solo Backpacking Checklist</h1>
    </header>
  );
}
