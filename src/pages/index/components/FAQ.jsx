import { useState } from "react";
import Items from "../../../services/Faq";
import {motion} from 'framer-motion';
function Faq() {
    const [selected, setSelected] = useState(null);
    const toggleCard = (i)=>{
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i);
    }
    return ( 
        <>
        <div className="flex items-center justify-center w-full p-8">
            {/* bg-[#F9F9F9] */}
            <div className="md:w-[35%] flex flex-col gap-2">
                <motion.div 
                initial={{opacity: 0, y: -40}} 
                whileInView={{opacity: 1, y: 0}} 
                transition={{duration: 0.35}}
                className="flex items-center justify-center flex-col">
                    <h2 className="text-3xl font-bold">Have more Questions?</h2>
                    <p className="text-sm hidden">see our answers to our most frequently asked Questions.</p>
                </motion.div>
                <div className="flex flex-col gap-2">
                    {
                        Items.map((item, index)=>{
                            return (
                                <motion.div 
                                initial={{opacity: 0, x: -40}} 
                                whileInView={{opacity: 1, x: 0}} 
                                transition={{duration: 0.45}}
                                className={`p-2 flex flex-col gap-2 rounded-md ${selected === index ? 'bg-[#F9F9F9]' : ''}`} key={index}>
                                    <div className="flex items-center justify-between">
                                        <p>{item.question}</p>
                                        <span className="text-3xl cursor-pointer" onClick={()=>{toggleCard(index)}}>
                                            {selected === index ? '-' : '+'}
                                        </span>
                                    </div>
                                    <div>
                                        <motion.p 
                                        initial={{opacity: 0, y: 10, scale:0.5}} 
                                        whileInView={{opacity: 1, y: 0, scale: 1}} 
                                        transition={{duration: 0.35}}
                                        className={`text-sm ${selected === index ? '' : 'hidden'}`}>{ item.answer}</motion.p>
                                    </div>
                                </motion.div> 
                            )
                        })
                    }        
                </div>
            </div>
        </div>
        </>
    );
}

export default Faq;