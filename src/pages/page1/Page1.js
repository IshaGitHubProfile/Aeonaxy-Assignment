import React from 'react';
import Button from '../../components/button/Button';
import ImageText from '../../components/imageText/ImageText';
import student from '../../assets/student.jpg'
import professional from '../../assets/professional.png';
import parent from '../../assets/parent.jpg';
import learner from '../../assets/learner.png';
import teacher from '../../assets/teacher.png';
import other from '../../assets/other.png'
import "./index.css";

const Page1 = () => {
    return (
        <div className='pg1'>
            <h1 className='heading'>What describes you best?</h1>
            <div className='para'>This will help us personalize your experience</div>
            <ImageText imageUrl={student} text={<><span style={{fontWeight: 'bold' }}>Student</span> or soon to be enrolled</>} next="/page2"/>
            <ImageText imageUrl={professional} text={<><span style={{fontWeight: 'bold'}}>Professional</span> pursuing a career</>} next="/page2"/>
            <ImageText imageUrl={parent} text={<><span style={{fontWeight: 'bold'}}>Parent</span> of a school-age child</>} next="/page2"/>
            <ImageText imageUrl={learner} text={<><span style={{fontWeight: 'bold'}}>Lifelong Learner</span></>} next="/page2"/>
            <ImageText imageUrl={teacher} text={<><span style={{fontWeight: 'bold'}}>Teacher</span></>}  next="/page2"/>
            <ImageText imageUrl={other} text={<><span style={{fontWeight: 'bold'}}>Other</span></>} next="/page2"/>
            <Button link="/page2" />
        </div>
    )
}
export default Page1;