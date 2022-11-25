# Team Rocket

## Pokémanaia
https://pokemanaia.herokuapp.com/

## Objective
This was our teams attempt at gamedev in a week. We chose to make a pokemon based game as it had a lot of learning new tech required to make it work, aswell as a lot of room for stretch and additional features we wanted to add.

## Meet the team


Max (Battle team) - Co-product owner/Scrum facilitator [github](https://github.com/max-is-coding)  
Ash (Map team) - Co-product owner [github](https://github.com/ash-fitzgibbon)  
Aaron (Map team) - Git keeper [github](https://github.com/Aaront028)  
JP (Homepage/Auth) - Scrum facilitator/Vibes watcher [github](https://github.com/jp-guiang)  
Elizabeth (Homepage/Auth) - Vibes watcher [github](https://github.com/elizabeth-bing)  

### What's included

This repo includes:


* multiple React components encompassing the Home page of the game (`<App />, <Home />, < Pokemon/>, <Team />`)
* `< Home />` is the parent component of `< Pokemon/> < Team/>`
* `< Home />` uses api endpoints to get a list of first generation Pokemon and then sends that info to the `<Pokemon/>` component
* `< Pokemon/>` component displays the picture of the Pokemon and it's name
* `< Pokemon/>` when hovering over the Pokemon components the user can see Pokemon stats
* each `< Pokemon/>` component is also a button that saves the Pokemon as one of the users team members into a redux state]
* `<Team />` is a simple component that displays the users current team
* simple API endpoints (`/api/apiClient`)
* configuration for Jest and testing library
* configuration for server-side debugging in VS Code
* a client-side tests for all components

#### **From the command line**

```
git clone https://github.com/jp-guiang/pokemanaia.git
cd pokemanaia
npm install
npm run dev
```
* open your browser
* find the server running on [http://localhost:3000](http://localhost:3000).
* enjoy!
* or find it on this url https://github.com/jp-guiang/pokemanaia.git

### Disclaimer
This app was made with fair use in mind for educational purposes and all rights belong to their respective owners.  
This app is not affiliated, endorsed or supported by Nintendo in any way, some images used in this app are copyrighted and supported under fair use, Pokemon and Pokemon character names are trademarks of Nintendo.
