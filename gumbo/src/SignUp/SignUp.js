import React from 'react';
import './SignUp.css'

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            username:[]
        }
        this.addUser=this.addUser.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange = (e) =>{
        this.setState({email: e.target.value})
    }
    addUser= (e) =>{
        e.preventDefault();
        console.log('target', e)
        // const headers = new Headers ();
        // headers.append('Content-Type', 'application/json');
        // const options = {
        //     method: 'POST',
        //     headers,
        //     body: JSON.stringify({
        //         email:this.props.recipe.title,
        //         passord: this.props.recipe.thumbnail,
        //     }),
        // };
        // const request = new Request ('http://localhost:8000/api/users', options)
        // const response = fetch(request)
        // const status = response.status
    
        // if(status === 201){
        //     this.fetchAll()
        // }
    }
      
   render(){
    
    return(
        <div>
            <section id="intro">
                <h2> New To Gumbo?</h2>
                <p> Take the quiz below to learn your flavor profile and sign up</p>
            </section>
            <section id="signup">
                <h2> Sign Up, Your Tastebuds Will Thank You</h2>
                <form> 
                    <label for="#text-area"> User Name: </label>
                    <input id="text-area" type="text" label="name" value={this.state.email} onChange={this.handleChange}/>
                    <label for="#text-area"> Password: </label>
                    <input id="text-area" type="text" label="name" onChange={this.handleChange} value={this.state.password}/>
                    <button class="regular-button" type="submit" onClick={this.addUser}> Submit
                    </button>
                </form>
                    

            <h4> Already a Member? Login</h4>
            </section>
        </div> 
    );}
}
                
export default SignUp