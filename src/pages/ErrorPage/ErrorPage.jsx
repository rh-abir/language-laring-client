
import { Link } from 'react-router-dom';
import img from '../../assets/img/image404/error.png'

const ErrorPage = () => {
    return (
        <div className='mt-40'>
            <img className='w-1/2 mx-auto' src={img} alt="" />
            <button className='btn btn-outline btn-primary mx-auto block'><Link to='/'>Back to Home</Link></button>
        </div>
    );
};

export default ErrorPage;