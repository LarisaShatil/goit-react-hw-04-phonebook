import {Component} from 'react';
import { v4 as uuid } from 'uuid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  // generate unique Id
  nameId = uuid();
  numberId = uuid();

  state = {
      contacts: [],
      name: '',
      number: ''
  };

  //writing data from input
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  //collecting and forwarding data to obj
  handleSubmit = (e) => {
    e.preventDefault();
  
    const obj = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number
    };
    
    this.setState({ obj});
    this.props.addNewContacts(obj);
    this.resetForm();
   };

  //clears inputs. Used in handleSubmit
  resetForm = () => {
    this.setState({ name: '', number: '' })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label
          className={s.label}
          htmlFor={this.nameId}>👤 Name
          <input
            className={s.input}
            id={this.nameId}
            type="text"
              name="name"
              value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="write the name with the use of letters, apostrophe, dash and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc"
            placeholder=". . ."
            required
            />
          </label>

        <label
          className={s.label}
          htmlFor={this.numberId}>☎️ Number
          <input
            className={s.input}
              id={this.numberId}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              maxLength="14"
            title="use the numeric format for the phone number"
            placeholder=". . ."
              required
            />
          </label>
        <button
          className={s.addBtn}
          type="submit"
          onSubmit={this.handleSubmit}>
          Add contact
        </button>

        </form>

    )
  }
};

export default ContactForm;