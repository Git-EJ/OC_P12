import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/** 
  *
  * @param {object} errorProps
  * @returns {JSX.Element}
  * @description This component is used to display the error page.
**/

const Error = ({ errorProps }) => {
  const { status: errorCode , statusText: errorStatusText, message: errorMessage } = errorProps || 
  {
    status: '404',
    statusText: 'no Status',
    message: 'Oops! Something went wrong',
  };
  

  return (
    <div className='error_container'>
        <h1 className='error_code'>{errorCode}</h1>
        <NavLink to='/' className='error_homebutton navlink'>Retour à la page d&#39;accueil</NavLink>
        <p className='error_text'>Status: {errorStatusText}</p>
        <p className='error_text'>Message: {errorMessage}</p>
    </div>
  )
}

Error.propTypes = { 
  errorProps: PropTypes.shape({
    status: PropTypes.number,
    statusText: PropTypes.string,
    message: PropTypes.string,
  }),
}


export default Error