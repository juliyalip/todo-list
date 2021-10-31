import PropTypes from 'prop-types'
import s from './form.module.css';
import Notification from '../Notification/Notifikation'


const Form = ({ value, onChangeInput, editItem, onSubmit, notification }) => (
    <form onSubmit={onSubmit}>
        <div className={s.container}>
            {notification && <Notification message="fali is empty"/>}
        <label >Enter you task
                </label>
            <textarea rows="5" cols="25"  name="inputForm" value={value} onChange={onChangeInput} ></textarea>
            <button type="submit" className={s.btn} style={{backgroundColor: editItem? 'green': 'darkorange'}} >
                {editItem ? 'update todo' : 'add todo'}</button>
    </div>
    </form>)
    ;

Form.propTypes = {
    value: PropTypes.string,
    onChangeInput: PropTypes.func.isRequired,
    editItem: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
    }

export default Form