import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/common/Layout'
import PartiCles from './pages/PartiCles'




function App() {

  return (
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="particles" element={<PartiCles/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </Provider>
  )
}

export default App
