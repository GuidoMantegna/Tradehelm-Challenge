import '../styles/AddForm.scss'
import { useRef } from 'react';

interface AddFormProps{
    onSubmit: any;
}

const AddForm: React.FC<AddFormProps> = ({ onSubmit }) => {
    const inputRef = useRef();

    return (
        <form onSubmit={onSubmit}>
            <p>Don't forget to buy:</p>
            <input type="text" />
            <button type="submit">ADD</button>
        </form>
    );
};

export default AddForm;