import React, {Component} from 'react'
import config from '../config'

class Recipes extends Component {
    addRecipe= (e) =>{ 
        e.preventDefault();
        const headers = new Headers ();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization',"bearer "  + localStorage.getItem("authToken"))
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
        const request = new Request (`${config.API_ENDPOINT}/recipes`, options)
        //add error checking refer to signup.js
        fetch(request)
        .then(res=>res.json)
        .then(data=>(data))

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
                    <img id="add" src="https://img.icons8.com/cute-clipart/64/000000/love-potion.png" />
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