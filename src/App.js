import React, { useState } from 'react';
import Form from './components/Form/Form';
import classes from "./App.module.css"
import Users from './components/Users/Users';
import InvalidPopUp from './components/InvalidPopUp/InvalidPopUp';


const errors = [
  "the input are empty, please enter your data",
  "you entered an invalid age (>0)&(<100)",
  "you entered an invalid username",
]

function App() {
  const [errorNum,setErrorNum] = useState(null);

  const [data, setData] = useState([]);

  const userReg = new RegExp(/^[a-z0-9_.]{4,20}$/)
  const ageReg = new RegExp(/^(0?[1-9]|[1-9][0-9])$/)

  function getFormData(value) {
    if (value.user !== "" && value.age !== "") {
      if (userReg.test(value.user)) {
        if (ageReg.test(value.age)) {
          setData([
            ...data,
            { ...value },
          ]);
        } else {
          setErrorNum(1);
        }
      } else {
        setErrorNum(2);
      }
    } else {
      setErrorNum(0);
    }
  }

  function errorHandle(value) {
    setErrorNum(value)
  }

  function resetError() {
    setErrorNum(null);
  }

  return (
    <section className={classes["user-project"]}>
      <div className={classes["user-content"]}>
        <Form getError={errorHandle} setData={getFormData}></Form>
        {data.length > 0 && <Users data={data}></Users>}
      </div>
      {errorNum !== null && <InvalidPopUp reset={resetError} error={errors[errorNum]} />}
    </section>
  );
}

export default App;
