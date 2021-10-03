import s from './todoList.module.css';
import { ReactComponent as Bin } from '../../icon/bin.svg';
import {ReactComponent as Pen} from '../../icon/pencil2.svg'


const TodoList = ({ items, onDelete, updateTodo, updateCheckbox }) => (


    <div>
        
            <ul className={s.list}>
        
        {items.map(({ id, text, complited }) => (
            <li key={id} className={s.item}>
                <p>{text}</p>
                <input type="checkbox" 
                    checked={complited}
                    onChange={() => { updateCheckbox(id) }} />
               <div>
                 <button type="button" onClick={() => { updateTodo(id) }}><Pen width="15" height="15" /></button>
                <button type="button" onClick={() => { onDelete(id) }}>
                    <Bin width="15" height="15" />
                </button>
                </div>
              
               
            </li>
        ))}
    </ul>
</div>
);

export default TodoList;