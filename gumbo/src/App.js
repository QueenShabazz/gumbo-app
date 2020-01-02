import React, {Component} from 'react';
import './App.css';
import {Route, NavLink,Link, Switch} from "react-router-dom";
import SignUp from "./SignUp/SignUp"
import About from "./About/About"
import Search from "./Search/Search"
import SavedSearches from './SavedSearches/SavedSearches';
import Recipes from './Recipes/Recipes';
import EditRecipe from './EditRecipe/EditRecipe'
// export default function nav(loc) {
//   history.push(loc);
// }

class App extends Component{
  constructor(props){
    super(props)
      //EVENT HANDLER FOR FLAVOR PROFILE SELECTION
      this.setFlavor=this.setFlavor.bind(this)
      // console.log('state:', this.state)
      //ARRAY TO HOLD RECIPE DETAILS 
      this.state= {
        ingredients: [],
        flavor: [],
        recipes: [],
        email:[],
        password:[],
        savedRecipes:[],
        editRecipeTitle:'',
        editRecipeIngredients:''
      }

      // console.log('stateplz', this.state.savedRecipes)
      this.delRecipe=this.delRecipe.bind(this)
      this.onChangeRecipeTitle=this.onChangeRecipeTitle.bind(this)
      this.onChangeRecipeIngredients=this.onChangeRecipeIngredients.bind(this)
      this.updateRecipe=this.updateRecipe.bind(this)
  }

  onChangeRecipeTitle(e){
    console.log('recipe title change', e.target.value)
    this.setState({editRecipeTitle: e.target.value})
  }
  
  onChangeRecipeIngredients(e){
    this.setState({editRecipeIngredients: e.target.value})
  }

  delRecipe (id, e) {
    // let history = useHistory();
    console.log('event', e.target, id)
    const options = {
        method: 'DELETE',
        headers:{
        'Accept' : 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Content-Type' : 'application/json'}
    }
    const request = new Request ('http://localhost:8000/api/recipes/'+id, options)
    fetch(request)
    .then(response=>{
        if (response.status != 204){
            throw new Error('Did not delete')
        }
    })
    .then(()=>{
        let arr= [...this.state.savedRecipes]
        console.log('delarr', arr)
        let index = arr.findIndex(item=>{
         return  item.id=== id
        })
        console.log('new index', index)
         if(index !== -1){
            arr.splice(index,1)
            this.setState({savedRecipes: arr})
    }})
}

    
  // MAKE AJAX CALL 

  updateRecipe (id, e) {
    // let history = useHistory();
    console.log('target change', e, id)
    const options = {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
            title: this.state.editRecipeTitle,
            ingredients: this.state.editRecipeIngredients
        })}
        const request = new Request ('http://localhost:8000/api/recipes/'+id, options)
        fetch(request)
        .then(response=>{
          console.log('i got response')
            if (response.status != 200){
                throw new Error('Did not update')
            }
        })
        .then(data=>{
            let arr= [...this.state.savedRecipes]
            console.log('update arr', arr)
            let index = arr.findIndex(item=>{
             return  item.id=== id
            })
            console.log('updated index', index, data)
             if(index !== -1){
                // arr[index].title = data.title
                // arr[index].ingredients = data.ingredients
                // this.setState({savedRecipes: arr})
        }})

    }

  getRecipe = (e) => {
    e.preventDefault();
    const ingredients= e.target.elements.ingredients.value
    console.log('FLAV IN GET', this.state.flavor[0], '\n', "ingredient:", e.target.elements.ingredients.value)
    if(this.state.flavor.length>=1){
        fetch(`http://localhost:8000/recipes-api/${ingredients}/${this.state.flavor[0]}`)
        .then(response => response.json())
        .then(data => {
          console.log('jsonData', data)
         const recipeRow=[]
          data.results.forEach((recipe)=> {
            console.log('TEST', recipe.thumbnail)
            const recipeRows=
            <Recipes recipe={recipe}
            />
            recipeRow.push(recipeRows)
            // this.state.recipes.push(recipe)
          
          this.setState({recipes: recipeRow})
        })
      // LOOP THRU RECIPES ARRAY
      
        })
      if(this.state.flavor.length===1){
        fetch(`http://localhost:8000/recipes-api/${this.state.flavor[0]}`)
        .then(response => response.json())
        .then(data => {
          console.log('jsonData', data)
         const recipeRow=[]
          data.results.forEach((recipe)=> {
            console.log('TEST', recipe.thumbnail)
            const recipeRows=<Recipes recipe={recipe}
            />
            recipeRow.push(recipeRows)
            // this.state.recipes.push(recipe)
          
          this.setState({recipes: recipeRow})
        })
      // LOOP THRU RECIPES ARRAY
        })
    }
      } else if(this.state.flavor.length===0){
        // console.log('current state length', this.state.flavor.length)
        fetch(`http://localhost:8000/recipes-api/%20/${ingredients}/`)
        .then(response => response.json())
        .then(data => {
          console.log('jsonData', data)
         const recipeRow=[]
          data.results.forEach((recipe)=> {
            console.log('TEST', recipe.thumbnail)
            const recipeRows=<Recipes recipe={recipe}
            />
            recipeRow.push(recipeRows)
            // this.state.recipes.push(recipe)
          
          this.setState({recipes: recipeRow})
        })
      // LOOP THRU RECIPES ARRAY
      })
    }

  e.target.reset()

  }

    setFlavor(profile){
      console.log('profile: ', profile)
      console.log('flav state:', this.state.flavor)
      
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
      const options = {
          method: 'GET',
          header:{'Accept' : 'application/json',
                  'Content-Type' : 'application/json'}
      };
      const request = new Request ('http://localhost:8000/api/recipes/', options)
      fetch(request)
      .then(response => response.json())
      .then(data => {
      console.log('DATA PLZ', data)
          this.setState({savedRecipes: data})
      }) 
  }

	// componentDidUpdate = () => {
	// 	const ingredients = JSON.stringify(this.state.ingredients);
	// 	localStorage.setItem("recipes", ingredients);
  // };

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
          
         {/* {this.renderNavBar()} */}
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
    if (window.location.pathname==='/signup'){
      return false
    }
    if (window.location.pathname==='/saved'){
      return false
    }
    if (window.location.pathname==='/edit'){
      return false
    }
    else 
    // console.log('LOC', window.location.pathname)
    
    return(
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
    // console.log('DEETS',this.state.recipes)
    // console.log('RECIPES', this.state.recipes)
    return (
      <div className="App">
        <Route  path="/" component={this.NavBar}/>
        <Switch>
          {/* MAIN */}
          <Route exact path="/" component={this.MainPage}/>

          {/* <Route path="/search" component={}/> */}
          
          {/* SIGNUP */}
          <Route path="/signup" 
          
            render={(props)=>
              <SignUp {...props}
              addUser={this.addUser}

              />
            }/>
                          

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


export default App;