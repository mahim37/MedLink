import React, {useState} from 'react';
import { questions } from './api';
import "./css/Accordion.css";
import MyAccordion from "./MyAccordion";
const Accordion = () => {
    const [data,setData]=useState(questions);
  return (
    <div>
        <section className="flex bg-slate-200 flex-col m-14 p-10 rounded-3xl shadow-slate-950 shadow-3xl">
            <h1 className="text-center text-3xl text-slate-950">Frequently Asked Questions (FAQs)</h1>
            <br></br>
            {
                data.map((curElem)=>{
                    const {id}=curElem;
                    return <MyAccordion key={id} {...curElem}/>
                })
            }
        </section>
    </div>
  )
}

export default Accordion