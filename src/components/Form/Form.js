import { useState } from "react";
import styles from "./Form.module.css"
import Button from "../Ui/Button";

const initialData = {
    "user": "",
    "age": "",
}

const Form = (props) => {

    // make input's labels flexible when focusing and bluring

    const [inputUserLength, setInputUserLength] = useState(0);
    const [inputAgeLength, setInputAgeLength] = useState(0);

    function userHandle(e) {
        setInputUserLength(e.target.value.length);
        inputHandle(e.target.id, e.target.value);
    }
    function ageHandle(e) {
        setInputAgeLength(e.target.value.length);
        inputHandle(e.target.id, e.target.value)
    }

    const [inputsValues, setInputsValues] = useState(initialData);

    function inputHandle(input, value) {
        setInputsValues({
            ...inputsValues,
            [input]: value,
        })
    }

    function sendData(e) {
        e.preventDefault();
        props.setData(inputsValues);

        setInputsValues(initialData);
        setInputUserLength(0)
        setInputAgeLength(0)
    }

    return (
        <form onSubmit={sendData} className={styles.form}>
            <div className={styles.input}>
                <input
                    autoComplete="off"
                    value={inputsValues.user}
                    autoFocus
                    onChange={userHandle}
                    id="user"
                    type="text"
                    placeholder="Username Support Characters : (a-z)(0-9)(_)(.)" />
                <label style={inputUserLength > 0 ? { top: "0px" } : null} htmlFor="user">username</label>
            </div>
            <div className={styles.input}>
                <input
                    autoComplete="off"
                    value={inputsValues.age}
                    onChange={ageHandle}
                    id="age"
                    type="number"
                    placeholder="From 1 --> 99" />
                <label style={inputAgeLength > 0 ? { top: "0px" } : null} htmlFor="age">age</label>
            </div>
            <Button>add user</Button>
        </form>
    );
}

export default Form;