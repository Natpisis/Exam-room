
import React, { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

import './Form.css'; 

function Swr(){
  const fetcher = (url) => fetch().then((res) => res.json()) 
  const {data, error} = useSWR('https://c265-2405-9800-b520-3a6f-4867-a84e-abca-1301.ngrok-free.app/select_data/Examtable' , fetcher);

  if(error) {
    return <div>Error Loading...</div>
  }

  return(
    <div>
      <h2>
        {data?.map((val) => (
            <p>{val}</p>
        ))}
      </h2>
    </div>
  )

}

const Form = () => {
  /*const [formData, setFormData] = useState({
    total: '',
    page: '',
    color: '',
    date:'',
    type:'',
    calculator:'',
    paperans:'',
    conditions:'',
    fileexam:''
  });''*/

  
  const [Data, setData] = useState({
    Ref:           '',  // fromexamtable
    NoSt:          '', // fromexamtable
    Submit:        '',
    SubDate:       new Date(),
    Copy:          2, 
    Page:          10, 
    Receive:       true,         //
    RecDate:       "2024-07-17", //
    Qty:           5, //----
    StapleApart:   "No staples", //---
    Calculator:    true,
    AnswerSheet:   false,
    AnswerBookUse: "Math Book",
    Remark:        "Urgent",
    Color:         "Blue",
  });

  //let ttt = formData.total +','+ formData.page+','+ formData.color+','+ formData.date+','+ formData.type+','+ formData.calculator+','+ formData.paperans+','+ formData.conditions;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', Data);
    //console.log(ttt);
  };

  const insert = async () => {
    try {
         await axios.post('https://6228-184-22-12-234.ngrok-free.app/insert_detail_exam/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            } ,
        });

    } 
    catch (error) {

         }
    };

  return (
    <form class = "container"onSubmit={handleSubmit}>
    <div>
      <div >
        <div>
 
        <label htmlFor="page">จำนวนชุด:</label>
        <input
          class = "form-row"
          type="text"
          id="page"
          name="page"
          value={formData.page}
          onChange={handleChange}
        />

        <label htmlFor="total">จำนวนหน้า:</label>
        <input
          class = "form-row"
          type="text"
          id="total"
          name="total"
          value={formData.total}
          onChange={handleChange}
        />

        <label htmlFor="color">สีข้อสอบ:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />

          </div>
        </div>
      

      <div >
        
      

      
      <label htmlFor="date">วันที่ส่ง:</label>
        <input
          class = "form-row"
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      
      
      <label htmlFor="type">รูปแบบการเย็บ:</label>
        <input
          type="datalist"
          id="type"
          name="type"
          list="typerOptions"
          value={formData.type}
          onChange={handleChange}
        />
        <datalist id="typerOptions">
          <option value="แนวขวาง"></option>
          <option value="แนวตรง"></option>
          <option value="เย็บมุม"></option>
        </datalist>
        
      </div>
  
      <div >
        <label>Calculator:</label>
        
          <input
            type="radio"
            id="calculator-yes"
            name="calculator"
            value="ใช้ได้"
            checked={formData.calculator === 'ใช้ได้'}
            onChange={handleChange}
          />
          <label htmlFor="calculator-yes">ใช้ได้</label>
        
          <input
            type="radio"
            id="calculator-no"
            name="calculator"
            value="ใช้ไม่ได้"
            checked={formData.calculator === 'ใช้ไม่ได้'}
            onChange={handleChange}
          />
          <label htmlFor="calculator-no">ใช้ไม่ได้</label>
        
      </div>

      <div >
        <label>กระดาษคำตอบ:</label>
        
          <input
            type="radio"
            id="paperans-yes"
            name="paperans"
            value="ใช้ได้"
            checked={formData.paperans === 'ใช้ได้'}
            onChange={handleChange}
          />
          <label htmlFor="paperans-yes">ใช้ได้</label>
        
          <input
            type="radio"
            id="paperans-no"
            name="paperans"
            value="ใช้ไม่ได้"
            checked={formData.paperans === 'ใช้ไม่ได้'}
            onChange={handleChange}
          />
          <label htmlFor="paperans-no">ใช้ไม่ได้</label>
        
      </div>

      

      <div>
        <label htmlFor="conditions">เงื่อนไขการสอบ:</label>
        <input
          type="text"
          id="conditions"
          name="conditions"
          value={formData.conditions}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="fileexam">ไฟล์ข้อสอบ:</label>
        <input
          type="file"
          id="fileexam"
          name="fileexam"
          value={formData.fileexam}
          onChange={handleChange}
        />
      </div>



      <button onClick={insert} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
