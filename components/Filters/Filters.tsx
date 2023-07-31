import styles from './filters.module.css';

const Seasons = ({
  changeSeason,
  season,
  showOptional,
  optional,
}: {
  changeSeason: (e: Event) => void;
  season: 'winter' | 'summer';
  showOptional: (e: Event) => void;
  optional: boolean;
}) => {
  return (
    <div>
      <fieldset className={styles.fieldset}>
        <label htmlFor="season" className={styles.label}>
          Season:
        </label>
        <select id="season" onInput={changeSeason} value={season}>
          <option value="winter">Winter</option>
          <option value="summer">Summer</option>
        </select>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <label htmlFor={'optional'} className={styles.label}>
          Show Optional:
        </label>
        <input
          type="checkbox"
          id="optional"
          onChange={showOptional}
          checked={optional}
        />
      </fieldset>
    </div>
  );
};

export default Seasons;
