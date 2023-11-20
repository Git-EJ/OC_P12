import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

/** 
  *
  * @param {object} errorProps
  * @returns {JSX.Element}
  * @description This component is used to display the error page.
**/

const Error = ({ errorProps }) => {

  useEffect(() => {
    console.log('%cerrorPropsERROR', 'color:lime', errorProps)
  }, [errorProps])
  
  // TODO good practice?
  // immediately invoked arrow function (() => {})(), create scope for declaration blocks, allow conditional logic operations
  // limits the scope of variables
  return (
    errorProps ? (
      (() => { 
        let { status: errorCode , statusText: errorStatusText, message: errorMessage } = errorProps;
        errorCode = errorCode ?? '404'
        errorStatusText = errorStatusText ?? 'no Status'
        errorMessage = errorMessage ?? 'no Message'

        return (
          <div className='error_container'>
              <h1 className='error_code'>{errorCode}</h1>
              <NavLink to='/' className='error_homebutton navlink'>Retour à la page d&#39;accueil</NavLink>
              <p className='error_text'>Status: {errorStatusText}</p>
              <p className='error_text'>Message: {errorMessage}</p>
          </div>
        )
      }) ()
    ) : (
      <div>
        <h1>Oops! Something went wrong</h1>
        <p>
          Error code: {errorProps.status?? '404'}
        </p>
      </div>
    )
  )
}


// const Error = ({ errorProps }) => {

//   useEffect(() => {
//     console.log('%cerrorPropsERROR', 'color:lime', errorProps)
//   }, [errorProps])
  
//   let { status: errorCode , statusText: errorStatusText, message: errorMessage } = errorProps;
//   errorCode = errorCode ?? '404'
//   errorStatusText = errorStatusText ?? 'no Status'
//   errorMessage = errorMessage ?? 'no Message'

//   return (
//     errorProps ? (
//         <div>
//             <h1>Error: {errorCode}</h1>
//             <p>Status: {errorStatusText}</p>
//             <p>Message: {errorMessage}</p>
//         </div>
//     ) : (
//       <div>
//         <h1>Oops! Something went wrong</h1>
//         <p>
//           Error code: {errorCode}
//         </p>
//       </div>
//     )
//   )
// }

Error.propTypes = { 
  errorProps: PropTypes.shape({
    status: PropTypes.number,
    statusText: PropTypes.string,
    message: PropTypes.string,
  }),
}


export default Error