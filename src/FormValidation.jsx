import React from 'react';
import { Link } from "react-router-dom";

function FormValidation() {

  return (
    <div className="align">
      <h1>
        <u>Product</u>
      </h1>
      <div className="product"></div>
      <h3>Submit your feedback by clicking the comment button</h3>

      <Link to="/submitcomment">
        <button > Comment </button>
      </Link>
    </div>
  );
}

export default FormValidation;






