import React, { useState } from 'react';
import './Course.css';
import fakeData from '../../fakeData/course.json';
import CourseItem from '../CourseItem/CourseItem';
import Cart from '../Cart/Cart';

const Course = () => {
    //console.log(fakeData);
    const totalCourse = fakeData.slice(0, 10);
    const [course, setCourse] = useState(totalCourse);
    const [cart, setCart] = useState([]);

    const handleAddEnroll = (course)=>{
       const newCart = [...cart, course];
       setCart(newCart);
    }

    //console.log(course);
    
    return (
        <div className="row-col-md-12 course-container">
            <div className="courses col-md-10">
                {
                    course.map(data => <CourseItem course={data} handleAddEnroll={handleAddEnroll}></CourseItem>)
                }
             </div>
             <div className="cart col-md-2">
                <Cart cart={cart}></Cart>
            </div>
       </div>
             
    );
};

export default Course;