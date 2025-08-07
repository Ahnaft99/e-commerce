import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { HiBarsArrowDown } from 'react-icons/hi2'

const Menubar = () => {
    let cateRef = useRef()
    let accRef = useRef()
    let [show, setShow] = useState(false)
    let [accShow, setAccShow] = useState(false)
    useEffect(()=>{
        document.addEventListener("click", (e)=>{
            if(cateRef.current.contains(e.target) == true){
                setShow(!show)
            }else{
                setShow(false)
            }
            if(accRef.current.contains(e.target)){
                setAccShow(!show)
            }else{
                setAccShow(false)
            }
        })
    },[show, accShow])
  return (
    <div className='w-full bg-[#F5F5F3] '>
        <Container>
            <div className='w-full py-4'>
            <div className='w-1/3 items-center'>
            <h4 className='flex items-center gap-1 '><span ref={cateRef} className='cursor-pointer'> <HiBarsArrowDown />
            </span>Shop by Category</h4>
            {show &&(
 <ul className='bg-[#262626] w-[50%] gap-3 py-3 '>
 <li className='pl-[10px] text-white hover:font-bold cursor-pointer'>Accesories</li>
 <li className='pl-[10px]  text-white hover:font-bold cursor-pointer'>Furniture</li>
 <li className='pl-[10px]  text-white hover:font-bold cursor-pointer'>Electronics</li>
 <li className='pl-[10px]   text-white hover:font-bold cursor-pointer'>Clothes</li>
 <li className='pl-[10px]   text-white hover:font-bold cursor-pointer'>Bags</li>
 <li className='pl-[10px]   text-white hover:font-bold cursor-pointer'>Home appliances</li>
</ul>
            )}
           
            </div>
            </div>
            
        </Container>
    </div>
  )
}

export default Menubar