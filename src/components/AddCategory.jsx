import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length<=1) return;
        // setCategories( categories => [inputValue, ...categories] );
        onNewCategory( inputValue.trim().toLowerCase() );
        setInputValue('');
    }

    return (
        <form onSubmit={(event)=>{onSubmit(event)}}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
