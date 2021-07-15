
import './styles/App.scss';
import { useState } from 'react';
// Components
import ProductsList from './components/ProductsList';
import AddForm from './components/AddForm';
import EditPanel from './components/EditPanel';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState("");

  const handleCancelClick = () => {
    console.log('cancel')
    setIsOpen(false)
  }
  const handleEditClick = () => {
    console.log('edit')
    setIsOpen(false)
  }
  const handleDeleteClick = () => {
    console.log('delete')
    setIsOpen(false)
  }

  const handleDeleteItemClick = () => {
    console.log('delete item')
    setIsOpen(true)
    setAction("Delete")
  }
  const handleEditItemClick = () => {
    console.log('edit item')
    setIsOpen(true)
    setAction("Edit")
  }
  const handleSubmit = (e: Event) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <>
    <h1>My market list</h1>
    <AddForm
      onSubmit={handleSubmit}
    />
    <ProductsList
      deleteItemClick={handleDeleteItemClick}
      editItemClick={handleEditItemClick}
    />
    <EditPanel 
      isOpen={isOpen}
      action={action} 
      cancelClick={handleCancelClick}
      editClick={handleEditClick}
      deleteClick={handleDeleteClick}
      />
    </>
  );

}

export default App;
