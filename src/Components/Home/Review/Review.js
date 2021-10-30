import React from 'react';
import img1 from "../../../images/reviwes/img1.jpg"
import img2 from "../../../images/reviwes/img2.jfif"
import img3 from "../../../images/reviwes/img3.jfif"

const Review = () => {
    return (
    
            <div id="review">
            <div className="container-fluid mt-5 mb-5 p-5">
        <div className=" mx-auto mb-5">
        <h1 className="text-secondary mb-5 mt-5" >Reviews</h1>
        <div className="row ">
        <div class="col-lg-4 col-12">
        <img src={img1} class="bd-placeholder-img rounded-circle" width="140" height="140" alt="" />
        <br />
        <h2>mark wiens</h2>
        <p>"I found your service very good in the holiday acquisition process but lacking in the quality of the accommodation".</p>
      </div>
        <div class="col-lg-4 col-12">
        <img src={img2} class="bd-placeholder-img rounded-circle" width="140" height="140" alt="" />
        <br />
        <h2>nadir on the go</h2>
        <p>"Everything went smoothly and we were very happy with the whole experience"</p>
      </div>
        <div class="col-lg-4 col-12">
        <img src={img3} class="bd-placeholder-img rounded-circle" width="140" height="140" alt="" />
        <br />
        <h2>Drew Binsky</h2>
        <p>“Overall good service by Travel Online. Replied e-mails in a timely manner.”</p>
      </div>
        </div>
       
        </div>
        
      </div>
        </div>
     
    );
};

export default Review;