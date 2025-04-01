import React, { useState } from 'react'

const Main = () => {

  const [ingredients, setIngredients] = useState([])

  const ingredientsListItems = ingredients.map(ingredient => (
    <li className='Ingredients' key={ingredient}>{ingredient}</li>
  ))

  /** @param {Event} event */ //JsDoc Types
  function handleSubmit(event) {
    event.preventDefault() // forces the form to stay in the same page without reloading
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get('ingredient')
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]) //Arry manip
    console.log(newIngredient)
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className='add-ingredient-form'>
        <input type="text" name='ingredient' placeholder='e.g. oregano' aria-label='Add Ingredient' />
        <button type='submit'>Add ingredient</button>
      </form>
      {ingredientsListItems}
    </main>
  )
}

export default Main