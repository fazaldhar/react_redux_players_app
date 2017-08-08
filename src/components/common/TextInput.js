import React, {PropTypes} from 'react';

const TextIput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if(error && error.length > 0) {
    wrapperClass += " " + 'has_error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
        type="text"
        name={name}
        className="form-control"
        value={value}
        onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextIput.propTypes ={
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextIput;
