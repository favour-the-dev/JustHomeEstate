function FeaturedDeals({status, imageUrl, title, price, beds, baths, size}) {
    return ( 
        <>
            <div className="rounded-md shadow-lg p-2 flex flex-col w-[90%] lg:w-[350px] gap-2 border border-primary border-opacity-70">
                <span className="bg-[#1F4B43] text-white rounded-full p-2 uppercase text-xs w-fit">{status}</span>
                <img src={imageUrl} alt="" className="w-full self-center"/>
                <div className="flex flex-col items-start gap-3">
                    <p className="font-bold text-sm">{title}</p>
                    <p className="font-semibold">${price}</p>
                </div>
                {/* <p>{location}</p> */}
                <div className="flex items-center justify-between ">
                    <span>Beds: {beds}</span>
                    <span>Baths: {baths}</span>
                </div>
            </div>
        </>
    );
}

export default FeaturedDeals;