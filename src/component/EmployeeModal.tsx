import { IEmployee } from "./Employee.type";

type Props = {
    data: IEmployee
    onClose: () => void
}

const Modal = (prop: Props) => {

    const {onClose, data} = prop;

    return (
        <div className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <button onClick={onClose} className="w3-button w3-display-topright">&times;</button>
                    <p>{data.firstName}</p>
                    <p>{data.lastName}</p>
                </div>
            </div>
        </div>
    );
};



export default Modal;
