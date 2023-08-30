import User from "./User/User";
import styles from "./Users.module.css"

const Users = (props)=>{
    return(
        <div className={styles.users}>
            {props.data.map((user,index)=><User key={index} dataUser={user}></User>)}
        </div>
    );
}

export default Users;