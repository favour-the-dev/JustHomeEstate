import homeBg from '../../assets/imgs/home-bg.jpg';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
function Home() {
    const [isActive, setActive] = useState(true);
    function handleClick(state){
        setActive(state);
    }
    return ( 
        <>
            <div>
                <div className="fixed top-0 w-full h-full bg-black shadow-inner text-white">
                    <img src={homeBg} alt="" className='w-full h-full object-cover opacity-60'/>
                    <div className='w-full h-full flex flex-col justify-center absolute top-0'>
                        <div className='flex flex-col space-y-4 md:w-3/4 lg:w-1/2 mx-auto p-2 md:p-0'>
                            <button className='btn uppercase w-fit mx-auto'>Let us Guide your home</button>
                            <h1 className='text-center font-bold text-3xl md:text-5xl md:w-[80%] mx-auto'>Discover a Place where you will love to Live</h1>
                            <div className='flex items-center gap-3 w-1/2 mx-auto justify-center font-semibold capitalize'>
                                <div onClick={()=>{handleClick(true)}} className={`py-1 cursor-pointer ${isActive ? 'border-b-2 border-primary' : 'border-none'}`}>
                                    Sale
                                </div>
                                <div onClick={()=>{handleClick(false)}} className={`py-1 cursor-pointer ${!isActive ? 'border-b-2 border-primary' : 'border-none'}`}>
                                    Rent
                                </div>
                            </div>
                            <div className='relative w-full' onSubmit={(e)=>e.preventDefault()}>
                                <label className=''>
                                    <input type="text" placeholder='Enter Name Keywords...' className='text-black w-full p-4 rounded-3xl focus:outline-none font-semibold placeholder:text-black placeholder:font-semibold'/>
                                    <div className='text-lg rounded-full bg-primary w-fit p-4 text-black absolute top-1 right-1'>
                                    <CiSearch />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </>
    );
}

export default Home;