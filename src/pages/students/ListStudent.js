import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ListStudent() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/students').then(res => {
            setList(res.data)
        })
    }, [])
    return (
        <>
            <h1> List Student </h1>
            {list.map((item, key) => {
                return (
                        <Link to={'/edit-student/' + item.id}> <h3 key={key}> {item.name} : {item.description}</h3> </Link>
                )
            })}
        </>
    )
}