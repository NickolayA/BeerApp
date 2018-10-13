import React from "react";

const FilterItem = props => {
  const { fieldType, fieldName } = props;
  return (
    <React.Fragment>
      <label htmlFor={fieldName}>{fieldName.toUpperCase()}</label>
      <input
        type={fieldType}
        id={fieldName}
        name={fieldName}
        placeholder={fieldName}
      />
      <br />
    </React.Fragment>
  );
};

export default FilterItem;
