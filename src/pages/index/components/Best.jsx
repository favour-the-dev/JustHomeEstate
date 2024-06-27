import { useState } from "react";
import {motion} from "framer-motion";
import featured from '../../../assets/imgs/featured/featured-1.svg';
import slider1 from '../../../assets/imgs/slider/slider-1.jpg'
import slider2 from '../../../assets/imgs/slider/slider-2.jpg';
import slider3 from '../../../assets/imgs/slider/slider-3.jpg';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import ReactPlayer from 'react-player/lazy';
import preview from '../../../assets/videos/preview-1.png';
import vid from '../../../assets/videos/gif-1.mp4';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
function BestProperties() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startVid, setStartVid] = useState(false);
    const images = [slider1, slider2, slider3]
    const Next = ()=>{
        const nextIndex = currentIndex === images.length - 1? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    }
    const Previous = ()=>{
        const previousIndex  = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(previousIndex)
    }
    const Play = ()=>{
        setStartVid(true)
    }
    const Pause = ()=>{
        setStartVid(false)
    }
    return ( 
        <>
            <div className="bg-black p-8 text-white flex flex-col items-center justify-center">
                <div className="flex flex-col gap-4">
                    <div className="p-2 flex flex-col items-center justify-center gap-2">
                        <h2 className="font-semibold text-3xl">Best Properties</h2>
                        <h3 className="text-sm">See Our Best Homes below</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-2 gap-4 md:w-[80%] mx-auto">
                        <motion.div 
                        initial={{opacity: 0, y: -100, scale: 0.5 }} 
                        whileInView={{opacity: 1, y: 0, scale: 1}} 
                        transition={{duration: 0.25}} 
                        className="md:col-span-2 md:row-span-full">
                            <img src={featured} alt="" className=""/>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, x: 100, scale: 0.5 }} 
                        whileInView={{opacity: 1, x: 0, scale: 1}} 
                        transition={{duration: 0.25}} 
                        className="lg:col-span-2 relative overflow-hidden rounded-md">
                            <div onClick={()=>{Previous()}} className="backdrop-blur-md p-3 rounded-full w-fit absolute top-[50%] left-1 hover:p-4 hover:shadow-lg transition-shadow duration-200 ease-in-out"><GrPrevious /></div>
                            <div className="flex items-center justify-center w-fit max-h-full">
                                <img src={images[currentIndex]} alt="" className=""/>
                            </div>
                            <div onClick={()=>{Next()}} className="backdrop-blur-md p-3 rounded-full w-fit absolute top-[50%] right-1 hover:p-4 hover:shadow-lg transition-shadow duration-200 ease-in-out"><GrNext /></div>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, y: 50, scale: 0.5 }} 
                        whileInView={{opacity: 1, y: 0, scale: 1}} 
                        transition={{duration: 0.5}} 
                        className="rounded-md relative md:w-[250px] md:h-[180px]">
                            {/* playbutton */}
                            <div className="w-full flex flex-col items-center justify-center absolute top-[30%] z-20">
                                {startVid ? 
                                <div className="p-4 rounded-full backdrop-blur-md hover:p-5 hover:shadow-md" onClick={()=>{Pause()}}>
                                    <FaPause className="text-3xl"/>
                                </div> : 
                                <div className="p-4 rounded-full backdrop-blur-md hover:p-5 hover:shadow-md" onClick={()=>{Play()}}>
                                    <FaPlay className="text-3xl"/>
                                </div>}
                            </div>
                            {/* preview picture */}
                            {startVid ? <ReactPlayer onEnded={()=>{Pause()}} playing={startVid} url={vid} width={'full'} style={{ maxHeight: 180, borderRadius: 6 }}/> : 
                            <img src={preview} alt="" className="rounded-md w-full h-full"/>}
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, x: 50, scale: 0.5 }} 
                        whileInView={{opacity: 1, x: 0, scale: 1}} 
                        transition={{duration: 0.75}} 
                        whileHover={{scale: 1.05,
                        transition: { duration: 0.25 },}} 
                        className="rounded-md relative md:w-[250px] md:h-[180px] bg-primary text-black p-4 flex flex-col gap-2 cursor-pointer">
                            <h2 className="font-semibold flex flex-col">
                                <span className="text-3xl">280+</span>
                                Properties
                            </h2>
                            <p className="text-xs">Explore our wide variety of properties
                            to fid your dream home today</p>
                            <button className="w-fit rounded-full bg-white p-2 text-black self-end"><GrNext /></button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BestProperties;