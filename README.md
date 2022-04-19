# What's Cookin' Good Looking?


## Table of Contents
- [About the Project](#about-the-project)
- [Contributors](#contributors)
- [Technologies Used](#technologies-used)
- [Organizational Resources](#organizational-resources)
- [Set Up](#set-up)
- [Operating Instructions](#operating-instructions)
- [Application in Action](#application-in-action)
- [Future Goals](#future-goals)
- [Testing](#testing)
- [Extensions Completed](#extensions-completed)


## About the Project 

The goal of this project was to reinforce our understanding of TDD and begin implementing api calls by using fetches to a local server. Our team created a recipe application that can display a multitude of recipes for the user to browse through. While browsing we wanted the user to be able to intuitively navigate the UI with our varied options to filter recipe options. Please check out the application after following the set up. 

The details of this project are outlined in the project spec [here](https://frontend.turing.edu/projects/whats-cookin-part-one.html)


## Contributors

### [Eli Davidson](https://github.com/elleshadow)
### [Rio Foster](https://github.com/friotious)
### [Daniel Neer](https://gist.github.com/DanielN88)

### Project Manger - Jeramiah Black

## Technologies Used

1. JavaScript
2. HTML
3. CSS
4. Mocha and Chai
5. Webpack
6. NPM

## Organizational Resources

The project utilizes a detailed [project board](https://github.com/elleshadow/whats-cookin-starter-kit/projects/1) to facilitate smooth feature implementation.

## Set Up

1. Please start by forking the repo if you would lika a copy of the project for yourself. Then clone down a copy of the files to your machine. If you would like to change the name of the repo just add the argument after the repo url when cloning. 
2. Once cloned cd into the directory and run npm install. This will install the dependencies you need for the project. 
4. Our local server then needs to be installed to correctlly function with our api calls. Please visit this [GitHub page](https://github.com/turingschool-examples/whats-cookin-api) and fork it. Then clone down the files to your local machines. Cd into the directory and run NPM install.
5. To open the webpage run npm start within the directory of this project and run npm start in the whats-cookin-api directory in a seperate terminal. 6. The server and client should now be running. After it has started you can see the webpage address thats running by looking at the section titled "Project is running at http://localhost:8080/" Please copy that web adress into your broswer and it will bring up the functional webpage.
7. If you see the error message prompting you to run "npm audit fix --force" do NOT run this. It will break the application.
8. Once the webpage is open please feel free to browse and ejoy the various recipes and filtering options provided.


## Operating Instructions

Once in the application you will see many options. Each step will outline a feature you can use.

1. In the top right hand corner there is a circular home button that will return you to the main page will all recipes displayed when clicked. The current user logged in will also be displayed next to the button.
2. Clicking on an image will take you to the recipes dashboard. It will display the ingredients needed and the direcitons for making the desired recipe. It will also show the total cost to make the selected recipe at the top of the page. 
3. For every recipe you can click either of the two buttons next to its card to add it to the favorite recipes or recipes to cook. The options to add the recipe to a category is available within the recipe dashboard and on the main recipe display page. 
4. Recipe categories can be filtered by tags. One or many tags can be selected on the left hand side of the main display dashboard. As you select different categories the recipes displayed on page will be reflected and the amount of recipes displayed will be shown at the top of the screen. Next to the filter tab you will also see the pantry tab. Selecting this tab will display all available ingredients the user has in their pantry. 
5. There are 3 over arching recipe filters which are "All Recipes, Favorited Recipes, and Recipes to cook". You can select any of these 3 broad categories and still have the functionality of filtering and searching with these applied. 
6. While any main category and tag are selected you can search for a recipe by name in the top center search box. This box will seach for recipes by name it will display the selected recipes. Each word entered in the search bar will check if its included in any title. The search bar will also return to the all recipe category when it is cleared. 
7. Once you have a recipe selected on the left hand informational side section you can see a pantry tab that has all of your current pantry ingredients and a recipe ingredients tab listing all ingredients you need to cook the meal. It will display a green check if you have enough ingredients and yellow warning if you need more ingredients for the recipe. You then can click the add to cart button below to add all the needed ingredients to the users cart. A red buy button will then appear allowing you to purchase your added ingredients. Once purchased those ingredients will be added to the users pantry and the pantry quantity will be updated. You then may choose to click the cook meal button to make the current meal. All ingredients required for the recipe will be removed from the users pantry and you will be taken back to the home page.

## Application in Action

This is a basic gif demonstration of feature. We will provide a full gif walkthrough after completing basic CSS styling.  
1. Filtering through tags and adding recipes to favorites/ready to cook list. This displays the main page.
![Main Display ](https://user-images.githubusercontent.com/92230099/163878207-0c903b3b-46fe-42d1-81eb-d9c3ab2ff60c.gif)
2. Using the search box to query by name and ingredient.
![User Search](https://user-images.githubusercontent.com/92230099/163878318-a88b6b7f-9f90-4d1a-9500-2baa180fb1d4.gif)
3. This shows the features of checking the users pantry, checking what ingreients are needed for a recipe, purchasing ingredients, and making the reciep.
![User Purchase](https://user-images.githubusercontent.com/92230099/163878377-d96249b5-a2d1-40ca-94ec-72f2488128e5.gif)



## Future Goals

1. Potentially add an infinite scrolling feature if enough recipes are added to the API.
2. Sepeate the DOM minipulation into a seperate file.


## Testing

Mocha and chai are already set up. You may run npm test to check that all the test suites are passing. 

## Extensions Completed

1. Installed 3rd party decimal to fraction formatter, npm [Fracty](https://www.npmjs.com/package/fracty).
2. Application can filter by multiple tags
3. Application can search by names or ingredients.


