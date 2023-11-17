import PropTypes from 'prop-types';
import { useEffect } from 'react';

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
          <div>
              <h1>Error: {errorCode}</h1>
              <p>Status: {errorStatusText}</p>
              <p>Message: {errorMessage}</p>
          </div>
        )
      }) ()
    ) : (
      <div>
        <h1>Oops! Something went wrong</h1>
        <p>
          Error code: 404
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
//           Error code: 404
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