import React, {useState, useRef} from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    const ref = useRef<HTMLInputElement>(null)
    /*const [title, setTitle] = useState<string>('')    
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    } */  
    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            /* setTitle("") */
        } 
    }
    return (
        <div className="input-field mt2">
            <input 
                /*value={title} */
                ref={ref}
                type="text" 
                /*onChange={changeHandler}*/
                id="title" 
                onKeyPress={keyPressHandler}
                placeholder="Введите название дела"/>
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
}