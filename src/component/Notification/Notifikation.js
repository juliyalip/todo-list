import './notifikation.css'

const Notifikation = ({ message, type='' }) => (
    <p role="alert"  className={`base base-${type}`}>{message}</p>
);

export default Notifikation;