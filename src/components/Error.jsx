import PropTypes from 'prop-types';

const Error = ({ text }) => {
  return <p className='error red darken-4'>{text}</p>;
};

Error.protoTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;
