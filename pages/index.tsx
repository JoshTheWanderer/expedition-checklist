import { useEffect, useState } from 'preact/hooks';

import Filters from '../components/Filters/Filters';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Item from '../components/Item/Item';
import Lead from '../components/Lead/Lead';
import Counts from '../components/counts/Counts';
import rawData from '../data';
import gridStyles from '../styles/grid.module.css';
import groupStyles from '../styles/group.module.css';

export default function Page() {
  const [data, setData] = useState<typeof rawData>(rawData);
  const [season, setSeason] = useState<'winter' | 'summer'>('winter');
  const [optional, setOptional] = useState<boolean>(false);
  const [ownedCount, setOwnedCount] = useState<number>(0);
  const [packedCount, setPackedCount] = useState<number>(0);

  useEffect(() => {
    setData(
      rawData.map((group) => {
        return {
          ...group,
          items: group.items.filter((item) => {
            if (!optional && item.optional) {
              return false;
            }

            return item.season === 'all' || item.season === season;
          }),
        };
      })
    );
  }, [season, optional, setData]);

  const updateOwnedCount = (owned: -1 | 1) => {
    setOwnedCount((count) => count + owned);
  };

  const updatePackedCount = (packed: -1 | 1) => {
    setPackedCount((count) => count + packed);
  };

  const changeSeason = (e: Event) => {
    if (e.target instanceof HTMLSelectElement) {
      setSeason(e.target.value as 'winter' | 'summer');
    }
  };

  const showOptional = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      setOptional(e.target.checked);
    }
  };

  return (
    <>
      <Header />
      <main>
        <hr />
        <div className={gridStyles.grid}>
          <Counts
            ownedCount={ownedCount}
            packedCount={packedCount}
            countable={data}
          />
          <Filters
            changeSeason={changeSeason}
            season={season}
            showOptional={showOptional}
            optional={optional}
          />
        </div>
        <hr />
        <form className={gridStyles.grid}>
          {data.map((group) => (
            <section key={`group-${group.id}`}>
              <h2 className={groupStyles.title}>{group.title}</h2>
              {group.lead && <Lead text={group.lead} />}
              {group.items.map((item) => (
                <Item
                  key={`group-${group.id}-item-${item.id}`}
                  updatePackedCount={updatePackedCount}
                  updateOwnedCount={updateOwnedCount}
                  {...item}
                />
              ))}
            </section>
          ))}
        </form>
      </main>
      <Footer />
    </>
  );
}
