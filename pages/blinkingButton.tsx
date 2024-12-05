import {useEffect, useState} from "react"
import styles from "../styles/Home.module.css"
export default function BlinkingButton({timeInterval}): JSX.Element {
    const [isSolid,setIsSolid] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setIsSolid(!isSolid); // This stops the interval
        }, timeInterval);
      },[isSolid]);
    
    return (
        <div>
            <button className={isSolid?styles["home--button-transparent"]:styles["home--button"]}>
            </button>
        </div>
    );
}
