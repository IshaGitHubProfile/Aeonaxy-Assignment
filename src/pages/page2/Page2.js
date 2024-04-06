import React from 'react';
import Button from '../../components/button/Button';
import ImageText from '../../components/imageText/ImageText';
import graph from '../../assets/graph.webp'
import explore from '../../assets/explore.jpg';
import foundation from '../../assets/foundation.jpg';
import brain from '../../assets/brain.jpg';
import some from '../../assets/some.webp';
import './index.css';

const Page2 = () => {
    return (
        <div>
            <h1 className='heading'>Which are you most interested in?</h1>
            <p className='para'>Choose just one. This will us get you started (but won't limit your experience).</p>
            <ImageText imageUrl={graph} text="Learning specific skills to advance my career" next="/page3"/>
            <ImageText imageUrl={explore} text="Exploring new topics I'm interested in" next="/page3"/>
            <ImageText imageUrl={foundation} text="Refreshing my math foundations" next="/page3"/>
            <ImageText imageUrl={brain} text="Something else" next="/page3"/>
            <ImageText imageUrl={some} text="Teacher" next="/page3"/>
            <Button link="/page3" />
        </div>
    )
}
export default Page2;