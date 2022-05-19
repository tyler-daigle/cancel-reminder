import styles from "@styles/UI/DropDownSelector.module.css";
import PropTypes from "prop-types";

export default function DropDownSelector({ selectId, label, options, onChange }) {
  return (
    <div>
      <label className={styles.ddsLabel} htmlFor={selectId}>{label}: </label>
      <select className={styles.ddsSelect} id={selectId} onChange={onChange}>
        {options.map(o => <option className={styles.ddsOption} key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

DropDownSelector.propTypes = {
  selectId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};