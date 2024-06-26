import {motion} from 'framer-motion'
import {useState } from 'react';
import profile1 from '../../../assets/imgs/headshots/profile-1.jpg';
import profile2 from '../../../assets/imgs/headshots/profile-2.jpg';
import profile3 from '../../../assets/imgs/headshots/profile-3.jpg';
import RatingCard from './ReviewsComps/RatingCard';
import star from '../../../assets/imgs/rating.svg';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import amazon from '../../../assets/imgs/partners/amazon.svg';
import Amd from '../../../assets/imgs/partners/Amd.svg';
import cisco from '../../../assets/imgs/partners/cisco.svg';
import dropcom from '../../../assets/imgs/partners/dropcom.svg';
import logitech from '../../../assets/imgs/partners/logitech.svg';
import spotify from '../../../assets/imgs/partners/spotify.svg';
function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const peopleReviews = [
        {
            name: 'John Doe',
            occupation: 'writer',
            description: 'JustHome Real Estate exceeded my expectations! Their local expertise, dedication, and personalized service made finding my dream home a breeze. I highly recommend them to anyone seeking a seamless and enjoyable real estate experience.',
            profileUrl: profile1
        },
        {
            name: 'Shela Mosab',
            occupation: 'finacial Consultant',
            description: 'As a financial consultant who recently bought a home with JustHome Real Estate, I was thoroughly impressed. Their expertise, market insights, and personalized approach ensured a smooth, profitable investment. I highly recommend them for any real estate needs.',
            profileUrl: profile2
        },
        {
            name: 'Jane Summers',
            occupation: 'Designer',
            description: 'As a designer who recently bought a home with JustHome Real Estate, I was thoroughly impressed. Their attention to detail, deep market understanding, and personalized service made the process smooth and inspiring. Highly recommend!',
            profileUrl: profile3
        },
    ]
    const Next = ()=>{
        const nextIndex = currentIndex === peopleReviews.length - 1? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    }
    const Previous = ()=>{
        const previousIndex  = currentIndex === 0 ? peopleReviews.length - 1 : currentIndex - 1;
        setCurrentIndex(previousIndex)
    }
    return ( 
        <>
            <div className="bg-[#E9E9E9] p-8 flex flex-col items-center justify-center gap-6">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between border-b-2 border-opacity-70 w-full p-4 gap-4">
                    <motion.div 
                    initial={{opacity: 0, x: -50, scale: 0.5 }} 
                    whileInView={{opacity: 1, x: 0, scale: 1}} 
                    transition={{duration: 0.5}} 
                    className="flex flex-col gap-2 lg:w-1/3">
                        <h2 className="text-2xl lg:text-3xl font-bold">What our customers are
                        saying about us?</h2>
                        <p className="text-sm">Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose injected humour and the like.</p>
                        <div className="flex items-start gap-4">
                            <span className="flex flex-col">
                                <span className="text-2xl font-semibold">10m+</span>
                                <span>Happy People</span>
                            </span>
                            <span className="flex flex-col">
                                <span className="text-2xl font-semibold">4.88</span>
                                <span>Overall Rating</span>
                                <span><img src={star} alt="" /></span>
                            </span>
                        </div>
                    </motion.div>
                    <div className="lg:w-1/2 flex flex-col gap-3">
                        <RatingCard 
                        profileUrl={peopleReviews[currentIndex].profileUrl}
                        name={peopleReviews[currentIndex].name}
                        occupation={peopleReviews[currentIndex].occupation}
                        description={peopleReviews[currentIndex].description}
                        />
                        <div className='flex items-center gap-2'>
                            <motion.div 
                            initial={{opacity: 0, x: -20}} 
                            whileInView={{opacity: 1, x: 0}} 
                            transition={{duration: 0.5}}  
                            onClick={()=>{Previous()}} 
                            className="p-1 px-4 rounded-full w-fit border border-black border-opacity-80 hover:bg-black hover:bg-opacity-10 cursor-pointer">
                                <GrPrevious />
                            </motion.div>
                            <motion.div 
                            initial={{opacity: 0, x: 20}} 
                            whileInView={{opacity: 1, x: 0}} 
                            transition={{duration: 0.5}}
                            onClick={()=>{Next()}} 
                            className="p-1 px-4 rounded-full w-fit border border-black border-opacity-80 hover:bg-black hover:bg-opacity-10 cursor-pointer">
                                <GrNext />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-4 lg:mt-4 p-4 mg:p-6'>
                    <motion.h2 
                    initial={{opacity: 0, y: 20, scale: 0.5}} 
                    whileInView={{opacity: 1, y: 0, scale: 1}} 
                    transition={{duration: 0.5}} 
                    className='font-bold text-center text-xl lg:text-base lg:text-start'>Thousands of world’s leading companies trust Space</motion.h2>
                    <motion.div
                    initial={{opacity: 0, y: 50}} 
                    whileInView={{opacity: 1, y: 0}} 
                    transition={{duration: 0.25}}  
                    className='w-full grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-around lg:items-center gap-8 lg:gap-3'>
                        <motion.div
                        className='flex items-center justify-center'
                        initial={{opacity: 0, y: 50, scale: 0.5}} 
                        whileInView={{opacity: 1, y: 0, scale: 1}} 
                        transition={{duration: 0.5}} 
                        >
                            <img src={amazon} alt="" />
                        </motion.div>
                        <motion.div
                        className='flex items-center justify-center'
                        initial={{opacity: 0, y: 50, scale: 0.5}} 
                        whileInView={{opacity: 1, y: 0, scale: 1}} 
                        transition={{duration: 0.75}} 
                        >
                            <img src={Amd} alt="" />
                        </motion.div>
                        <motion.div
                        className='flex items-center justify-center'
                        initial={{opacity: 0, y: 50, scale: 0.5}} 
                        whileInView={{opacity: 1, y: 0, scale: 1}} 
                        transition={{duration: 0.80}} 
                        >
                            <img src={cisco} alt="" />
                        </motion.div>
                        <motion.div
                        className='flex items-center justify-center'
                        initial={{opacity: 0, y: 50, scale: 0.5}} 
                        whileInView={{opacity: 1, y: 0, scale: 1}} 
                        transition={{duration: 1.05}} 
                        >
                            <img src={dropcom} alt="" />
                        </motion.div>
                        <motion.div
                        className='flex items-center justify-center'
                        initial={{opacity: 0, y: 50, scale: 0.5}} 
                        whileInView={{opacity: 1, y: 0, scale: 1}} 
                        transition={{duration: 1.25}} 
                        >
                            <img src={logitech} alt="" />
                        </motion.div>
                        <motion.div
                        className='flex items-center justify-center'
                        initial={{opacity: 0, y: 50, scale: 0.5}} 
                        whileInView={{opacity: 1, y: 0, scale: 1}} 
                        transition={{duration: 1.35}} 
                        >
                            <img src={spotify} alt="" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Reviews;