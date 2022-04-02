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
let recipeDetailsContainer = document.querySelector('.recipe_details_container')
let search = document.querySelector('.search')
let asideTitle = document.querySelector('.aside_title')
let asideList = document.querySelector('.aside_information_list')
let detailsTitle = document.querySelector('.details_title')
let homeButton = document.querySelector('.home_button')
let username = document.querySelector('.username')

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
  let checkedBoxes = document.querySelectorAll('input[name="tags"]:checked');
  let tags = [];
    checkedBoxes.forEach((checkbox) => {
        tags.push(checkbox.value);
    });
    if (tags.length) {
        filterByTag(tags)
    } else {
        displayRecipes()
    }
})

function displayUsername(name) {
    if (!name || (typeof (name) !== 'string')) return
    username.innerText = `${name}?`
}

function displayRecipes(recipeList = recipes, title = "") {
    let plural = ''
    if(recipeList.length !== 1) plural = 's'
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

    displayRecipes(recipeRepository.filterTag(tags), title)
}

function filterByIDList(listData, name) {
    displayRecipes(recipeRepository.filterList(listData), name)
}

function searchByName(name) {
    displayRecipes(recipeRepository.filterName(name), `${name}`)
}

function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex)
}

const recipes = recipeRepository.getAllRecipes()


displayTags()
displayRecipes()
displayUsername(currentUser.name)
