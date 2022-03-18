import PlayersInput from '../players-input/players-input';
import PlayerTable from '../player-table/player-table'
import Table from '../table/table';
import '../../App.css';

function App() {
    return (
        <div className='main'>
            <div className='players'>
                <PlayersInput />
                <PlayerTable />
            </div>
            <div className='table'>
                <Table />
            </div>
            <div className='players'>
                <PlayersInput />
                <PlayerTable />
            </div>
        </div>
    );
}

export default App;
