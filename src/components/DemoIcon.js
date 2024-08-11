

import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import './Demo.css';



function DemoIcon(props) 
{
  return (
    <>

      <li className='Demo__item'>
        
        <Link className='Demo__item__link' to={props.path} >
         
          <figure className='Demo__item__pic-wrap' data-category={props.label}/>
            
            {props.data}
              {/* <img
                  className='Demo__item__img'
                  // alt='Travel Image'
                  src="images/img-1.jpg"
                  // src= {props.src}
                  // src={<FaPython/>}
              />  */}
            {/* </figure> */}




          
          <div className='Demo__item__info'>

            <h5 className='Demo__item__text'>{props.text}</h5>

          </div>

        </Link>
      </li>
    </>
  );
}

export default DemoIcon;
