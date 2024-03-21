# React Hooks :)

Hello, everyone! Today we got to take a dive into React hooks!

- [notes](https://github.com/connkat/)

### TODO

- [] Introductions
- [] React
- [] `create-react-app`
- [] components
- [] closures, a review
- [] state
- [] props

## What is React?

- framework (front-end framework)
- made by facebook
- javascript library
- spa (single page application)

### React

- From the landing page of [React](https://reactjs.org/):
  - A JavaScript library for building user interfaces
- Open source project maintained by Facebook
- React is built around the concept of managing data
  - Changes to the underlying data result in changes to the UI
  - In React, state === data
- Component-based: UI is composed of small pieces
- Declarative: We describe the final outcome of our code and not the step-by-step process to achieve that result

### Components

- Components are the building blocks of a webpage (eg. search input, navigation bar, contact us form)
- Ideally, components should be reusable (which means that their state should be passed into them via props rather than maintaining their own state)
- We will be building all of our components using functions
- The functions return value contains a mixture of HTML and JS; React calls this `JSX`

```jsx
// basic component
import React from "react";

const MyComponent = () => {
	return (
		<div className="my-component">
			<h1>Hello World</h1>
		</div>
	);
};

export default MyComponent;
```

### Review of Closures

- From MDN:
  > A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function **creation** time.
- In other words, functions remember where they were declared and what variables were in scope (they had access to) at the time they were declared
- This allows us to preserve _state_ in between function calls (subsequent calls to the function can use the updated state value)
- Contrasting with JS Classes (how we used to create React components): components as objects were instantiated from a Class and it was the same object that was used over and over again. Therefore it always had access to its own internal state. Functional components need some way of creating a _closure_ so that we can achieve the same result.
- Enter `useState`, `useEffect`, and other `use` functions which keep track of state for us between function calls and allow us to retrieve and edit variables every time the function is invoked (eg. the component is created/updated)

### useState

- State (data) is created in a component by using the `State` hook (`useState`)
- `useState` takes an initial value for state which will be used on the first render
- `useState` returns the current value of state and a function (a way to set the value), aka the getting and the setter

```js
// it's common to destructure the return value from useState
const [username, setUsername] = useState("");
```

#### NOTE: We need to use `useState` to keep track of our data so that React will know when changes occur

### Props
Props are used to pass things down from parent to child. A component is only aware of what we tell it, so React uses props to pass down thing information that it needs. Parent components are often responsible for maintaining state and making changes to state that will affect children. 

### Side Effects

- Question: can someone explain what a side effect is? 
(I'll update these notes with the answer after)

### useEffect

- `useEffect` is a hook that allows you to perform side effects from a functional component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` lifecycle methods in React classes, but is unified into a single API. In other words, it decouples rendering form side effects.

- useEffect takes two params:
	- A function
	- An array of dependencies (optional)

```
useEffect(() => {

},[${dependency}])
```

- Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That's the sole purpose of useEffect().
- useEffect(callback, dependencies) invokes the callback after initial rendering (mounting), and on later renderings, if any value inside dependencies has changed.

### Useful Links

- [ReactJS Docs](https://reactjs.org/docs/getting-started.html)
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Medium: useState ](https://medium.com/@aryanyash999/all-you-need-to-know-about-react-hooks-usestate-2d493f1be3d9)
- [Medium: useEffect](https://medium.com/@dev-john-nguyen/how-to-useeffect-in-react-97c4e6dc0a88)
- [Infinite Loop issue](https://dmitripavlutin.com/react-useeffect-infinite-loop/)
