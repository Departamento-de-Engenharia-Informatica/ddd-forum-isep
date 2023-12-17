import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.sass';
import IndexPage from './pages';
import DiscussionPage from './pages/discussion';
import CommentPage from './pages/comment';
import LoginPage from './pages/login';
import JoinPage from './pages/join';
import SubmitPage from './pages/submit';
import MemberPage from './pages/member';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={IndexPage} />
        <Route path="/discuss/:slug" Component={DiscussionPage} />
        <Route path="/comment/:commentId" Component={CommentPage} />
        <Route path="/member/:username" Component={MemberPage} />
        <Route path="/submit" Component={SubmitPage} />
        <Route path="/join" Component={JoinPage} />
        <Route path="/login" Component={LoginPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
