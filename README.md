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
- [Extensions Completed](#extensions-completed)

## About the Project
"What's Cookin' Good Looking?" is a recipe application that allows users to browse, filter, and interact with a multitude of recipes. The project was created to practice TDD and to begin implementing API calls using fetch to a local server. The detailed project specifications can be found [here](https://frontend.turing.edu/projects/whats-cookin-part-one.html).

## Contributors
- [Eli Davidson](https://github.com/elleshadow)
- [Rio Foster](https://github.com/friotious)
- [Daniel Neer](https://gist.github.com/DanielN88)

Project Manager: Jeramiah Black

## Technologies Used

### Languages
- JavaScript
- Sass (Syntactically Awesome Style Sheets)

### Build Tools
- Webpack
  - webpack-cli
  - webpack-dev-server
- style-loader
- css-loader
- file-loader
- sass-loader

### Testing
- Mocha
- Mochapack
- Chai

### Utilities
- fracty

### Others
- Node.js


## Set Up
To set up the project for local development:
1. Fork the repository and clone it to your machine. Optionally, rename the repository during cloning.
2. Navigate to the directory and run `npm install` to install dependencies.
3. Install the local server for API calls by following instructions on this [GitHub page](https://github.com/turingschool-examples/whats-cookin-api).
4. Run `npm start` within this project's directory and also within the whats-cookin-api directory in separate terminals.
5. Visit `http://localhost:8080/` in your browser to view the application.

**Note:** Do not run "npm audit fix --force" if prompted, as it may break the application.

## Operating Instructions
The application features an intuitive UI where users can:
- Return to the main page by clicking the home button.
- View recipe details and costs by clicking on recipe images.
- Add recipes to favorites or a 'to cook' list.
- Filter recipes by tags and search by name or ingredients.
- Check pantry ingredients against recipe requirements.
- Add missing ingredients to a shopping cart and purchase them.

## Application in Action
Here are some gif demonstrations of the application's features:
1. ![Main Display](https://user-images.githubusercontent.com/92230099/163878207-0c903b3b-46fe-42d1-81eb-d9c3ab2ff60c.gif)
2. ![User Search](https://user-images.githubusercontent.com/92230099/163878318-a88b6b7f-9f90-4d1a-9500-2baa180fb1d4.gif)
3. ![User Purchase](https://user-images.githubusercontent.com/92230099/163878377-d96249b5-a2d1-40ca-94ec-72f2488128e5.gif)

## Future Goals
- Implement infinite scrolling for large recipe collections.
- Separate DOM manipulation into a separate file for cleaner code.

## Testing
Run `npm test` to execute the test suites using Mocha and Chai.

## Extensions Completed
- Integration of Fracty for decimal to fraction conversion.
- Ability to filter by multiple tags.
- Enhanced search functionality by names or ingredients.
