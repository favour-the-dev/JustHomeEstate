import {motion} from "framer-motion"
function FeaturedDeals({status, imageUrl, title, price, beds, baths, size}) {
    return ( 
        <>
            <motion.div 
            initial={{opacity: 0, y:-50, scale:0.5}}
            whileInView={{opacity: 1, y: 0, scale: 1}}
            transition={{duration: 0.5}}
            className="rounded-lg shadow-sm p-2 flex flex-col w-[100%] lg:min-h-[425px]  lg:w-[350px] gap-2 border">
                <span className="bg-[#1F4B43] text-white rounded-full p-2 uppercase text-xs w-fit">{status}</span>
                <img src={imageUrl} alt="" className="w-full self-center rounded-lg h-[300px]"/>
                <div className="flex flex-col items-start gap-3">
                    <p className="font-bold text-sm">{title}</p>
                    <p className="font-semibold">${price}</p>
                </div>
                {/* <p>{location}</p> */}
                <div className="flex items-center justify-between ">
                    <span>Beds: {beds}</span>
                    <span>Baths: {baths}</span>
                </div>
            </motion.div>
        </>
    );
}

export default FeaturedDeals;