import Agent from './components/Agent';
import News from './components/news';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Local from './components/Local';
import BestProperties from './components/Best';
import WhyChoose from './components/whyChoose';
import City from './components/City';
import Recommend from './components/Featured';
import Hero from './components/Hero';
import Faq from './components/FAQ';
function Home() {
    return ( 
        <>
            <div className='h-screen'>
                <Hero/>
                <Recommend/>
                <City/>
                <WhyChoose/>
                <BestProperties/>
                <Local/>
                <Reviews/>
                <Team/>
                <News/>
                <Agent/>
                <Faq/>
            </div>
        </>
    );
}

export default Home;