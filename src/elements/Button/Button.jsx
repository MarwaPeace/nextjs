'use client'
import styles from "./Button.module.css"
export default function Button ()  {
  return (
    <div>
        <button
    className={styles.logout}
    onClick={()=>{console.log("logout")}}>Logout</button>
    </div>
  )
}

 