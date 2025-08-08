"use client";
import { useState } from "react";
import Counter from "./component/Counter";
import TotalCount from "./component/TotalCount";

let initialState = [{id: 1, count: 0},{id: 2, count: 0}];

export default function Home() {
  const [sate, setSate] = useState(initialState);

  const totalCount = sate.reduce((total,presentCount)=> total + presentCount.count, 0);

  const increment = (id:any) => {
  const updatedCounters =   sate.map((item)=>{
      if(item.id === id) {
        return {...item, count: item.count + 1};
      }else{
        return {...item};
      }
    })
    setSate(updatedCounters);
  };

  const decrement = (id:any) => {
    const updatedCounters = sate.map((item)=>{
      if(item.id === id) {
        return {...item, count: item.count - 1};
      }else{
        return {...item};
      }
    })
    setSate(updatedCounters);
  };



  return (
    <div className="font-sans grid items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold text-center">
        Welcome to My Counter App
      </h1>


      {sate.map((item) => (
        <Counter 
          key={item.id} 
          count={item.count} 
          increment={() => increment(item.id)} 
          decrement={() => decrement(item.id)} 
        />
      ))}
   
      <TotalCount totalCount={totalCount}/>
    </div>
  );
}
