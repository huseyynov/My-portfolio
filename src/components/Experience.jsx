import React from 'react'

const Experience = () => {
  return (
    <div className='experience'>
        <div className="d-flex justify-content-center">
            <h1>Experience</h1>
        </div>
        <div className="container experience-wrapper">
          
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>2019-2023</h3>
                <p>Azerbaijan State Oil & Industry University</p>
              </div>
            </div> 

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>2021-2022</h3>
                <p>It Brains Academy</p>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>2021-2023</h3>
                <p>Microsoft Technology Associate</p>
              </div>      
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>2021-2022</h3>
                <p>Internship Program</p>
              </div>      
            </div>
        </div>   
    </div>  
  )
}

export default Experience