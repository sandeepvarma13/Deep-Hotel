import React from 'react';
import Informations from '../main';
import Experience from './Experience';
import Cuisine from './Cuisine';
import Foods from '../food';

function createExperience(experienceTerm){



  return(<Experience
     key={experienceTerm.id}
     imgSrc={experienceTerm.imgSrc}
     mainTitle={experienceTerm.mainTitle}
     description={experienceTerm.description}
     offer={experienceTerm.offer}
  
  />

  )
}

function createCuisine(cuisineTerm){
  
  return(<Cuisine
    key={cuisineTerm.id}
    imgSrc={cuisineTerm.imgSrc}
    mainTitle={cuisineTerm.mainTitle}
    description={cuisineTerm.description}
    offer={cuisineTerm.offer}
    operation={cuisineTerm.operation}
 
 />

 )
}

function Main(){
    return(
        <section id="pages" className='main container section'>



            <div className="secTitle">
                <h3 className="title">
                  LUXUARY ACCOMODATION
                </h3>
                </div>
                <div className='secContent grid'>
               {Informations.map(createExperience)}
           </div>

              <div className="secTitle2">
                <h3 className="title">
                 Fine Dine
                </h3>
                <span></span>
                </div>
           <div className='secContent grid'>
            {Foods.map(createCuisine)}
           </div>


        </section>
    )
}

export default Main;