import React from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { saveForm } from './actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: "",
      email: "",
      cpf: Number,
    }
  }

  handleChange({ target }) {
    const { name, value } = target;

    (name === "nome") ? this.setState({
      [name]: value.toUpperCase()
    }) : this.setState({
      [name]: value
    })
  }

  

  render() {

    return (
      <section id="form">
        <fieldset id="personal-data-container" className="personal-data-container">
          <label>Nome:
            <input
              name="nome"
              onChange={this.handleChange}
              placeholder="Digite seu nome"
              required
              type="text"
              value={this.state.nome}
            />
          </label>
          <label>
            E-mail:
            <input

              name="email"
              onChange={this.handleChange}
              placeholder="Digite seu e-mail"
              required
              type="email"
              value={this.state.email}
            />
          </label>
          <label>
            CPF:
            <input
              name="cpf"
              onChange={this.handleChange}
              placeholder="Digite seu CPF"
              required
              type="number"
              value={this.state.cpf}
            />
          </label>
          <button onClick={() => this.props.add(this.state)}>
            Submit
         </button>
        </fieldset>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch  => ({
  add: e => dispatch(saveForm(e))
});

export default connect(null, mapDispatchToProps)(Form);

// ReactDOM.render(<Form />, document.getElementById('root'))
