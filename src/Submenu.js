import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context'
const Submenu = () => {
  const {isSubmenuOpen,location,page}=useGlobalContext()
  const container = useRef(null)
  
  const [columns,setColumns]= useState('col-2')
  useEffect(()=>{
  const submenu = container.current
  const {center,bottom} = location
  submenu.style.left = `${center}px`
  submenu.style.top = `${bottom}px`



  if(page.links===3){
    setColumns('col-3')
  }
  if(page.links>4){
    setColumns('col-4')
  }
  },[location,page.links])
  return (
    <aside ref={container} className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}>
     <h4>{page.page}</h4>
     <div className={`submenu-center ${columns}`}>
     {
       page.links.map((item,index)=>{
         return <a href={item.url}key={index}>
           {item.icon}{item.label}</a>
       })
     }

     </div>
    
    </aside>
  )
}

export default Submenu
