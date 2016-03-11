import React from 'react'
import { render } from 'react-dom'
import Root from './containers/root'
import configureStore from './store/configure-store'

// Add style to the application
import '../style/normalize.css'
import '../style/skeleton.css'
import '../style/main.css'

const store = configureStore()

// This is where we connect index.html to everything else
render(
  <Root store={store} />,
  document.getElementById('root')
)
