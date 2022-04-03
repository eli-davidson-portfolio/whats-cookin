
const ingredients = fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients")
  .then(response => response.json())
  .then(data => data.ingredientsData)

  const recipes = fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
  .then(response => response.json())
  .then(data => data.recipeData)

  const usersData = fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .then(data => data.usersData)


export {ingredients,recipes,usersData} 