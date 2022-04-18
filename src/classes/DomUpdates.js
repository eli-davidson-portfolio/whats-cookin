class DomUpdates {
    constructor() { 
        this.recipeCardContainer = document.querySelector('.recipe_cards_container')
        this.detailsInformation = document.querySelector('.details_information')
        this.recipeDetailsContainer = document.querySelector('.recipe_details_container')
        this.search = document.querySelector('.search')
        this.asideTitle = document.querySelector('.aside_title')
        this.asideList = document.querySelector('.aside_information_list')
        this.detailsTitle = document.querySelector('.details_title')
        this.homeButton = document.querySelector('.home_button')
        this.username = document.querySelector('.username')
        this.recipeCategoryButtons = document.querySelector('.aside_action_button_container')

        this.recipeCategoryButtons.addEventListener('click', (event) => {
            if (event.target.name === "recipe_categories") {
                currentUser.setCurrentList(event.target.value, event.target.dataset.category)
                if (this.recipeCardContainer.classList.contains('hidden')) {
                    this.displayTags()
                    this.clearSearch()
                }
                this.displayRecipes()
            }
        })

        this.detailsInformation.addEventListener('click', (event) => {
            //if clicking on a picture
            if (event.target.parentNode.id) {
                let id = parseInt(event.target.parentNode.id);
                this.showRecipeDetails(id);
            }
            //if clicking on a button
            if (event.target.classList.contains('favorite_button')) {
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

        this.homeButton.addEventListener('click', () => {
            document.getElementById("all_recipes").checked = true;
            currentUser.setCurrentList('allRecipes', 'All Recipes')
            this.clearSearch()
            this.displayTags()
            this.displayRecipes()
        })

        this.search.addEventListener('keyup', (event) => {
            if (!this.getSearchValue && this.recipeDetailsContainer.classList.contains('hidden')) {
                this.displayRecipes()
            }
            if (event.key === "Enter" && search.value) {
                this.displayTags()
                this.displayRecipes()
            }
        })

        this.asideList.addEventListener('click', () => {
            this.displayRecipes()
        })

    }

    clearSearch() {
        this.search.value = ''
    }

    getSearchValue() {
        return this.search.value;
    }

    getSelectedTags = function() {
        let checkedBoxes = document.querySelectorAll('input[name="tags"]:checked');
        let tags = [];
        checkedBoxes.forEach((checkbox) => {
            tags.push(checkbox.value);
        });
        return (tags.length) ? tags : null;
    }

    displayUsername = function(name) {
        if (!name || (typeof (name) !== 'string')) return
        this.username.innerText = `${name}?`
    }

    displayRecipes = function(recipeCards, title = '') {
        console.log(recipeCards)
        this.recipeCardContainer.innerText = recipeCards;
        console.log(this.recipeCardContainer)
        this.recipeDetailsContainer.classList.add('hidden');
        this.detailsTitle.innerText = title;
        console.log(this.detailsTitle.innerText, title)
        //Add 3 empty divs to make sure all elements display correctly.
        // for (let i = 0; i < 3; i++) {
        //     this.recipeCardContainer.innerHTML += `<div class="recipe_card filler" ></div>`
        // }
        this.recipeCardContainer.classList.remove('hidden');
        console.log(this.recipeCardContainer.innerHTML)
    }

    displayTags = function(tags) {
        this.asideTitle.innerText = 'Filter';
        tags.forEach((tag) => {
            this.asideList.innerHTML += `<div><input type="checkbox" id="${tag}" name="tags" value="${tag}">
                    <label for="${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</label></div>`
        });
    }

    displayIngredientsList = function(ingredients) {
        let ingredientsHTML = '<ul>'
        ingredients.forEach((ingredient) => {
            ingredientsHTML += `<li>${fracty(ingredient.amount)} ${ingredient.unit} ${ingredient.name}</li>`
        })
        ingredientsHTML += `</ul>`
        this.asideTitle.innerText = 'Ingredients'
        
    }

    displayIngredients = () =>{
        asideList.innerHTML = ingredientsHTML;
    }    

    showRecipeDetails = function(id) {
        this.recipeCardContainer.classList.add('hidden')
        this.clearSearch();

        let result = recipeRepository.getRecipeById(id)
        this.displayIngredientsList(result.ingredients)
        this.detailsTitle.innerHTML = `${result.name}</br>Total cost: $ ${result.totalCost.toFixed(2)}`;
        this.recipeDetailsContainer.innerHTML = `
        <img class="recipe_details_image" src="${result.image}" alt="${result.name} image">
        <section class="recipe_instructions_containter scrollable">
             <ol>
                ${createInstructionsList(result.instructions)}
            </ol>
        </section>
        <div class="recipe_card_button_container">
            ${createFavoriteButton(id)}
            ${createToCookButton(id)}
        </div>`

        this.recipeDetailsContainer.classList.remove('hidden')
    }
}


        
export default DomUpdates;