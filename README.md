# Todo list app with react, context api and useReducer hook

### React basics

- Build the app with react basics (state and props)

---

### React advanced

- Add useReducer hook ( solution for complex states):
  What is comlex state?
  state with complex data for example array of objects or objects

** Introduce the store concept: **

> Note: When we use useReducer to manage complex state, we create sort of store

> Note: We replace state word with store word when we use useReducer

> Note: The store could hold one reducer or multiple reducers

```js
const [simpleState, setSimpleState] = useState(true);

const [complexState, setComplexState] = useState({ user: "John", age: 20 });
```

- Add context api (solution for prop drilling)
