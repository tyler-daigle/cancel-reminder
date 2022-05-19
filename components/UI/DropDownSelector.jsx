import styles from "@styles/UI/DropDownSelector.module.css";
import PropTypes from "prop-types";

export default function DropDownSelector({ selectId, labelText, options, onChange, selectedOption }) {
  return (
    <div>
      <label className={styles.ddsLabel} htmlFor={selectId}>{labelText}: </label>
      <select className={styles.ddsSelect} id={selectId} onChange={onChange} value={selectedOption}>
        {options.map(o => <option className={styles.ddsOption} key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

DropDownSelector.propTypes = {
  selectId: PropTypes.string.isRequired, // the ID that is used on the <select> tag for matching with <label> tag
  labelText: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

DropDownSelector.defaultProps = {
  selectedIndex: 0
};