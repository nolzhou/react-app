// import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader';
import PostsList from './components/PostsList';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <PostsList isShowModal={showModal} onHideModal={closeModalHandler}/>
    </>
  );
}

export default App;
