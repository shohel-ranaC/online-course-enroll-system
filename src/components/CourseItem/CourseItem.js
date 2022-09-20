import React from 'react';
import './CourseItem.css';
import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';


const CourseItem = (props) => {
    //console.log(props.course);
    const {subject, instructor, price} = props.course;
    return (
        <div className=" course-item" >
            <div className="course">
                <h3>{subject}</h3>
                <p><h5>Instructor: <strong> {instructor}</strong></h5>
                    Some quick example text to build on the card title and make up the
                     bulk of the card's content.</p>
                     <p className=""><strong>Price: {price}TK</strong></p>
                <div className='text-center'>
                  <Button  onClick={() => props.handleAddEnroll(props.course)} className="btn btn-primary btn-lg">Enroll Now</Button>
                </div>   
            </div> 
     </div>

    //     <div className="card-container">
    //     <Card style={{ width: '18rem' }} className="card-item" >
    //     {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    //     <Card.Body className="card">
    //       <Card.Title><h3>{subject}</h3></Card.Title>
    //       <Card.Text> <h5>Instructor: <strong> {instructor}</strong></h5>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //       <p><strong>Price: {price}TK</strong></p>
    //       <Button variant="primary">Enroll Now</Button>
    //     </Card.Body>
    //   </Card>
    //   </div>
    );
     
};

export default CourseItem;