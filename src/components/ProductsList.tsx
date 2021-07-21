import '../styles/ProductsList.scss';
import Loader from './Loader';

interface ProductsListProps {
    onClick: any;
    items: {key: string, value: string}[];
    status: string
}

const ProductsList: React.FC<ProductsListProps> = ({ onClick, items, status }) => {

    if(items.length === 0) {
        return (
            status === 'pending'
            ? <Loader/>
            :<div className='post'>
                <p>Your list is empty!</p>
             </div>
        )
    }
    return (
        <>
            {status === 'pending' ? <Loader/> : ''}
            <ol>
                {
                    items.map(item => {
                        return (
                            <li key={item.key} data-key={item.key} data-value={item.value}> 
                                <p>
                                    <input type="checkbox" name={item.value} id={item.value} onClick={onClick}/>
                                    {item.value}
                                </p>
                                <div className="edit-tools">
                                    <i className="bi bi-pencil" onClick={onClick} id="edit"></i>
                                    <i className="bi bi-trash" onClick={onClick} id="delete"></i>
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
        </>
    );
};

export default ProductsList;
