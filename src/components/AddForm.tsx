import '../styles/AddForm.scss';

interface AddFormProps{
    onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const AddForm: React.FC<AddFormProps> = ({ onSubmit }) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
        if(e.target.value !== "") {
            e.target.nextElementSibling?.classList.add('btn-enabled');
            e.target.nextElementSibling?.classList.remove('btn-disabled')
        } else {
            e.target.nextElementSibling?.classList.add('btn-disabled');
            e.target.nextElementSibling?.classList.remove('btn-enabled')
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <p>Don't forget to buy:</p>
            <input type="text" name="formInput" required onChange={handleChange}/>
            <button type="submit" name="formBtn" className='btn-disabled'>ADD</button>
        </form>
    );
};

export default AddForm;