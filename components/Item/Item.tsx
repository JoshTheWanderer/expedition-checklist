import localforage from 'localforage';
import { useEffect, useState } from 'preact/hooks';

import item from './item.module.css';

interface ItemProps {
  name: string;
  quantity?: number;
  optional?: boolean;
  updateOwnedCount: (owned: -1 | 1) => void;
  updatePackedCount: (packed: -1 | 1) => void;
}

function Item({
  name,
  quantity,
  optional,
  updateOwnedCount,
  updatePackedCount,
}: ItemProps) {
  const key = name.split(' ').join('-').toLocaleLowerCase();
  const [ownedChecked, setOwnedChecked] = useState<boolean>(false);

  const [packedChecked, setPackedChecked] = useState<boolean>(false);

  const toggleOwned = () => {
    setOwnedChecked(!ownedChecked);
    updateOwnedCount(ownedChecked ? -1 : 1);

    localforage.setItem(`owned-${key}`, !ownedChecked);
  };

  const togglePacked = () => {
    setPackedChecked(!packedChecked);
    updatePackedCount(packedChecked ? -1 : 1);

    localforage.setItem(`packed-${key}`, !packedChecked);
  };

  useEffect(() => {
    localforage.getItem<boolean>(`owned-${key}`, (err, value = false) => {
      if (err) {
        console.error(err);
      }

      if (value) {
        setOwnedChecked(true);
        updateOwnedCount(1);
      }
    });

    localforage.getItem<boolean>(`packed-${key}`, (err, value) => {
      if (err) {
        console.error(err);
      }

      if (value) {
        setPackedChecked(true);
        updatePackedCount(1);
      }
    });
    // If we pass `updateOwnedCount` and `updatePackedCount` as dependencies,
    // then we get an infinite loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, setOwnedChecked, setPackedChecked]);

  return (
    <div className={item.item}>
      <label title="Owned">
        <input
          type="checkbox"
          checked={!!ownedChecked}
          onClick={toggleOwned}
          className={item.checkbox}
        />{' '}
        <span className={item.label}>Owned</span>
      </label>
      <label title="Packed">
        <input
          type="checkbox"
          checked={!!packedChecked}
          onClick={togglePacked}
          className={item.checkbox}
        />{' '}
        <span className={item.label}>Packed</span>
      </label>
      {name} {quantity && `x ${quantity}`}{' '}
      {optional && <span className={item.optional}>(optional)</span>}
    </div>
  );
}

export default Item;
