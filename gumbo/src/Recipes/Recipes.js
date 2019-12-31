import React, {Component} from 'react'

class Recipes extends Component
{
     addRecipe= (e) =>{
        e.preventDefault();
        // console.log('clack')
        const headers = new Headers ();
        headers.append('Content-Type', 'application/json');
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify({
                title:this.props.recipe.title,
                thumbnail: this.props.recipe.thumbnail,
                ingredients: this.props.recipe.ingredients,
                recipeurl:this.props.recipe.href
            }),
        };
        const request = new Request ('http://localhost:8000/api/recipes', options)
        const response = fetch(request)
        const status = response.status

        // if(status === 201){
        //     this.fetchAll()
        // }
    }
    render(){
       
        return (
            <>
                <tr>
                    <td>
                    <a href={this.props.recipe.href}  target="_blank"> <img src={this.props.recipe.thumbnail}/></a>
                    </td>
                    <td>
                    Recipe Title <br></br> <b><a href={this.props.recipe.href} target="_blank">{this.props.recipe.title}</a></b>
                    <br></br>
                    Ingredients: <br></br> <b>{this.props.recipe.ingredients}</b>
                    <br></br>
                    </td>
                    <tr>                        
                    <button  onClick={this.addRecipe}>
                    <img id="add "src="https://img.icons8.com/cute-clipart/64/000000/love-potion.png" />
                    </button>
                        
                    </tr>
                    <br></br>
                    

                </tr>
                <hr></hr>
            </>
               
            )
    }
}

export default Recipes;