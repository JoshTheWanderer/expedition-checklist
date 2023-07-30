import data from '../../data';

import styles from './counts.module.css';

export default function Counts({
  ownedCount,
  packedCount,
  countable,
}: {
  ownedCount: number;
  packedCount: number;
  countable: typeof data;
}) {
  const total = countable.flatMap((g) => g.items).length;

  return (
    <div style={styles.wrapper}>
      <p>
        <strong>Owned</strong>: {ownedCount}/{total}
      </p>
      <p>
        <strong>Packed</strong>: {packedCount}/{total}
      </p>
    </div>
  );
}
