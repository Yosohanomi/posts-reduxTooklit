
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import Homepage from './pages/Homepage.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Homepage></Homepage>
  </Provider>
)
