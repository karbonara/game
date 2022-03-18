import { useState } from 'react';

function Table() {

    const [prize1, setPrize1] = useState();
    const [prize2, setPrize2] = useState();

    const items = (['1', '2', '3', '4', '5']);
    const random = (Math.floor(Math.random() * items.length) + 1);

    const handleClickTable1 = () => {
        setPrize1(random);
    };

    const handleClickTable2 = () => {
        setPrize2(random);
    };

    return (
        <>
            <table border={1}>
                <tbody>
                    <tr>
                        <td onClick={handleClickTable1}>{prize1}</td>
                    </tr>
                    <tr>
                        <td onClick={handleClickTable2}>{prize2}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Table;
