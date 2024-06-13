import { useState, useEffect } from "react";
import FeaturedDeals from '../components/card';
import axios from "axios";
function Recommend() {
    const [ loading, setIsLoading] = useState(false);
    const [featuredHome, setFeaturedHome] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/properties/list',
        params: {
            locationExternalIDs: '5002,6020',
            purpose: 'for-rent',
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
            }
            } catch (error) {
                console.error(error);
            }
    }
    useEffect(()=>{
        showFeaturedHomes();
    }, [])
    return ( 
        <>
            <div className="w-full bg-[#F6F8FA] p-4 lg:min-h-[50dvh] flex flex-col justify-center items-center">
                <div>
                    <h2 className="font-bold text-2xl lg:text-4xl capitalize text-center">Homes For You</h2>
                    <p className="text-center text-sm md:text-base capitalize mb-4">based on your view history</p>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {featuredHome}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recommend;