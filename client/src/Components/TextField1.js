import React, { useState } from 'react';
import TextField from 'Components/TextField';

function TextField1() {
  // Declare a new state variable, which we'll call "count"
  const { field, placeholder } = this.props;
  const [{ field }, setField] = useState('');

  return (
    <div>
      <TextField value={field} onChange={e => setField(e.target.value)} placeholder={placeholder} />
      <p>{field}</p>
    </div>
  );
}

TextField1.propTypes = {
  field: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};


export default TextField1