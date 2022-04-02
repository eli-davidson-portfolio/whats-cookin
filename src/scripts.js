import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import RecipeRepository from './classes/RecipeRepository.js';

const recipeRepository = new RecipeRepository;

let recipeCardContainer = document.querySelector('.recipe_cards_container')
let recipeDetailsContainer = document.querySelector('.recipe_details_container')
let search = document.querySelector('.search')
let asideTitle = document.querySelector('.aside_title')
let asideList = document.querySelector('.aside_information_list')
let detailsTitle = document.querySelector('.details_title')
let homeButton = document.querySelector('.home_button')

recipeCardContainer.addEventListener('click', (event) =>{
    if(event.target.parentNode.id) {
        let id = parseInt(event.target.parentNode.id);
        showRecipeDetails(id);
    }
})

homeButton.addEventListener('click', () => {
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
  search.value = ''
  let tag = document.querySelector('input[name="tags"]:checked').value;
  filterByTag(tag)
})


function displayRecipes(recipeList = recipes, title = "") {
    let plural = ''
    if(recipeList.length > 1) plural = 's'
    detailsTitle.innerText = `${recipeList.length} ${title} recipe${plural}.`
    recipeCardContainer.classList.remove('hidden')
    recipeDetailsContainer.classList.add('hidden')
    recipeCardContainer.innerHTML = ''
    recipeList.forEach(recipe => {
      recipeCardContainer.innerHTML += createRecipeCard(recipe)
    })
}

function createRecipeCard(recipe) {
    return `<div class="recipe_card" id="${recipe.id}" >
                <div class="recipe_card_button_container">
                    <button>FAVORITE</button>
                    <button>To Cook</button>
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
    <button>FAVORITE</button>
    <button>To Cook</button>
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
        tags += `<div><input type="radio" id="${tag}" name="tags" value="${tag}">
                <label for="${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</label></div>`
    })

    asideTitle.innerText = 'Tags'
    asideList.innerHTML = tags
}

function filterByTag(tag) {
    displayRecipes(recipeRepository.filterTag(tag), `${tag}`)
}

function filterByIDList(listData, name) {
    displayRecipes(recipeRepository.filterList(listData), name)
}



function searchByName(name) {
    displayRecipes(recipeRepository.filterName(name), `${name}`)
}

const recipes = recipeRepository.getAllRecipes()

displayTags()
displayRecipes()
