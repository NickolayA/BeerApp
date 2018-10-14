import React from "react";

const FilterItem = props => {
  const { fieldType, fieldName } = props;
  const labelText = fieldName.replace("_", " ").toUpperCase();
  return (
    <React.Fragment>
      <div className="field">
        <label className="label is-small" htmlFor={fieldName}>
          {labelText}
        </label>
        <input
          className="input is-rounded is-small"
          type={fieldType}
          id={fieldName}
          name={fieldName}
          placeholder={fieldName}
        />
      </div>
    </React.Fragment>
  );
};

export default FilterItem;
