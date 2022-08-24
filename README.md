# Flashcard-o-Matic!

![Header](images/flashcard-header.jpg)


## A demonstration of advanced React.js app-building in the form of a popular self-study tool.



Flashcard-o-matic helps students study online. Teachers can use this application to create decks of flashcards for the subjects they teach, and students will study the decks. Cards can be added, edited or even deleted. Same goes for decks. The power of knowledge is in your hands.

This project is designed to demonstrate my ability to work with rendering and state management using React, including the following:

- Installing packages via NPM
- Running tests from the command line
- Writing React function components
- Creating routes, including nested routes, using React Router
- Using hooks like useState(), useParams(), and useHistory()
- Debugging React code through console output and using the VS Code debugger

## Below is a list of tools and concepts used to help implement this webpage

### Single-responsibility principle
A principle that states that each module, function, or component in a program should have responsibility for one single part of the program.

### Reusable Form Components
Forms are very common in web apps. We are going to be creating forms over and over again when working as a developer. What makes React fun is that we can take common patterns like this and turn them into reusable components, making our development life easier and our code shorter.

### Frontend Routing via React Router
React Router is the de facto library for keeping React UI in sync with the URL. It has a simple API with powerful features. When you're building your app in React, React Router can help you make the URL your first thought, rather than an afterthought. As the visitor navigates around the site, they expect the URL to change along with the content on the page. Frontend navigation offers many benefits:

- It allows visitors to bookmark pages.

- It allows visitors to share links to specific content and pages.

- It allows visitors to move forward and backward in their browsing history.

- Routing between views is generally faster than backend routing.

- Smooth transitions and animations between views are easier to implement.

- Breaking up your code by page helps promote modularity.

The ```<Route>``` component may be the most important component in React Router. Its responsibility is to render some UI when its path matches the current URL. Wrapping a component with ```<Route>``` is similar to wrapping it in an if statement. If the URL matches the path property of the route, the component will be rendered.

### The ```useParams()``` hook

The ```useParams()``` hook returns an object of key-value pairs of route parameters. You can use it to access the params of the current ```<Route>```.

### Programmatic navigation

It is common for a web application to automatically go to a different page in response to the visitor's actions. Most often, navigation is triggered by the user clicking a link. Yet, in some situations, the application needs to create, update, or delete some data *before* navigating to the new page. This can be implemented using programmatic navigation, which is navigation that causes a user to be redirected as a result of an event—such as logging in or saving—that occurs on a route

### Nested Routes

Sometimes, as the visitor navigates through the site, you want to change only a small part of the screen, not the entire page. The solution is to use nested routes to display more than one component at the same time. Nested routes, or child routes, are routes displayed inside of another route. This means that there can be more routes inside a component that is rendered by another route.

### The ```useRouteMatch()``` hook

The ```useRouteMatch()``` hook is useful any time that you need to get information about the closest matching ```<Route>``` in the tree. It includes the ```exact```, ```strict```, and ```sensitive``` options, as well as URL parameters.

## The app uses programmatic navigation to display different screens for the users of the flashcard app. A few of these screens are shown below:

## Home Screen - Path: ```/``` 
### Shows a list of decks with options to create, study, view, or delete a deck.

![Home](images/flashcard-home.jpg)

## Study - Path: ```/decks/:deckId/study```
### Allows the user to study the cards from a specified deck, a question is shown first, then the user can "flip" to reveal the answer. At the end of the deck, students have the option to start again from the beginning or to exit the deck and return home.

![Study Q](images/flashcard-decks-deck-study.jpg)
![Study A](images/flashcard-decks-deck-studyanswer.jpg)

## Create Deck - Path: ```/decks/new```
### Allows the user to create a new deck.

![Create Deck](images/flashcards-decks-new.jpg)

## Deck View - Path: ```/decks/:deckId```
### Shows all of the information about a specified deck with options to edit or add cards to the deck, navigate to the study screen, or delete the deck.

![View Deck](images/flashcard-decks-deck.jpg)

## Edit Deck - Path: ```/decks/:deckId/edit```
### Allows the user to modify information on an existing deck.

![Edit Deck](images/flashcard-decks-deck-edit.jpg)

## Add Card - Path: ```/decks/:deckId/cards/new```
### Allows the user to add a new card to an existing deck.

![Add Card](images/flashcard-decks-deck-cards-new.jpg)

## Edit Card - Path: ```/decks/:deckId/cards/:cardId/edit```
### Allows the user to modify information on an existing card

![Edit Card](images/flashcard-decks-deck-cards-card-edit.jpg)

