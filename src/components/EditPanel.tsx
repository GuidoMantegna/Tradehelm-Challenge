import '../styles/EditPanel.scss';
import Loader from './Loader';

interface EditPanelProps {
    isOpen: boolean;
    action: string;
    onClick(e: React.MouseEvent<HTMLButtonElement>): void;
    currentItem: {key: string, value: string};
    status: string;
}

const EditPanel: React.FC<EditPanelProps> = ({ isOpen, action, onClick, currentItem, status }) => {

    const className = isOpen ? "edit-panel-open" : "edit-panel-close"; 

    if (action === 'Delete') {
        return (
            <div className={className}>
                <div className="alert-box">
                    <p>Are you sure you want to delete <b>{currentItem.value}?</b></p>
                    {
                    status === 'pending'
                    ? <Loader/>
                    :<div className="buttons">
                        <button className="btn-cancel" onClick={onClick}>CANCEL</button>
                        <button className="btn-delete" onClick={onClick}>DELETE</button>
                    </div>
                    }
                </div>
            </div>   
        );
    } 
    return (
        <div className={className}>
            <div className="alert-box">
                <p>Edit this item:</p>
                <input type="text" id="editInput" defaultValue={currentItem.value}/>
                {
                status === 'pending'
                ? <Loader/>
                :<div className="buttons">
                    <button className="btn-save" onClick={onClick}>SAVE</button>
                    <button className="btn-cancel" onClick={onClick}>CANCEL</button>
                </div>    
                }
            </div>
        </div>   
    )
};

export default EditPanel;