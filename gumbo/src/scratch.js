	componentDidMount = () => {
		const json = localStorage.getItem('recipes');
		if (json === null) {
			return;
		}
		const recipes = JSON.parse(json);
		this.setState({recipes});
	};


   handleInputChange = (e) => {
    e.preventDefault();
    this.setState({recipes: e.target.value})
  }

  componentDidMount () {
    // this.getRecipe();
		const json = localStorage.getItem('recipes');
		if (json === null) {
			return;
		}
		const ingredients = JSON.parse(json);
		this.setState({ingredients});
	};

	              /* <NavLink to="/signup">Sign up</NavLink>
              <NavLink to="/saved-recipes">Saved Recipes</NavLink>
              <NavLink to="/search-recipes">Search Recipes</NavLink>


          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route  path="/signup">
              <SignUp />
            </Route>
          </Switch> */
renderNavBar ()  {
	return(
	  <>
		<Route path="/" component={App}/>
	  </>
	)
  }


    // })
        // .then(jsonStr=> {
        //     this.setState({
        //   //let ingredients= data.map(i=> i.title)
        //   // this.setState({
        //   //   ingredients: data.ingredients
        //       ingredients: jsonStr.ingredients

        //         // });
          
                
        //   })
        // ( 'info',jsonStr 
		// )
		
		            // const recpieRow= 
            // <Recipes recipe={recipe} />
            
              
        //   this.setState({savedRecipes: saved})

          
    // }


                // ('recipe\'s length, as saved in state:', this.state.savedRecipes.length
            // )
        // this.state.savedRecipes.map((recipe)=> ('YASS', recipe[0])
        // recipe.forEach(
        //     return (
        //     <table key={recipe.id}>
        //         <tbody>
        //         <tr>
        //             <td>
        //             <img src={recipe.thumbnail}/>
        //             </td>
        //             <td>
        //             Recipe Title <br></br> <b><a href={recipe.href} target="_blank">{this.props.recipe.title}</a></b>
        //             <br></br>
        //             Ingredients: <br></br> <b>{recipe.ingredients}</b>
        //             <br></br>
        //             </td>
        //             <tr>                        
        //             <button>
        //                 Delete
        //             </button>
                        
        //             </tr>
        //         </tr>
        //         </tbody>
        //         <br></br>
        //     </table> 
        //     )
        // })
    
        
            
        //     <table key={recipe.id}>
        //     <tbody>
        //     <tr>
        //         <td>
        //         <img src={recipe.thumbnail}/>
        //         </td>
        //         <td>
        //         Recipe Title <br></br> <b><a href={recipe.href} target="_blank">{this.props.recipe.title}</a></b>
        //         <br></br>
        //         Ingredients: <br></br> <b>{recipe.ingredients}</b>
        //         <br></br>
        //         </td>
        //         <tr>                        
        //         <button  onClick={this.addRecipe}>
        //         <img id="add "src="https://img.icons8.com/cute-clipart/64/000000/love-potion.png" />
        //         </button>
                    
        //         </tr>
        //     </tr>
        //     </tbody>
        //     <br></br>
        // </table> 
            
                      
            // ('RECIPEFUNC', this.recipes())
            // this.recipes.bind(this)
                                    // headers,
                        // body: JSON.stringify({
                        //     title:recipe.href,
                        //     thumbnail: recipe.thumbnail,
                        //     ingredients: recipe.ingredients,
                        //     recipeurl: recipe.href
                        // }),
                        // const headers = new Headers ();
                    // headers.append('Content-Type', 'application/json');


                      // let addRecipe = (e) =>
    // // {
    //     e.preventDefault();
    //     ('clack')
        // const headers = new Headers ();
        // headers.append('Content-Type', 'application/json');
        // const options = {
        //     method: 'POST',
        //     headers,
        //     body: JSON.stringify({
        //         title:this.props.recipe.href,
        //         thumbnail: this.props.recipe.thumbnail,
        //         ingredients: this.props.recipe.ingredients,
        //         recipeurl:this.props.recipe.href
        //     }),
        // };
        // const request = new Request ('http://localhost:8000/api/recipes', options)
        // const response = fetch(request)
        // const status = response.status

        // if(status === 201){
        //     this.fetchAll()
        // }
    // }
                // ('REALTABLE',tables)

        // <Button  onClick={()=>  this.setState({savedRecipes: tables})}>
        // <img id="delete" src="https://img.icons8.com/bubbles/50/000000/delete-sign.png" />
        // </Button>

        //MAP OVER SAVED SEARCHES IN BACKEND DB
            // <section id="recipes">
            //     <ul id="saved-recipes-list">
            //         <li class="recipe">
            //             <h3>Spicy Meatballs</h3>
            //             <p> RECIPE: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore aperiam sed, quaerat adipisci enim dolorem officiis similique inventore blanditiis impedit necessitatibus totam harum ipsa, ipsum facilis odit numquam corporis. </p>
            //             <ul>
            //                 <li>
            //                         <form>
            //                                 <p> Made?</p>
            //                                 <label for="made" name=> Yes!</label>
            //                                 <input class="made"type="radio" name="made">
            //                                 <label for="made"> Not Yet</label>
            //                                 <input class="made"type="radio" name="made">
            //                         </form>
            //                 </li>
            //                 <li>
            //                     <button> Find Dish Near By</button>
            //                 </li>
            //             </ul>
            //         </li>
                    


              // let addRecipe = (e) =>
    // // {
    //     e.preventDefault();
    //     ('clack')
    //     const headers = new Headers ();
    //     headers.append('Content-Type', 'application/json');
    //     const options = {
    //         method: 'POST',
    //         headers,
    //         body: JSON.stringify({
    //             title:this.props.recipe.href,
    //             thumbnail: this.props.recipe.thumbnail,
    //             ingredients: this.props.recipe.ingredients,
    //             recipeurl:this.props.recipe.href
    //         }),
    //     };
    //     const request = new Request ('http://localhost:8000/api/recipes', options)
    //     const response = fetch(request)
    //     const status = response.status

    //     if(status === 201){
    //         this.fetchAll()
        
  
            // let delRecipe = (id) =>{   

            //         ('ID', id)

                    // .then(response => response.json())
        // .then(data =>
        //     (data)
        // )


//MAP OVER SAVED SEARCHES IN BACKEND DB
            // <section id="recipes">
            //     <ul id="saved-recipes-list">
            //         <li class="recipe">
            //             <h3>Spicy Meatballs</h3>
            //             <p> RECIPE: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore aperiam sed, quaerat adipisci enim dolorem officiis similique inventore blanditiis impedit necessitatibus totam harum ipsa, ipsum facilis odit numquam corporis. </p>
            //             <ul>
            //                 <li>
            //                         <form>
            //                                 <p> Made?</p>
            //                                 <label for="made" name=> Yes!</label>
            //                                 <input class="made"type="radio" name="made">
            //                                 <label for="made"> Not Yet</label>
            //                                 <input class="made"type="radio" name="made">
            //                         </form>
            //                 </li>
            //                 <li>
            //                     <button> Find Dish Near By</button>
            //                 </li>
            //             </ul>
            //         </li>
                    
                            // this.setState({
                //     savedRecipes: ""
                // })
        // const recipesArr = Object.assign([], this.state.savedRecipes)
        // ('recipes array', recipesArr)
        // ('id', id)
        // recipesArr.splice(0,1)

    //     this.setState({
    //     savedRecipes: recipesArr
    // })

      //   else if(this.state.flavor.length===0){
  //     fetch(`http://localhost:8000/recipes-api/${ingredients}/`)
  //     .then(response => response.json())
  //     .then(data => {
  //       ('jsonData', data)
  //      const recipeRow=[]
  //       data.results.forEach((recipe)=> {
  //         ('TEST', recipe.thumbnail)
  //         const recipeRows=<Recipes recipe={recipe}
  //         />
  //         recipeRow.push(recipeRows)
  //         // this.state.recipes.push(recipe)
        
  //       this.setState({recipes: recipeRow})
  //     })
  //   // LOOP THRU RECIPES ARRAY
  //   })
  // }