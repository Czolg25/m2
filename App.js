import { useState, useEffect } from 'react';
import Board from './components/Board';
import Board2 from './components/Board2';
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [color, setColor] = useState('');

    const fetchData = async () => {
        let data = await fetch('http://localhost:8080/');
        data = await data.json();
        setData(data.boards);
        setColor(data.boards[0].color);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onChange = e => {
        setColor(e.target.value);
    }

    const [saved, setSaved] = useState([]);
    const save = board => {
        setSaved([...saved, board]);
    }

    const onDelete = id => {
        const tmp = saved;
        tmp.splice(id, 1);
        setSaved([...tmp]);
    }

    return (
        <div className="App">
            <h1>Boards</h1>
            {data.map(board => (
                <label key={board.id+board.color} className="radio">
                    <input type="radio" value={board.color} name="color" onChange={onChange} checked={color === board.color} />
                    {board.color}
                </label>
            ))}
            <div className="boards">
                {data.map(board => <Board key={board.id} board={board} itemColor={color} save={save} />)}
            </div>

            <div className="savedBoards">
                {saved.map((board, id) => <Board2 key={id} delete={() => onDelete(id)} items={board} />)}
            </div>
        </div>
    );
}

export default App;
