import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PostList from './pages/PostList';
import CreateJournal from './pages/CreateJournal';
import JournalList from './pages/JournalList';
import CreateNote from './pages/CreateNote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/journals" element={<JournalList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/create-journal" element={<CreateJournal />} />
        <Route path="/create-note" element={<CreateNote />} />
      </Routes>
    </Router>
  );
}

export default App;
