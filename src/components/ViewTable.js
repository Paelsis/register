
const styles = {
    container:{
        width:'100vw'
    },
    table:{
        marginLeft:'auto',
        marginRight:'auto'
    }
}


export default ({cols, list, buttons}) => 
<div style={styles.container}>
    <table style={styles.table} >
        <thead>
                Text
        </thead>
        <tr>
            {cols.map(col=>
                <th>{col}</th>
            )}
            {buttons?buttons.map(it =>
                <th>
                    {it.label?it.label:'Button'}
                </th>
            ):null}
        </tr>
        <tbody>
            {list.map(li=>
                <tr>
                    {cols.map(col=>
                        <td>{li[col]}</td>
                    )}    
                    {buttons?buttons.map(it =>
                        <td>
                            <button onClick={()=>it.onClick(li)}>{it.label?it.label:'Button'}</button>
                        </td>
                    ):null}
                 </tr>
            )}
        </tbody>
    </table>
</div>

