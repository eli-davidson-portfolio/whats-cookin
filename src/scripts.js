import './styles.css';
import {ingredients,recipes,usersData} from './apiCalls';
import './images/turing-logo.png'
import RecipeRepository from './classes/RecipeRepository.js';
import User from './classes/User.js';

let fracty = require('fracty');
let recipeRepository = {}
let currentUser = {}
let recipeCardContainer = document.querySelector('.recipe_cards_container')
let detailsInformation = document.querySelector('.details_information')
let recipeDetailsContainer = document.querySelector('.recipe_details_container')
let search = document.querySelector('.search')
let asideTitle = document.querySelector('.aside_title')
let asideTabText = document.querySelector('.aside_Tab_Ingredients_Filter')
let asideList = document.querySelector('.aside_information_list')
let pantryTitle = document.querySelector('.pantry_title')
let pantryList = document.querySelector('.pantry_information_list')
let detailsTitle = document.querySelector('.details_title')
let homeButton = document.querySelector('.home_button')
let username = document.querySelector('.username')
let recipeCategoryButtons = document.querySelector('.nav_action_button_container')
let asideCategoryButtons = document.querySelector(".aside-title-container")

recipeCategoryButtons.addEventListener('click', (event) => {
  if (event.target.name === "recipe_categories") {
    currentUser.setCurrentList(event.target.value, event.target.dataset.category)
    if (recipeCardContainer.classList.contains('hidden')) {
        displayTags()
        search.value = ''
    }
    displayRecipes()
  }
})

asideCategoryButtons.addEventListener('click', (event) => {
  if (event.target.id === 'recipeID_ingredients') {
    pantryList.classList.add('hidden')
    asideList.classList.remove('hidden')
  } else if (event.target.id === 'pantryID_ingredients') {
    asideList.classList.add('hidden')
    pantryList.classList.remove('hidden')
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
        event.target.innerHTML = '&#10084;&#65039;'
    } else if (event.target.classList.contains('toCook_button')) {
        currentUser.addToCook(parseInt(event.target.value))
        event.target.classList.add('notToCook_button')
        event.target.classList.remove('toCook_button')
        event.target.innerHTML = '&#10134;'
    } else if (event.target.classList.contains('unfavorite_button')) {
        currentUser.removeFavorite(parseInt(event.target.value))
        event.target.classList.add('favorite_button')
        event.target.classList.remove('unfavorite_button')
        event.target.innerHTML = '&#129293;'
    } else if (event.target.classList.contains('notToCook_button')) {
        currentUser.removeToCook(parseInt(event.target.value))
        event.target.classList.add('toCook_button')
        event.target.classList.remove('notToCook_button')
        event.target.innerHTML = '&#10133;'
    }
})

homeButton.addEventListener('click', () => {
    document.getElementById("all_recipes").checked = true;
    currentUser.setCurrentList('allRecipes', 'All Recipes')
    search.value = ''
    displayTags()
    displayRecipes()
})

search.addEventListener('keyup', (event) => {
    if (!search.value && recipeDetailsContainer.classList.contains('hidden')) {
        displayRecipes()
    }
    if (event.key === "Enter" && search.value) {
        displayTags()
        displayRecipes()
    }
})

asideList.addEventListener('click', () => {
    displayRecipes()
})

function getSelectedTags() {
    let checkedBoxes = document.querySelectorAll('input[name="tags"]:checked');
    let tags = [];
    checkedBoxes.forEach((checkbox) => {
        tags.push(checkbox.value);
    });
    return (tags.length) ? tags : null;
}

function displayUsername(name) {
    if (!name || (typeof (name) !== 'string')) return
    username.innerText = `${name}?`
}

function displayRecipes() {
    let recipeIds = currentUser[currentUser.currentList];
    let tags = getSelectedTags();
    let query = search.value;
    const recipes = recipeRepository.getRecipes(recipeIds, query, tags);
    if(!!recipes) {
        recipes.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    }

    let plural = 's'
    if (!!recipes && recipes.length === 1) plural = ''
    let title = getTitle(tags, query, plural)

    detailsTitle.innerText = `${recipes.length} ${title}`
    recipeCardContainer.classList.remove('hidden')
    recipeDetailsContainer.classList.add('hidden')
    recipeCardContainer.innerHTML = ''
    recipes.forEach(recipe => {
        recipeCardContainer.innerHTML += createRecipeCard(recipe)
    })
    //Add 3 empty divs to make sure all elements display correctly.
    for (let i = 0; i < 3; i++) {
        recipeCardContainer.innerHTML += `<div class="recipe_card" ></div>`
    }
}

function createFavoriteButton(id) {
    if(!currentUser.favorites.includes(id)) {
        return `<button class="button frosted favorite_button" value=${id}>&#129293;</button>`
    }
    if (currentUser.favorites.includes(id)) {
        return `<button class="button frosted unfavorite_button" value=${id}>&#10084;&#65039;</button>`
    }
}

function createToCookButton(id) {
    if (!currentUser.recipesToCook.includes(id)) {
        return `<button class="button frosted toCook_button" value=${id}>&#10133;</button>`
    }
    if (currentUser.recipesToCook.includes(id)) {
        return `<button class="button frosted notToCook_button" value=${id}>&#10134;</button>`
    }
}

function createRecipeCard(recipe) {
    return `<div class="recipe_card" id="${recipe.id}" >
    <label class="recipe_card_title frosted">${recipe.name}</label>
    <div class="recipe_card_button_container">
    ${createFavoriteButton(recipe.id)}
    ${createToCookButton(recipe.id)}
    </div>
    <img class="recipe_card_image" src=${recipe.image} alt="${recipe.name} image">
    </div>`
}

function showRecipeDetails(id) {
    let result = recipeRepository.getRecipeById(id)
    search.value = ''
    recipeCardContainer.classList.add('hidden')
    createIngredientsList(result.ingredients)
    asideTabText.innerText = "Ingredients"
    currentUser.checkIngredients(result.ingredients)
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
      ingredientsHTML += `<li>${fracty(ingredient.amount)} ${ingredient.unit} ${ingredient.name}</li>`
  })
  ingredientsHTML += `</ul>`
  asideTabText.innerText = 'Ingredients'
  asideList.innerHTML = ingredientsHTML
}

function createPantryList() {
  let userPantry = currentUser.getAllPantry()
  let pantryHTML = '<ul>'
  userPantry.forEach((ingredient) => {
      pantryHTML += `<li>${fracty(ingredient.amount)} ${ingredient.unit} ${ingredient.name}</li>`
  })
  pantryHTML += `</ul>`
  pantryTitle.innerText = 'Pantry'
  pantryList.innerHTML = pantryHTML
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

    asideTabText.innerText = 'Filter'
    asideList.innerHTML = tags
}

function getTitle(tags, query, plural) {

    let title = ''

    if (tags) {
        const firstIndex = 0;
        const lastIndex = tags.length - 1;

        if (tags.length <= 1) {
            title = tags[firstIndex]
        }

        if (tags.length > 1) {
            tags.forEach((tag, index) => {
                if (index === firstIndex) title = tag
                if (index !== firstIndex && index !== lastIndex) title += `, ${tag}`
                if (index === lastIndex) title += `, or ${tag}`
            })
        }
    }

    title += ` recipe${plural}`

    if (!!query) title += `, matching search "${query}"`

    return title;
}

function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex)
}

Promise.all([usersData, ingredients, recipes]).then((values) => {
    recipeRepository = new RecipeRepository(values[2], values[1]);
    const randomIndex = getRandomIndex(values[0].length);
    currentUser = new User(values[0][randomIndex]);
    currentUser.updateAllRecipes(recipeRepository.getAllIds())
    let pantryData = currentUser.getPantryItems()
    let pantryItems = recipeRepository.getPantryItems(pantryData)
    currentUser.fillPantry(pantryItems)
    createPantryList()
    displayTags()
    displayRecipes()
    displayUsername(currentUser.getName())
  });
