import '../styles/EditPanel.scss';

interface EditPanelProps {
    isOpen: boolean;
    action: string;
    cancelClick: () => void;
    deleteClick: () => void;
    editClick: () => void;
}

const EditPanel: React.FC<EditPanelProps> = ({ isOpen, action, cancelClick, deleteClick, editClick }) => {

    const message: string = 'Are you sure?';
    const className = isOpen ? "edit-panel-open" : "edit-panel-close"; 

    if (action === 'Delete') {
        return (
            <div className={className}>
                <div className="alert-box">
                    <p>{message}</p>
                    <div className="buttons">
                        <button className="btn-cancel" onClick={cancelClick}>CANCEL</button>
                        <button className="btn-delete" onClick={deleteClick}>DELETE</button>
                    </div>
                </div>
            </div>   
            );
    } 
    return (
        <div className={className}>
            <div className="alert-box">
                <p>Edit this item:</p>
                <input type="text" />
                <div className="buttons">
                    <button className="btn-edit" onClick={editClick}>EDIT</button>
                    <button className="btn-cancel" onClick={cancelClick}>CANCEL</button>
                </div>
            </div>
        </div>   
        );
};

export default EditPanel;