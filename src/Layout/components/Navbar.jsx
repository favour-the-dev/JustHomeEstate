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
        if (window.scrollY > 100){
            setHasScrolled(true);
        }else{
            setHasScrolled(false);
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
            <div className={`fixed inset-x-0 z-50 container mx-auto flex justify-between items-center text-white ${hasScrolled ? 'bg-[#1F4B43] rounded-full shadow-md p-4 top-1' : 'p-2'}`}>
                <div>
                    <img src={Logo} alt="" className='cursor-pointer w-32'/>
                </div>
                <div className={`flex flex-col lg:flex-row lg:justify-between lg:items-center p-4 lg:p-0 w-full lg:w-3/4 bg-[#1F4B43] lg:bg-transparent absolute lg:static ${isClicked ? 'right-0 top-0 transition-all ease-in-out duration-600': 'top-0 right-[-100%] transition-all ease-in-out duration-600'}`}>
                    <div className="flex flex-col lg:flex-row gap-6 text-base lg:text-sm"> 
                        <NavLink className='flex items-center gap-1'>Home <FaCaretDown /></NavLink>      
                        <NavLink className='flex items-center gap-1'>Listings <FaCaretDown /></NavLink>        
                        <NavLink className='flex items-center gap-1'>Members <FaCaretDown /></NavLink>        
                        <NavLink className='flex items-center gap-1'>Blog <FaCaretDown /></NavLink>        
                        <NavLink className='flex items-center gap-1'>Pages <FaCaretDown /></NavLink>        
                        <NavLink className='flex items-center gap-1'>Contact</NavLink>        
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:text-sm'>
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