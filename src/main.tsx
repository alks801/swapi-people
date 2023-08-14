import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store"
import { peopleApi } from "./store/services/people.ts"
import App from "./App.tsx"
import "normalize.css"
import { BrowserRouter } from "react-router-dom"

// fetch first page of people before react mounting for better ux
store.dispatch(peopleApi.endpoints.getAllPeople.initiate(1))

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
