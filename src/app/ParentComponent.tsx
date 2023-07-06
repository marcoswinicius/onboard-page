'use client'

import React, { useState } from "react";
import FirstForm from "../../components/FormComponents/FirstForm";
import SecondForm from "../../components/FormComponents/SecondForm";
import ThirdForm from "../../components/FormComponents/ThirdForm";

const ParentComponent = () => {
    const formList = ["FirstForm", "SecondForm", "ThirdForm"];
    const [page, setPage] = useState(0);
    const formLength = formList.length;

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };

  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  console.log(page)

  const handleForm = () => {
    switch (page) {
      case 0: {
        return (
          <div>
            <FirstForm></FirstForm>
          </div>
        );
      }
      case 1: {
        return (
          <SecondForm></SecondForm>
        );
      }
      case 2: {
        return <ThirdForm></ThirdForm>;
      }
      default:
        return null;
    }
  };

  return (
    <div className="p">
        <div>{handleForm()}</div>
        <div>
            <button className="btn" onClick={handlePrev}>Prev</button>           
        </div>
        <div>
            <button className="btn" onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default ParentComponent