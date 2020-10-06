import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.less'


export default function App() {
    const [Notes, setNotes] = useState([])
    const [Title, setTitle] = useState('')
    const [Text, setText] = useState('')
    const [Color, setColor] = useState('')

    async function fetchNotes(){
        const res = await fetch('http://localhost:3001/');
        const data = await res.json()
        setNotes(data)  
    }
    useEffect(()=>{
        fetchNotes()
    },[])

    async function subForm(event){
        
        event.preventDefault()
        const newNote = {
            title:Title,
            text:Text,
            color:Color,
            date:new Date().toLocaleDateString()
        }
        const data = await Axios.post('http://localhost:3001/notes',newNote)
        console.log(data);       
    }
    function onChangeInput({target}){
        const name = target.name;
        const value = target.value
        switch (name) {
            case 'title':
                setTitle(value)
                break
            case 'text':
                setText(value)
                break
            case 'color':
                setColor(value)
                break
            default:
                break
        }
    }

    return(
        <div>
            <ul>
                {
                    Notes.map((note,index)=>{
                        return(
                            <li 
                            style={{color:note.color}} 
                            key={index}>{note.title} 
                            <span> {note.text} </span> 
                            <strong>{note.date} </strong>
                            </li>
                        )
                    })
                }
            </ul>
            <hr/>
            <form onSubmit={subForm}>
                <input className='input' type="text" name='title' value={Title} onChange={onChangeInput} />
                <input type="text" name='text' value={Text} onChange={onChangeInput} />
                <input type="text" name='color' value={Color} onChange={onChangeInput}/>
                <button type="submit">Sub</button>
            </form>
        </div>
    )
};
