import Logo from '../../assets/imgs/logo.svg'
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiPhone } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import { RiHome2Fill } from "react-icons/ri";
function Navbar() {
    const [isClicked, setClicked] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    function handleScroll(){
        console.log('event called')
        if(window.scrollY > 0){
            setHasScrolled(true);
            console.log('scrolled')
        }else{
            setHasScrolled(false)
        }
    }
        useEffect(()=>{
            window.addEventListener("scroll", handleScroll)

            return () =>{
                window.removeEventListener("scroll", handleScroll);
            }
        }, [])
    return ( 
        <>
            <div className={`fixed inset-x-0 z-50 container mx-auto p-2 text-white flex justify-between items-center ${hasScrolled ? 'bg-white rounded-full text-black' : ''}`}>
                <div>
                    <img src={Logo} alt="" className='cursor-pointer w-32'/>
                </div>
                <div className={`flex justify-between items-center p-4 lg:p-0 w-full lg:w-3/4 bg-primary lg:bg-transparent absolute lg:static ${isClicked ? 'left-0 top-0 transition-all lg:transition-none ease-linear duration-400': 'top-0 left-[10000px] lg:transition-none transition-all ease-linear duration-400'}`}>
                    <div className="flex flex-col lg:flex-row gap-4 text-sm"> 
                        <NavLink className='flex items-center gap-1'>Home <FaCaretDown /></NavLink>      
                        <NavLink className='flex items-center gap-1'>Listings <FaCaretDown /></NavLink>        
                        <NavLink className='flex items-center gap-1'>Members <FaCaretDown /></NavLink>        
                        <NavLink className='flex items-center gap-1'>Blog <FaCaretDown /></NavLink>        
                        <NavLink className='flex items-center gap-1'>Pages <FaCaretDown /></NavLink>        
                        <NavLink className='flex items-center gap-1'>Contact</NavLink>        
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-4 text-sm'>
                        <span className='flex gap-2 items-center cursor-pointer'>
                            <CiPhone className='text-2xl'/>
                            07010752695
                        </span>
                        <span className='flex gap-2 items-center cursor-pointer'>
                            <CgProfile className='text-3xl'/>
                            <button className="btn text-xs">Add Property</button>
                        </span>
                    </div>
                </div>
                <div className='relative z-60 lg:hidden cursor-pointer text-xl' onClick={()=> setClicked(!isClicked)}>
                    {
                        isClicked ? <RiHome2Fill/> : <RiHomeLine/>
                    }
                </div>
            </div>
        </>
    );
}

export default Navbar;