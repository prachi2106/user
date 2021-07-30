import React from "react";
import styles from "./Button.module.css";

function Button(props) {



return (
    <div>
    <button className={styles.button} type="submit" onClick={props.onSubmit}>
      Add User
    </button>
    </div>
)

}

export default Button;