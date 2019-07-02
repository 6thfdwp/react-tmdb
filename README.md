This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Main Dependencies

- axios
- react
- react-dom
- react-router-dom

## Project structure

- api  
  Custom hooks combining `useEffect` and `useReducer` to encapsulate movie related api request and return state for different request phases.
  They can be hooked into any component that need to perform side effect, and consume state derived from there. SearchBox is an example.
- movie  
  Screen components for popular movie list and movie detail
- ui  
  Reusable presentational components that can be placed in any container or screen components
- Routes.js  
  Simple declarative client side route mapping
- App.js  
  Top level component to mount routes

## Thoughts on future improvement

Hooks are great for reusable logic, component becomes simple without unnecessary nesting and state binding issues in traditional class component. The best practice need to be investigated when using it for more complex scenario.

Screens need to add error handling for better UX. The error state has already been returned from custom hooks.

SearchBox with the dropdown can be polished to look more visually integrated. Also it is better to add a bit debouncing to control search request when user is typing fast. Maybe combine a debouncing hook?

Static host not recognising client side route. Can let host redirect to index.html when path is not found.
