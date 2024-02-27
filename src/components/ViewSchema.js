import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {serverFetchData} from "../services/serverFetch"
import {ViewGroupRecursive} from '../components/ViewGroup'

export default ({groupByArr}) => {
    const [list, setList] = useState()
    const handleReply = data => {
        if (data.status === 'OK' || data.status === 'true') {
            setList(data.result)
        } else {
            alert(data.message)
        }

    }
    const navigate = useNavigate()
    const cols = ['nameSV', 'city', 'startDate', 'startTime']
    //const cols = list?[...Object.keys(list[0])]:[]

    const allCols = list?Object.keys(list[0]).filter(it=>it !== 'avaStatusText'):[]

    useEffect(()=>{
        serverFetchData('/scheduleCourse', '', '', handleReply)
    },[])

    const buttons=[
        {
            label:'Anmälan',
            type:'button',
            onClick:course=>navigate('/register', {state:course})
        }
    ]

    return(
    <div>
        <h1>Schema</h1>
        {list?
            <ViewGroupRecursive index={0} groupByArr={groupByArr} cols={cols} list={list} buttons={buttons} />
        :
            <h1>No List</h1>
        }
    </div>
    )
}