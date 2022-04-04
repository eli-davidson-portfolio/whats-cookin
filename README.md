# What's Cookin' Good Looking?


## Table of Contents
- [About the Project](#about-the-project)
- [Contributors](#contributors)
- [Technologies Used](#technologies-used)
- [Set Up](#set-up)
- [Operating Instructions](#operating-instructions)
- [Application in Action](#application-in-action)
- [Future Goals](#future-goals)
- [Testing](#testing)


## About the Project 

The goal of this project was to reinforce our understanding of TDD and begin implementing api calls by using fetches. Our team created a recipe application that can display a multitude of recipes for the user to browse through. While browsing we wanted the user to be able to intuitively navigate the UI with our varied options to filter recipe options. Please check out the application after following the set up. 

The details of this project are outlined in the project spec [here](https://frontend.turing.edu/projects/whats-cookin-part-one.html)


## Contributors

### Eli Davidson
### Rio Foster
### Daniel Neer

### Project Manger - Jeramiah Black


## Technologies Used

1. JavaScript
2. HTML
3. CSS
4. Mocha and Chai
5. Webpack
6. NPM


## Set Up

1. Please start by forking the repo if you would lika a copy of the project for yourself. Then clone down a copy of the files to your machine. If you would like to change the name of the repo just add the argument after the repo url when cloning. 
2. Once cloned cd into the directory and run npm install. This will install the dependencies you need for the project. 
3. To open the webpage run npm start to begin running the server. After it has started you can see were the webpage is running by looking at "Project is running at http://localhost:8080/" Please copy that web adress into your broswer and it will bring up the functional webpage.
4. If you see the error message prompting you to run "npm audit fix --force" do NOT run this. It will break the application.
5. Once the webpage is open please feel free to browse and ejoy the various recipes and filtering options provided.


## Operating Instructions

Once in the application you will see many options. Each step will outline a feature you can use.

1. In the top right hand corner there is a circular home button that will return you to the main page will all recipes displayed when clicked. The current user logged in will also be displayed next to the button.
2. Clicking on an image will take you to the recipes dashboard. It will display the ingredients needed and the direcitons for making the desired recipe. It will also show the total cost to make the selected recipe at the top of the page. 
3. For every recipe you can click either of the two buttons next to its card to add it to the favorite recipes or recipes to cook. The options to add the recipe to a category is available within the recipe dashboard and on the main recipe display page. 
4. Recipe categories can be filtered by tags. One or many tags can be selected on the left hand side of the main display dashboard. As you select different categories the recipes displayed on page will be reflected and the amount of recipes displayed will be shown at the top of the screen
5. There are 3 over arching recipe filters which are "All Recipes, Favorited Recipes, and Recipes to cook". You can select any of these 3 broad categories and still have the functionality of filtering and searching with these applied. 
6. While any main category and tag are selected you can search for a recipe by name in the top right hand corner search box. This box will seach for recipes by name it will display the selected recipes. Each word entered in the search bar will check if its included in any title. The search bar will also return to the all recipe category when it is cleared. 


## Application in Action

Screenshot provided of application, full gif walkthroughs will be provided after full CSS styling in round 2 of the project. 
![Screen Shot 2022-04-03 at 4 49 33 PM](https://user-images.githubusercontent.com/92230099/161454421-67aa1c22-c97d-4ef7-aa02-de7d21bfe976.png)


## Future Goals

1. Potentially add an infinite scrolling feature if enough recipes are added to the API.
2. Add a third party extension to properly convert the unit and amount measurement to the proper display names. Example c to be displayed as Cups. Also ".25 cup" to "1/4 cup".


## Testing

Mocha and chai are already set up. You may run npm test to check that all the test suites are passing. 
