import React, { Children } from 'react';
import { Link } from 'react-router-dom';

import './Techstack.css';


function TechIcon(props) 
{

  return (
    <>
      <li className='tech__item'>
        
        <Link className='tech__item__link' to={props.path} >
         
          {/* <FaPython size={200} color='black'/> */}

          <figure className='tech__item__pic-wrap' data-category={props.label} />
            
            {props.data}

          <div className='tech__item__info'>

            <h5 className='tech__item__text'> 

              {props.text} 
              
            </h5>

          </div>

        </Link>
      </li>
    </>
  );
}

export default TechIcon;
