import img1 from '../../../assets/imgs/cities/NY.png';
import img2 from '../../../assets/imgs/cities/CHI.png';
import img3 from '../../../assets/imgs/cities/LA.png';
import img4 from '../../../assets/imgs/cities/SAN.png'
import img5 from '../../../assets/imgs/cities/FlO.png'
import img6 from '../../../assets/imgs/cities/MIAMI.png'
function City() {
    return ( 
        <>
            <div className="w-full flex flex-col justify-center items-center p-4 mt-4">
                <div className="flex flex-col gap-4">
                    <div className="text-center">
                        <h2 className="font-bold text-3xl">Find Properties in These Cities</h2>
                        <p className="text-sm">See the top assets from these locations</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-4 md:w-[90%] mx-auto">
                        <img src={img1} alt="" className='md:col-span-2'/>
                        <img src={img2} alt="" className=''/>
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" className='md:col-span-2'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default City;