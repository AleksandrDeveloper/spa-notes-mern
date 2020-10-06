import React, { useEffect, useState } from 'react';


export default function App() {
    const [Notes, setNotes] = useState([])
    const [Title, setTitle] = useState('')
    const [Text, setText] = useState('')
    const [Color, setColor] = useState('')

    async function fetchNotes(){
        const res = await fetch('http://localhost:3001/');
        const data = await res.json()
        setNotes(data)
        console.log(data);
    }
    useEffect(()=>{
        fetchNotes()
    },[])

    function subForm(){

    }
    function onChangeInput({target}){
        const name = target.name;
        console.log(name);
    }

    return(
        <div>
            <ul>
                {
                    Notes.map((note,index)=>{
                        return(
                            <li key={index}>{note.title} </li>
                        )
                    })
                }
            </ul>
            <hr/>
            <form action="/notes" method="post" onSubmit={subForm}>
                <input type="text" name='title' value={Title} onChange={onChangeInput} />
                <input type="text" name='text' value={Text} onChange={onChangeInput} />
                <input type="text" name='color' value={Color} onChange={onChangeInput}/>
                <button type="submit">Sub</button>
            </form>
        </div>
    )
};
