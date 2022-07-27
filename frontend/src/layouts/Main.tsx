import GameListPage from 'pages/GameListPage';
import './Main.sass';
import GameDetailPage from 'pages/GameDetailPage';
import { Routes, Route } from 'react-router-dom';

export default function Main() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<GameListPage/>}/>
          <Route path="/:id" element={<GameDetailPage/>}/>
        </Routes>
      </main>
    );
}
