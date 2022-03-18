import { useState } from 'react';

function PlayersInput() {

    const onClickSubmit = () => {
        setFormData({
            number: formData.number,
            name: formData.name,
        });
    };

    const [formData, setFormData] = useState({
        number: '',
        name: '',
    });

    const fieldChangeHandle = (evt) => {
        const { name, value } = evt.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <div className="form">
                <input
                    id="number"
                    name="number"
                    placeholder="Введите количество игроков"
                    type="number"
                    onChange={fieldChangeHandle} />
                <button
                    type="submit"
                    onClick={onClickSubmit}
                >Отправить</button>
            </div>
            <div className="form">
                <input
                    id="name"
                    name="name"
                    placeholder="Введите имя"
                    value={formData.name}
                    onChange={fieldChangeHandle}
                />
                <button
                    type="submit"
                    onClick={onClickSubmit}
                >Отправить</button>
            </div>
        </div>
    );
}

export default PlayersInput;
