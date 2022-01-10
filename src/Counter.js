import { useEffect, useState } from "react"


function Counter(){
  
 const [count, setCount]=useState(0)

const [text,setText]=useState('')
   

useEffect(()=>{   document.title="hi"    },[])



useEffect(()=>{  document.title=count+text   }, [count, text])



useEffect(()=>{  document.title=count+text   })


useEffect(()=>{   return()=> document.title="bye"   }, [])


const increment=(x)=>{ setCount(count+x)}

 const decrement=()=>{ setCount( count>0 ?  count-1   :0 ) }
   
    return (

        <div>
        <button  onClick={()=>increment(5)} >+</button>
        <span>{count}</span>
        <button onClick={decrement} >-</button>
        <input  onChange={(e)=> setText(e.target.value)} value={text}/>
        <h1>{text}</h1>
        </div>
    )
}

export default Counter