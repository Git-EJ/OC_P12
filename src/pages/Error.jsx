import PropTypes from 'prop-types';

const Error = ({errorCode}) => {
 errorCode = errorCode ?? '404'


  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <p>
        Error code: {errorCode}
      </p>
    </div>
  )
}

Error.propTypes = { 
  errorCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Error