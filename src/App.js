import Header from './components/header';
import Routes from './components/routers/';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { operations } from './redux/auth/auth-operations';

import s from './App.module.scss';

function App({ getCurrentUser }) {
  useEffect(() => getCurrentUser(), []);

  return (
    <div className={App}>
      <Header className={s.AppHeader} />
      <Routes />
    </div>
  );
}

const mapDispatchToProps = {
  getCurrentUser: operations.getUser,
};
export default connect(null, mapDispatchToProps)(App);
