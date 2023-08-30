import styles from "./User.module.css"

const User = (props)=>{

    const name = props.dataUser.user;
    const age = props.dataUser.age;

    return(
        <div className={styles.user}>
            <p><span>{name}</span> ( {age} years old )</p>
        </div>
    );
}

export default User;