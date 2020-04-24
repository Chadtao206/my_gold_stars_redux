import React from "react";

export const BaseInputGroup = ({ labelText, id, ...rest }) => (
  <>
    <label htmlFor={id} className="sr-only">
      {labelText}
    </label>
    <input id={id} placeholder={labelText} className="form-control" {...rest} />
  </>
);

export const EmailInputGroup = props => (
  <BaseInputGroup
    labelText={"Username"}
    id="username"
    name="username"
    type="text"
    className="form-control"
    {...props}
  />
);

export const PasswordInputGroup = props => (
  <BaseInputGroup
    labelText="Password"
    id="password"
    name="password"
    type="password"
    className="form-control"
    {...props}
  />
);
