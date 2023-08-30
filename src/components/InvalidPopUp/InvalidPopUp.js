import Button from "../Ui/Button";
import styles from "./InvalidPopUp.module.css"

const InvalidPopUp = (props) => {

    function errorHandle(e) {
        if (e.target.tagName === "SECTION" || e.target.tagName === "BUTTON") {
            props.reset();
        }
    }

    return (
        <section onClick={errorHandle} className={styles.invalid}>
            <div className={styles.popup}>
                <h1>Invalid Inputs</h1>
                <p>{props.error} <br/> click okay to continue</p>
                <Button>okay</Button>
            </div>
        </section>
    );
}

export default InvalidPopUp;