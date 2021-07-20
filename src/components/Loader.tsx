import '../styles/Loader.scss';
import loader from '../assets/imgs/loader.gif';

const Loader = () => {
    return (
        <div>
            <img src={loader} alt="loader" id="loader" />
        </div>
    );
};

export default Loader;