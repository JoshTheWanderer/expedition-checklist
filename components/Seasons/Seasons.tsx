import styles from './seasons.module.css';

const Seasons = ({
  changeSeason,
  season,
}: {
  changeSeason: (e: Event) => void;
  season: 'winter' | 'summer';
}) => {
  return (
    <div>
      <label htmlFor="season" className={styles.label}>
        <strong>Season</strong>:
      </label>
      <select id="season" onInput={changeSeason} value={season}>
        <option value="winter">Winter</option>
        <option value="summer">Summer</option>
      </select>
    </div>
  );
};

export default Seasons;
