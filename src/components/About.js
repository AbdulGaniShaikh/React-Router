import React from "react";
import Modal from "./Modal";

const About = (props)=>{
    return(
        <div>
            {/* <Modal/> */}
            <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
                <h3 className="ui header">About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nulla voluptate vitae doloribus, quam facilis. Nobis obcaecati sit consequatur at culpa ipsam repudiandae minus vitae illo, quidem rerum magni eaque?</p>
            </div>
        </div>
    )
}

export default About;