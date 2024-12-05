import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <Spinner animation="grow"  />
    </div>
  );
}

export default Loading;