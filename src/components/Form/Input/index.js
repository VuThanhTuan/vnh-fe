import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const Input = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { field, form, startAdornment, onChange, error } = props;
  const { name, value } = field;
  return (
    <TextField
      error={!!error}
      helperText={error}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
      InputProps={{
        startAdornment,
      }}
      style={{ width: '100%' }}
    />
  );
};

Input.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  startAdornment: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Input.defaultProps = {
  startAdornment: null,
  error: null,
};

export default Input;
