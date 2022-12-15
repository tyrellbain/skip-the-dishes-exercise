# APPLICANT INSTRUCTIONS
## SKIPTHEDISHES REACT CHALLENGE
### Introduction
First of all, thank you for applying for SkipTheDishes, we look forward to reviewing this project and giving you the opportunity to work for one of the fastest growing companies in Canada.

This project was created in order to evaluate your current level as a React Developer, in order to discover not only if you're a good fit, but also where you would be most effective in our teams.

Please read the instructions carefully, this project has both objective and subjective evaluations, and we're giving you the freedom to show us your skills.

###  App
This app is a simple data listing app with the "Star Wars" theme. It's meant to be fun to build, at the same time it's fun to evaluate and gives us plenty of opportunities to see your abilities.

You're expected to fix bugs, analyze our architecture and build new features, with very similar task descriptions as you would receive from our Product teams.

### Setup
This is a very simple React application bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It has all standard setups in TypeScript and you should be able to run it without issues following the three base steps:
1. `yarn install` - install dependencies. (please use yarn instead of npm).
2. `yarn test` - run all tests. (not all should pass at the start).
3. `yarn start` - run the project locally.

### Goals
To complete this challenge, you'll need:
1. Complete the list of tasks below.
2. Analyze our architecture, make changes if you believe them right.
3. Be prepared to explain your approaches and reasoning.

### Tasks
This project is divided into two sections, Movies and Characters.

### Movies
The Movies page was already developed, but in the PR process we found bugs.

**This is what was discovered:**

We were told that when you change the language, it's not changing in all places. We noticed that this is happening with the "Details" of each movie when you open the accordion.
- The sorting of movies is not working as intended, they're not being properly sorted.
- The order should be: "Release Date", "Episode", "Name".
- The columns should also be ordered by row, so if the order is Episode, it should be:
  - [Episode 1, Episode 2, Episode 3]
  - [Episode 4, Episode 5, Episode 6]

### Characters
The Characters page is up for development. Please finish it according to the Design.

#### Requirements
- List all characters from the API.
  - https://swapi.dev/documentation#people
- Enable sorting just like the Movies page
  - The order should be: "Name" (asc), "# of Movies" (desc), "Height" (desc).
- Make sure all strings are using i18n and are working in French.
- The app should be responsive according to design.
- Your code should have at least basic unit testing in place.
- We consider “component rendered properly” as basic tests.
- **Tip:** Pay attention to small elements (like the Gender indicator).

### Design

- [Desktop Layout (1400px wide)](https://static.skipthedishes.com/devskiller/characters_desktop.png)
- [Tablet Layout (1024px wide)](https://static.skipthedishes.com/devskiller/characters_tablet.png)
- [Mobile Layout (600px wide)](https://static.skipthedishes.com/devskiller/characters_mobile.png)

### Scoring

The scoring will be based on **objective** and **subjective** points.

The **objective points** are more valuable, and they're based on you completing all of the tasks as described above.

The **subjective points** are counted as a bonus, but they might be what makes us choose between two tied developers. Examples of subjective scores are how well you've made the app responsive, if you're correctly using semantics HTML with accessibility concerns, how precise your are matching the design, how your code is structured, loading indicators, animations on accordion and re-ordering, meta tags, code coverage, pagination or infinite scrolling where needed, and so on.

**As a tip, be aware the code you've received is not the best according to our standards. If you see something we've done that you think should be different, feel free to change it and that might award you extra points, but be prepared to explain why you've done it.**
