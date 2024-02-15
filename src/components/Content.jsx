import React from "react";
import img1 from '../Assests/img1.jpg';
import img2 from '../Assests/img2.jpg';
import img3 from  '../Assests/img3.jpg';
import img4 from '../Assests/img4.jpg';

function Content(){
    return(
        <section id="features" className= 'hero'>
            <div className="secTitle">
                <h3 className="title">
                 The Deep Experience
                </h3>
                </div>
           <div className="content-section">
            <div className="content-item">
        
           <div className="content-cont">
            <div className='content row'>
        
                <div className="imgDiv">
                    <img src={img1} alt='design'></img>
                    </div>
                
            
              <div className="contentInfo">
              <h4 className="contentTitle">
              Design & Detailing
            </h4>
            
                 <div className="contentDesc">
            <p>The hotels architecture pays tribute to the glorious dynasty it is named after, which crafted the golden age of Telugu history. 
                The furnishings and artefacts subtly echo the artistic and creative triumphs of that period. Sculptures in stone are placed in positions of prominence, which commemorate the ancient traditions in this art form. 
                The soft furnishings frequently feature the renowned ikat weave that Telangana is famous for. The priceless pieces of art that adorn the walls heighten the cultural experience for each guest.
                </p>
               </div>
               <div className="content-gap"></div>
              </div>
           </div>
           </div>
          
           
           <div className="content-cont">
           <div className='content row-reverse'>
              
                <div className="imgDiv">
                    <img src={img2} alt='design'></img>
                    </div>
            
              <div className="contentInfo">
              <h4 className="contentTitle">
              Sustainability
            </h4>
    
                 <div className="contentDesc">
            <p>Intelligent policies and practices of environmental stewardship have been built into every aspect of the hotels operations. 
                Energy efficiency is optimized, water is recycled and reused to prevent wastage. 
                Solid waste is recycled, and a sizeable proportion of ingredients are sourced locally. This  Platinum rated hotel consumes much less energy than the benchmark specified by the EPA, USA for large sized luxury hotels. 
                </p>
               </div>
               <div className="content-gap"></div>
              </div>
           </div>
           </div>
         
           <div className="content-cont">
           <div className='content row'>
              
                <div className="imgDiv">
                    <img src={img3} alt='design'></img>
                </div>
        
              <div className="contentInfo">
              <h4 className="contentTitle">
              Cuisine

            </h4>
           
    
                 <div className="contentDesc">
            <p>The hotel has much to offer the adventurous gastronome, with its collection of fine dining destinations. 
                Kebabs & Kurries offers delicacies from the clay ovens of the North-West Frontier, the iron tandoors of Hyderabad and the slowly simmered delights of Awadh.
                 Dakshin throws open the kitchens of peninsular India, while the Deccan Pavilion presents culinary delights from the region, nation and the world.
                 The lounge bar invites guests to sample its superb collection of beverages.
                </p>
               </div>
               
               <div className="content-gap"></div>
              </div>
              
           </div>
           </div>
   
           <div className="content-cont">
           <div className='content row-reverse'>
             
                <div className="imgDiv">
                    <img src={img4} alt='design'></img>
              </div>
              <div className="contentInfo">
              <h4 className="contentTitle">
              Wellbeing

            </h4>
            
    
                 <div className="contentDesc">
            <p>The hotel invites its guests to absorb the manifold health benefits on offer at Kaya Kalp-the Spa. 
                In its treatment rooms, trained therapists follow the tenets and practices described in ancient Indian scriptures and utilise natural products to relax and rejuvenate their guests. 
                The hotel facilitates the pursuit of holistic well-being and fitness by offering a conducive sleep environment, healthy cuisine offerings, personalized fitness regimes, and exclusive amenities and facilities.
                </p>
               </div>
               <div className="content-gap"></div>
              </div>
           </div>
           </div>
           </div>
           </div>

           
    </section>

    
    )
}

export default Content;