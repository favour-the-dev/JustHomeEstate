import WhyChoose from './components/whyChoose';
import City from './components/City';
import Recommend from './components/Featured';
import Hero from './components/Hero';
function Home() {
    return ( 
        <>
            <div className='h-screen'>
                <Hero/>
                <Recommend/>
                <City/>
                <WhyChoose/>
            </div>
        </>
    );
}

export default Home;