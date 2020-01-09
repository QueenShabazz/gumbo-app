import React, {Component} from 'react';
import './App.css';
import {Route,Link, Switch, withRouter} from "react-router-dom";
import SignUp from "./SignUp/SignUp"
import Login from "./Login/Login"
import About from "./About/About"
import Search from "./Search/Search"
import SavedSearches from './SavedSearches/SavedSearches';
import Recipes from './Recipes/Recipes';
import EditRecipe from './EditRecipe/EditRecipe'
import config from './config'


class App extends Component{
  constructor(props){
    super(props)
      //EVENT HANDLER FOR FLAVOR PROFILE SELECTION
      this.setFlavor=this.setFlavor.bind(this)
      //ARRAY TO HOLD RECIPE DETAILS 
      this.state= {
        ingredients: [],
        flavor: [],
        recipes: [],
        email:'',
        password:'',
        savedRecipes:[],
        editRecipeTitle:'',
        editRecipeIngredients:'',
        error: ''
      }

      this.delRecipe=this.delRecipe.bind(this)
      this.onChangeRecipeTitle=this.onChangeRecipeTitle.bind(this)
      this.onChangeRecipeIngredients=this.onChangeRecipeIngredients.bind(this)
      this.updateRecipe=this.updateRecipe.bind(this)
      this.Footer=this.Footer.bind(this)
  }

  onChangeRecipeTitle(e){
    this.setState({editRecipeTitle: e.target.value})
  }
  
  onChangeRecipeIngredients(e){
    this.setState({editRecipeIngredients: e.target.value})
  }

  delRecipe (id, e) {
    const options = {
        method: 'DELETE',
        headers:{
        'Accept' : 'application/json',
        'Authorization': "bearer "  + localStorage.getItem("authToken"),
        'Access-Control-Allow-Origin':'*',
        'Content-Type' : 'application/json'}
    }
    const request = new Request (`${config.API_ENDPOINT}/recipes/`+ id, options)
    fetch(request)
    .then(response=>{
        if (response.status !== 204){
            throw new Error('Did not delete')
        }
    })
    .then(()=>{
        let arr= [...this.state.savedRecipes]
        let index = arr.findIndex(item=>{
         return  item.id=== id
        })
         if(index !== -1){
            arr.splice(index,1)
            this.setState({savedRecipes: arr})
            
    }})
}
  // MAKE AJAX CALL 

    updateRecipe (id, e) {
    const options = {
        method: 'PUT',
        headers:{
          'Accept' : 'application/json',
          'Authorization': "bearer "  + localStorage.getItem("authToken"),
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json'
        },
            body: JSON.stringify({
            title: this.state.editRecipeTitle,
            ingredients: this.state.editRecipeIngredients
        })}
        const request = new Request (`${config.API_ENDPOINT}/recipes/` +id, options)
        fetch(request)
        .then(response=>{
            if (response.status !== 200){
                throw new Error('Did not update')
            }
            return response.json()
        })
        .then(data=>{
            let arr= this.state.savedRecipes
            let index = arr.findIndex(item=>{
             return  item.id === id
            })
            console.log('update', arr[index])
        })
        .catch(err => {
          if(err.status===400){
              this.setState({error: "Incorrect username or password"})
          }
          })

    }

    getRecipe = (e) => {
    e.preventDefault();
    const ingredients= e.target.elements.ingredients.value

    if(this.state.flavor.length>=1){
        fetch(`${config.API_ENDPOINT}/recipes-api/${ingredients}/${this.state.flavor[0]}`)
        .then(response => response.json())
        .then(data => {
         const recipeRow=[]
          data.results.forEach((recipe)=> {
            const recipeRows=
            <Recipes recipe={recipe}
            />
            recipeRow.push(recipeRows)          
          this.setState({recipes: recipeRow})
        })
      
        })
      if(this.state.flavor.length===1){
        fetch(`${config.API_ENDPOINT}/recipes-api/${this.state.flavor[0]}`)
        .then(response => response.json())
        .then(data => {
          const recipeRow=[]
          // LOOP THRU RECIPES ARRAY
          data.results.forEach((recipe)=> {
            const recipeRows=<Recipes recipe={recipe}/>
            recipeRow.push(recipeRows)          
            this.setState({recipes: recipeRow})
          })
        })
      }
    } else if(this.state.flavor.length===0){
        fetch(`${config.API_ENDPOINT}/recipes-api/%20/${ingredients}/`)
        .then(response => response.json())
        .then(data => {
         const recipeRow=[]
          // LOOP THRU RECIPES ARRAY
          data.results.forEach((recipe)=> {
            const recipeRows=<Recipes recipe={recipe}/>
          recipeRow.push(recipeRows)          
          this.setState({recipes: recipeRow})
        })
      })
    }
  e.target.reset()

    }

    setFlavor(profile){
      if(this.state.flavor.indexOf(profile) === -1){
        this.state.flavor.unshift(profile)
        return this.setState({flavor: this.state.flavor})
      }
      else{
        this.state.flavor.unshift(profile)
        return this.setState({flavor: this.state.flavor})
      }
    }

    componentDidMount(){  
      fetch(`${config.API_ENDPOINT}/recipes`,  
      {   method: 'GET',
          headers:{
              'Accept' : 'application/json',
              'Content-Type' : 'application/json',
              'Authorization' : "bearer "  + localStorage.getItem("authToken")
      }})
      .then(response => response.json())
      .then(savedRecipes => {
          console.log('savedrecipes in App.js',savedRecipes)
          this.setState({savedRecipes})
      }) 
    }
 //COMPONENTS

  NavBar(){
    return(
      <nav>
          <Link to ="/">
            {" "}
            About
          </Link>
          <Link to ="/signup">
            {" "}
            Sign Up
          </Link>
          <Link to ="/search">
            {" "}
            Search
          </Link>
          <Link to ="/saved">
            {" "}
            Saved Recipes
          </Link>
          
      </nav>
    )
  }
  
  MainPage () {
    return(
    <div className="main">
      <header>
        <Link to="/">
          {" "}
        Gumbo <br></br>Feed Your Tastebuds
        </Link>
        <br></br>
        <Link  to="/signup"> 
          <button className="regular-button" type="button">Find Recipes For My Tastebuds!
          </button>
        </Link>
      </header>
      <main>
      
       
                 
      <About />
    </main>
    </div>)
  }

 
  Footer () {
    console.log('footer', this.props)
    if (
      this.props.location.pathname==='/signup' ||this.props.location.pathname==='/saved'||this.props.location.pathname.includes('/edit')||this.props.location.pathname==='/login'
      ){
      return false
    }
    else return(
      <footer>
      <section id="signup">
              <h2> Want to find more to eat? Sign Up!</h2>
              <form> <label htmlFor="#text-area"> User Name: <input id="text-area" type="text-area" label="name"/></label> 
                  <label htmlFor="#text-area"> Password: <input id="text-area" type="text-area" label="name"/>
                  <button className="regular-button">
                      Sign Up
                  </button>
                  <h4> Already a Member? <Link to="/signup"> Login </Link></h4>
                  </label>  </form>
                  
      </section>
    </footer>
    )
  }

  render(){
    return (
      <div className="App">
        <Route  path="/" component={this.NavBar}/>
        <Switch>
          {/* MAIN */}
          <Route exact path="/" component={this.MainPage}/>
          <Route exact path="/signup" 
            render={(props)=>
              <SignUp {...props}/>
            }
          />              
          <Route exact path="/login"
            render={(props) => 
              <Login {...props}
                login={this.login}
              />
            }
          />
          {/* SEARCH */}
          <Route path="/search"
            render={(props)=> 
              <Search {...props} 
                getRecipe={this.getRecipe}  
                value={this.state.ingredients} 
                setFlavor={this.setFlavor}
                recipes={this.state.recipeDeets}
                results={this.state.recipes}
              />
          }
           />
         
          <Route path="/saved" render={(props)=>
              <SavedSearches {...props}
                delRecipe={this.delRecipe}
                savedRecipes={this.state.savedRecipes}
                updateSavedRecipeState={this.updateSavedRecipeState}
              />
            }
          />
          <Route path="/edit/:id" 
            render={(props)=>
              <EditRecipe {...props}
                savedRecipes={this.state.savedRecipes}
                onChangeRecipeTitle={this.onChangeRecipeTitle}
                onChangeRecipeIngredients={this.onChangeRecipeIngredients}
                updateRecipe={this.updateRecipe}
                editRecipeTitle={this.state.editRecipeTitle}
                editRecipeIngredients={this.state.editRecipeIngredients}
              />
            }/>
        </Switch>
        <Route path="/" component={this.Footer}/>
      </div>
    );
  }
}


export default withRouter(App);