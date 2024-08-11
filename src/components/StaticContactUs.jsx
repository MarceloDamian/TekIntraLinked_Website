import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';


function StaticContactUs() 
{    
  return(
    <div className="FormtoSend">
      
      <table>
        <td className='Move-LeftTxtbox'>
          <h1>Contact:</h1>
        </td>
      </table>
      <h2>Thank you. Someone will be with you shortly. </h2>
        <Link to='/' className='btn-mobile'> 
            <button> Back to Homepage </button>
        </Link>
    </div>

  );
}

export default StaticContactUs;

