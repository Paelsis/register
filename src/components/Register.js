import { useLocation } from "react-router-dom";
import ViewObject from "./ViewObject"

const styles = {
    container:{width:'100vw'},
    object:{margin:'auto', textAlign:'center'}
}

export default () => {
    const {state} = useLocation() // Object state passed with router via call navigate(/register:{state:course})

    return(
        <div style={styles.container}>
            <div style={styles.object}>
                <h1>Anmälan/Register</h1>
                <ViewObject state={state} />       
            </div>
        </div>
    )
}