import './styles/App.scss';
import React, { useState } from 'react';
// Components
import ProductsList from './components/ProductsList';
import AddForm from './components/AddForm';
import EditPanel from './components/EditPanel';

type Items = {
    key: string;
    value: string;
}

function App(): JSX.Element {

  const getItemsFromStorage = () => {

    const values = Object.entries(localStorage);
    let allItems: {key: string, value: string}[] = [];

    values.forEach(value => {
      allItems.push({key: value[0], value: value[1]})
    })

    return allItems
  };
  const keyGenerator = (word: string) => {
    let i = 0;
    let wordToNum = "";
    while(i < word.length) {
      wordToNum += word.charCodeAt(i);
      i++
    }

    return wordToNum
  }

  const [isOpen, setIsOpen] = useState<boolean>(false),
  [status, setSatus] = useState<string>('idle'),
  [action, setAction] = useState(""),
  [items, setItems] = useState<Items[]>(getItemsFromStorage()),
  [currentItem, setCurrentItem] = useState<Items>({key:"", value:""});

  // EVENT HANDLERS
  // -- FORM SUBMIT --
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      formInput : { value:string },  
    };
    let inputValue = target.formInput.value;

    setSatus('pending');

    setTimeout(() => {
      localStorage.setItem(keyGenerator(inputValue), inputValue);
      setItems(() => getItemsFromStorage())
      setSatus('resolved')
      target.formInput.value = '';
    }, 750);

  }

  // -- EDIT PANEL --
  const editPanelClicks = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as typeof e.target & {
      className : string, 
    };
    const editInput = document.getElementById('editInput') as HTMLInputElement;
    const action = target.className;

    if(action === 'btn-cancel') {
      setIsOpen(false)
    } else {
      setSatus('pending');
      setTimeout(() => {
        if(action === 'btn-save') {localStorage.setItem(currentItem.key, editInput.value)};
        if(action === 'btn-delete') {localStorage.removeItem(currentItem.key)};
        
        setItems(() => getItemsFromStorage());
        setSatus('resolved')
        setIsOpen(false);
      }, 750);
    };
  }

  // -- ITEM EDIT TOOLS -- 
  const productsListClicks = (e: Event): void => {
    const target = e.target as typeof e.target & {
      offsetParent : { dataset: {key: string, value: string} },
      id: string;
    };
    const action = target.id;
    const key = target.offsetParent.dataset.key;
    const value = target.offsetParent.dataset.value;

    setCurrentItem({key, value});
    action === "edit" ? setAction('Edit') : setAction("Delete");
    setIsOpen(true);    
  }

  return (
    <>
      <h1>My market list <i className="bi bi-receipt"></i></h1>
      <AddForm
        onSubmit={handleSubmit}
      />
      <ProductsList
        status={status}
        items={items}
        onClick={productsListClicks}
      />
      <EditPanel 
        isOpen={isOpen}
        action={action} 
        onClick={editPanelClicks}
        currentItem={currentItem}
        status={status}
      />
    </>
  );

}

export default App;
