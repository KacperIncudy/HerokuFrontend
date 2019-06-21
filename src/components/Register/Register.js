import React from 'react';
	

const uri = 'https://hidden-cove-88698.herokuapp.com';
  /* const uri = 'http://localhost:3001'; */

const initialState = {
  email: '',
      password: '',
      name: '',
      nameError: '',
      emailError: '',
      passwordError: ''
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state= initialState;
  }


  validate = (email, name, password) => {
    let nameError = '';
    let emailError = '';
    let passwordError ='';

    if (!email.includes('@')) {
      emailError = 'Email must contain @';
    }
    if (!email < 3) {
      emailError = 'This is not a valid email';
    }
    if (emailError) {
      this.setState({ emailError });
    }

    if (!name) {
      nameError = 'Name cannot be blank';
    }
    if (nameError) {
      this.setState({ nameError });
    }

    if (!password < 6) {
      passwordError = 'Password has to be atleast 6 characters long';
    }
    if (passwordError) {
      this.setState({ passwordError });
    }

    return true;
  }

 onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

onSubmitSignIn = () => {
  const isValid = this.validate();
  if(isValid) {
    fetch(uri + '/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id) {
          this.props.loadUser(user);
         this.props.onRouteChange('home');
       } 
    })
  }
    
  }


  render() {
	return(
		<article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
		 <main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="name"  
        id="name" 
        onChange={this.onNameChange}
        /><div style={{ fontSize: 12, color: "red" }}>{this.state.nameError}</div>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="email-address"  
        id="email-address" 
        onChange={this.onEmailChange}
        /><div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}</div>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" 
        name="password"  
        id="password" 
        onChange={this.onPasswordChange}
        />
      </div>
    </fieldset>
    <div className="">
      <input 
      onClick={this.onSubmitSignIn}
      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="Register" 
      /><div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>
    </div>
  </div>
</main>
</article>
		);
}
}


export default Register;