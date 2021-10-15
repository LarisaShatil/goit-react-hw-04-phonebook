import './App.css';
import { Component } from 'react';
import ContactList from './components/ContactList/ContactList';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
      contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
    name: '',
    number: ''
  };

  addNewContacts = data => {
    this.setState((prevState) => {
      if (prevState.contacts.some(contact => contact.name.toLowerCase().includes(data.name.toLowerCase()))) {
        return alert(`${data.name} is already in your contacts`)
      }
      return {
        contacts: [data, ...prevState.contacts]
      }
    });
  };


  deleteContact = id => {
    // console.log('DELETE')
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }))
  };

  filterName = e => {
    // console.log('FILTER')
    this.setState({
      filter: e.currentTarget.value,
    })
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const nameToLowerCase = filter.toLowerCase();

    return (
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(nameToLowerCase)
      )
    )
  };

  render() {
    // const { filter } = this.state;

    const filteredContacts = this.getFilteredContacts();
    console.log(filteredContacts);
    
    return (
      <div className="App">
        <Container>
         <h1>Phonebook</h1>
        <ContactForm addNewContacts={this.addNewContacts}
        />
        </Container>

        <Container>
          <h2>Contacts</h2>
            <Filter value={this.state.filter} onChange={ this.filterName}/>
          <ContactList
            contacts={filteredContacts}
            onDeleteBtn={this.deleteContact}
            />
        </Container>
      </div>
    )
  }
};

export default App;