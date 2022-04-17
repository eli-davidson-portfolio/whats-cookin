
const ingredients = fetch("http://localhost:3001/api/v1/ingredients")
  .then(response => {
    if (response.ok) {
      return response.json()
    } else { 
      throw Error(response.statusText)
    }
  }).then(data => data)
  .catch(err => console.log(err))

  const recipes = fetch("http://localhost:3001/api/v1/recipes")
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw Error(response.statusText)
      }
    }).then(data => data)
    .catch(err => console.log(err))

  const usersData = fetch("http://localhost:3001/api/v1/users")
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw Error(response.statusText)
      }
    }).then(data => data)
    .catch(err => console.log(err))


  const pantryPost = (somedata) => fetch("http://localhost:3001/api/v1/users", {
    method:"POST", 
    body: JSON.stringify({
      'userID' : somedata.userID, 
      'ingredientID' : somedata.ingredientID, 
      'ingredientModification' : somedata.ingredientModification
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
      if (response.ok) {
        console.log(response.json())
        return {ok: true, data: response.json()}
      } else {
        throw Error(response.statusText)
      }
    }).catch(err => console.log(err))


export { ingredients, recipes, usersData, pantryPost} 