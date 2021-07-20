
import './styles/App.scss';
import React, { useState, useEffect } from 'react';
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

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [status, setSatus] = useState<string>('idle');
  const [action, setAction] = useState("");
  const [items, setItems] = useState<Items[]>(getItemsFromStorage());
  const [currentItem, setCurrentItem] = useState<Items>({key:"", value:""});

  const editPanelClicks = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as typeof e.target & {
      editInput : { value:string },
      className : string, 
    };

    const editInput = document.getElementById('editInput') as HTMLInputElement;
    const action = target.className;

    if (action === 'btn-save') {
      localStorage.setItem(currentItem.key, editInput.value)
      setItems(() => getItemsFromStorage())
    }
    if (action === 'btn-delete') {
      setSatus('pending');
      setIsOpen(false);
      setTimeout(() => {
        localStorage.removeItem(currentItem.key)
        setItems(() => getItemsFromStorage())
        setSatus('resolved')
      }, 750)
    }


  }

  const productsListClicks = (e: Event): void => {
    const target = e.target as typeof e.target & {
      offsetParent : { dataset: {key: string, value: string} },
      id: string;
    };
    const action = target.id;
    const key = target.offsetParent.dataset.key;
    const value = target.offsetParent.dataset.value;

    if (action === "edit") {
      setCurrentItem({key, value});
      setAction('Edit');
    } else {
      setCurrentItem({key, value});
      setAction("Delete");
    }
    setIsOpen(true)
    
  }
  
  const keyGenerator = (word: string) => {
    let i = 0;
    let wordToNum = "";
    while(i < word.length) {
      wordToNum += word.charCodeAt(i);
      i++
    }

    return wordToNum
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      formInput : { value:string } 
    };
    let inputValue = target.formInput.value;

    setSatus('pending');

    setTimeout(() => {
      localStorage.setItem(keyGenerator(inputValue), inputValue);
      setItems(() => getItemsFromStorage())
      setSatus('resolved')
    }, 750)



  }

  useEffect(() => {
    // setItems(() => getItemsFromStorage())
  }, )

  return (
    <>
      <h1>My market list</h1>
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
      />
    </>
  );

}

export default App;
