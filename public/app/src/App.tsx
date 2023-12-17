
import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.sass';
import IndexPage from './pages';
import DiscussionPage from './pages/discussion';
import CommentPage from './pages/comment';
import LoginPage from './pages/login';
import JoinPage from './pages/join';
//import AuthenticatedRoute from './shared/infra/router/AuthenticatedRoute';
import SubmitPage from './pages/submit';
import MemberPage from './pages/member';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/discuss/:slug" element={<DiscussionPage />} />
        <Route path="/comment/:commentId" element={<CommentPage />} />
        <Route path="/member/:username" element={<MemberPage />} />
        {/* <AuthenticatedRoute path="/submit" component={<SubmitPage />} /> */}
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

