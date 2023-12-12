import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { SearchForm } from './SearchForm/SearchForm';

export const App = () => {
  return (
    <div
      tyle={{
        display: 'flex',
        gap: '40px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 30,
        color: '#010101',
        marginLeft: '20px',
      }}
    >
      <SearchForm />
      <Filter />
      <ContactList />
    </div>
  );
};
