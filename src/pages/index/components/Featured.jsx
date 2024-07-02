import { useState, useEffect, useContext } from "react";
import stateContext from "../../../context/StateContext";
import FeaturedDeals from '../components/FeaturedComps/card';
import walker from '../../../assets/loaders/1474.gif';
import axios from "axios";
function Recommend() {
    const [ loading, setIsLoading] = useState(false);
    const [featuredHome, setFeaturedHome] = useState([]);
    const {searchStatus} = useContext(stateContext);
    const options = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/properties/list',
        params: {
            locationExternalIDs: '5002,6020',
            purpose: `for-${searchStatus}`,
            hitsPerPage: '3',
            page: '0',
            lang: 'en',
            sort: 'city-level-score',
            rentFrequency: 'monthly',
            categoryExternalID: '4'
        },
        headers: {
            'x-rapidapi-key': '788d4c2c7cmsh6d917adc023661ep1519b7jsn94278f9cec63',
            'x-rapidapi-host': 'bayut.p.rapidapi.com'
        }
        };
    async function showFeaturedHomes(){
            try {
            setIsLoading(true)
            const response = await axios.request(options);
            const {hits} = response.data;
            if(hits){
                const featuredProperty = hits.map(hit=>{
                    return (
                        <FeaturedDeals 
                        key={hit?.externalID}
                        status={hit?.purpose}
                        imageUrl={hit?.coverPhoto?.url}
                        title = {hit?.title}
                        price = {hit?.price}
                        beds = {hit?.rooms}
                        baths = {hit?.baths}
                        />
                    )
                })
                setFeaturedHome(featuredProperty)
                setIsLoading(false)
            }
            } catch (error) {
                console.error(error);
            }
    }
    // useEffect(()=>{
    //     showFeaturedHomes();
    // }, [searchStatus])
    return ( 
        <>
            <div className="w-full bg-[#F6F8FA] p-6 flex flex-col justify-center items-center">
                <div>
                    <h2 className="font-bold text-2xl lg:text-4xl capitalize text-center">Homes For You</h2>
                    <p className="text-center text-sm md:text-base capitalize mb-4">based on your view history</p>
                    {loading? <div className="w-full flex flex-col justify-center items-center min-h-[300px]">
                        <img src={walker} alt="" />
                        <span className="text-[#1F4B43]">...loading</span>
                    </div>: <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {featuredHome}
                    </div>}
                </div>
            </div>
        </>
    );
}

export default Recommend;