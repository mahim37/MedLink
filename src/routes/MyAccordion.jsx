import React , {useState} from 'react'
import "./css/Accordion.css";
const MyAccordion = ({question,answer}) => {
    const [show,setShow]=useState(false);
  return (
    <div className="flex flex-col text-justify">
        <div className='main-heading'>
            <p><i onClick={()=>{setShow(!show)}} className={show ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i></p>
            <h3 className='text-slate-900 text-xl'>{question}</h3>
        </div>
        <br></br>
        {show && <p className='text-lg'>{answer}</p>}
        <br></br>
    </div>
  )
}

export default MyAccordion