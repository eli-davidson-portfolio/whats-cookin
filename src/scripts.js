import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import RecipeRepository from './classes/RecipeRepository.js';
import User from './classes/User.js';
import usersData from './data/users';

const recipeRepository = new RecipeRepository();
const randomIndex = getRandomIndex(usersData.length);
const currentUser = new User(usersData[randomIndex]);

let recipeCardContainer = document.querySelector('.recipe_cards_container')
let detailsInformation = document.querySelector('.details_information')
let recipeDetailsContainer = document.querySelector('.recipe_details_container')
let search = document.querySelector('.search')
let asideTitle = document.querySelector('.aside_title')
let asideList = document.querySelector('.aside_information_list')
let detailsTitle = document.querySelector('.details_title')
let homeButton = document.querySelector('.home_button')
let username = document.querySelector('.username')
let recipeCategoryButtons = document.querySelector('.aside_action_button_container')

recipeCategoryButtons.addEventListener('click', (event) => {
  if (event.target.name === "recipe_categories") {
      currentUser.setCurrentList(event.target.value, event.target.dataset.category)
    displayRecipes()
    displayTags()
    search.value = ''
    console.log(currentUser.currentList)
  }
})
detailsInformation.addEventListener('click', (event) =>{
    //if clicking on a picture
    if(event.target.parentNode.id) {
        let id = parseInt(event.target.parentNode.id);
        showRecipeDetails(id);

    }

    //if clicking on a button
    if(event.target.classList.contains('favorite_button')) {
        currentUser.addFavorite(parseInt(event.target.value))
        event.target.classList.add('unfavorite_button')
        event.target.classList.remove('favorite_button')
        event.target.innerText = 'UNFAVORITE'
    } else if (event.target.classList.contains('toCook_button')) {
        currentUser.addToCook(parseInt(event.target.value))
        event.target.classList.add('notToCook_button')
        event.target.classList.remove('toCook_button')
        event.target.innerText = 'NOT TO COOK'
    } else if (event.target.classList.contains('unfavorite_button')) {
        currentUser.removeFavorite(parseInt(event.target.value))
        event.target.classList.add('favorite_button')
        event.target.classList.remove('unfavorite_button')
        event.target.innerText = 'FAVORITE'
    } else if (event.target.classList.contains('notToCook_button')) {
        currentUser.removeToCook(parseInt(event.target.value))
        event.target.classList.add('toCook_button')
        event.target.classList.remove('notToCook_button')
        event.target.innerText = 'TO COOK'
    }
})

homeButton.addEventListener('click', () => {
    document.getElementById("all_recipes").checked = true;
    currentUser.setCurrentList('allRecipes', 'All Recipes')
    search.value = ''
    displayRecipes()
    displayTags()
})

search.addEventListener('keyup', (event) => {
  if (!search.value && recipeDetailsContainer.classList.contains('hidden')) {
    displayRecipes()
    displayTags()
  }
    if (event.key === "Enter" && search.value) {
       searchByName(search.value)
   }
})

asideList.addEventListener('click', () => {
    filterByTag(getSelectedTags())
})

function getSelectedTags() {
    search.value = ''
    let checkedBoxes = document.querySelectorAll('input[name="tags"]:checked');
    let tags = [];
    checkedBoxes.forEach((checkbox) => {
        tags.push(checkbox.value);
    });
    if (tags.length) {
        return tags
    } else {
        displayRecipes()
    }
}

function displayUsername(name) {
    if (!name || (typeof (name) !== 'string')) return
    username.innerText = `${name}?`
}

function displayRecipes(recipeList = currentUser[currentUser.currentList], title = "") {
    const recipes = recipeRepository.filterList(recipeList)
    let plural = ''
    if(recipes.length !== 1) plural = 's'
    detailsTitle.innerText = `${currentUser.currentCategory}: ${recipes.length} ${title} recipe${plural}.`
    recipeCardContainer.classList.remove('hidden')
    recipeDetailsContainer.classList.add('hidden')
    recipeCardContainer.innerHTML = ''
    recipes.forEach(recipe => {
      recipeCardContainer.innerHTML += createRecipeCard(recipe)
    })
}

function createFavoriteButton(id) {
    if(!currentUser.favorites.includes(id)) {
        return `<button class="button favorite_button" value=${id}>FAVORITE</button>`
    }
    if (currentUser.favorites.includes(id)) {
        return `<button class="button unfavorite_button" value=${id}>UNFAVORITE</button>`
    }
}

function createToCookButton(id) {
    if (!currentUser.recipesToCook.includes(id)) {
        return `<button class="button toCook_button" value=${id}>TO COOK</button>`
    }
    if (currentUser.recipesToCook.includes(id)) {
        return `<button class="button notToCook_button" value=${id}>NOT TO COOK</button>`
    }
}

function createRecipeCard(recipe) {
    return `<div class="recipe_card" id="${recipe.id}" >
                <div class="recipe_card_button_container">
                    ${createFavoriteButton(recipe.id)}
                    ${createToCookButton(recipe.id)}
                </div>
            <img class="recipe_card_image" src=${recipe.image} alt="${recipe.name} image">
                <label class="recipe_card_title">${recipe.name}</label>
            </div>`
}

function showRecipeDetails(id) {
    let result = recipeRepository.getRecipeById(id)
    recipeCardContainer.classList.add('hidden')

    createIngredientsList(result.ingredients)

    detailsTitle.innerHTML = `${result.name}</br>Total cost: $ ${result.totalCost.toFixed(2)}`;
    recipeDetailsContainer.innerHTML = `<img class="recipe_details_image" src="${result.image}" alt="${result.name} image">
    <section class="recipe_instructions_containter scrollable">
    <ol>
    ${createInstructionsList(result.instructions)}
    </ol>
    </section>
    <div class="recipe_card_button_container">
       ${createFavoriteButton(id)}
       ${createToCookButton(id)}
    </div>`

    recipeDetailsContainer.classList.remove('hidden')
}

function createIngredientsList(ingredients) {
  let ingredientsHTML = '<ul>'
  ingredients.forEach((ingredient) => {
      ingredientsHTML += `<li>${ingredient.amount} ${ingredient.unit} ${ingredient.name}</li>`
  })
  ingredientsHTML += `</ul>`
  asideTitle.innerText = 'Ingredients'
  asideList.innerHTML = ingredientsHTML
}

function createInstructionsList(instructions) {
  let instructionsHTML = ''
  instructions.forEach((instruction) => {
      instructionsHTML += `<li>${instruction.instruction}</li>`
  })
  return instructionsHTML
}

function displayTags() {
    let tags = ''
    recipeRepository.tags.forEach((tag) => {
        tags += `<div><input type="checkbox" id="${tag}" name="tags" value="${tag}">
                <label for="${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</label></div>`
    })

    asideTitle.innerText = 'Filter'
    asideList.innerHTML = tags
}

function filterByTag(tags) {
    //0 tags
    if (!tags) return

    const firstIndex = 0;
    const lastIndex = tags.length - 1;
    let title = ''

    //1 tag
    if (tags.length <= 1) {
        title = tags[firstIndex]
    }

    //more than 1 tag
    if (tags.length > 1) {
        tags.forEach((tag, index) => {
            if (index === firstIndex) title = tag
            if (index !== firstIndex && index !== lastIndex) title += `, ${tag}`
            if (index === lastIndex) title += `, or ${tag}`
        })
    }
    let baselist = currentUser[currentUser.currentList]
    let filteredRecipes = recipeRepository.filterTag(tags, baselist)
    let filteredRecipeIds = filteredRecipes.map(recipe => recipe.id)
    displayRecipes(filteredRecipeIds, title)
}

function filterByIDList(listData, name) {
    displayRecipes(recipeRepository.filterList(listData), name)
}

function searchByName(name) {
    let baselist = currentUser[currentUser.currentList]
    let filteredRecipes = recipeRepository.filterName(name, baselist)
    let filteredRecipeIds = filteredRecipes.map(recipe => recipe.id)
    displayRecipes(filteredRecipeIds, `${name}`)
}

function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex)
}

currentUser.updateAllRecipes(recipeRepository.getAllIds())
displayTags()
displayRecipes()
displayUsername(currentUser.name)

