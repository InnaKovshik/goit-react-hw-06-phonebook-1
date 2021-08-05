import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import { connect } from 'react-redux';

import { AppNav } from '../navigation';
import UserMenu from '../user';

import { authSelectors } from '../../redux/auth/auth-selectors';

import s from './header.module.scss';

const useStyles = makeStyles({
  icon: {
    color: 'lightcoral',
    marginRight: '5px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    '& h1': {
      marginRight: '20px',
    },
    '& p': {
      fontSize: '18px',
    },
  },
});

const Header = ({ authenrificated }) => {
  const classes = useStyles();

  return (
    <header className={s.AppHeader}>
      <div className={classes.logo}>
        <PhoneIcon className={classes.icon} />
        <h1>
          <NavLink to="/">Phonebook</NavLink>
        </h1>
        {authenrificated && (
          <p>
            <NavLink to="/contacts">Contacts</NavLink>
          </p>
        )}
      </div>
      {authenrificated ? <UserMenu /> : <AppNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  authenrificated: authSelectors.isAuthentificated(state),
});

export default connect(mapStateToProps)(Header);
