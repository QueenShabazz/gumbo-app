import React, {Component} from 'react';
import {withRouter} from 'react-router'

class EditRecipe extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         savedRecipes:[],
                  
    //     }

    //     console.log('stateplz', this.state.savedRecipes)
    //     }

        
        render() {
            // console.log('editrecipe props',this.props.savedRecipes)
           if(this.props.savedRecipes !== null){
            let editId = this.props.match.params.id
            let editItem = this.props.savedRecipes.filter(item=>{return item.id== editId})
            // console.log('EDITPROPS', this.props.match.params.id, '\n', this.props.savedRecipes.filter(item=>{return item.id== editId}) )
            // console.log('edit item', editItem[0].title)
            return (
                <>
                    <section id="intro">
                        <h2> Edit Recipe: {editItem[0].title}
                        </h2>
                        <p> See below for saved searches, or find the dish nearby
                        </p>
                    </section>
                    <div>
                       <form>
                          <label htmlFor="recipe-title">
                              Recipe Title
                            <input type='text' placeholder={editItem[0].title} value={this.props.editRecipeTitle} onChange={this.props.onChangeRecipeTitle}/>
                            </label> 
                            <label > Ingredients
                            <input type='text-area' placeholder={editItem[0].ingredients} value={this.props.editRecipeIngredients} onChange={this.props.onChangeRecipeIngredients}/>
                           
                            </label> 
                            <button type="submit" className="regular-button" onClick={(e)=>{this.props.updateRecipe(editId, e)}}> Submit</button>

                       </form>
                    </div>
                </>
            )
            } else {
                return (<div>Loading</div>)
            }  
        }
        
}

export default withRouter(EditRecipe)