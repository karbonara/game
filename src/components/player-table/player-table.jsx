function PlayerTable() {

    const players = [
        { name: 'Куст', points: '54' },
        { name: 'Кирилл', points: '29' },
    ];

    return (
        <div>
            <div>
                <div>
                    {players.map((names, index) => (
                        <p key={index}>Имя {names.name} Баллы {names.points}</p>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default PlayerTable;
