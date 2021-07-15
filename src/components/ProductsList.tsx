import '../styles/ProductsList.scss';

interface ProductsListProps {
    editItemClick: () => void;
    deleteItemClick: () => void;
}

const ProductsList: React.FC<ProductsListProps> = ({ editItemClick, deleteItemClick }) => {

    

    return (
        
        <ol>
            <li>Something 
                <div className="edit-tools">
                    <i className="bi bi-pencil" onClick={editItemClick}></i>
                    <i className="bi bi-trash" onClick={deleteItemClick}></i>
                </div>
            </li>
        </ol>
        
    );
};

export default ProductsList;