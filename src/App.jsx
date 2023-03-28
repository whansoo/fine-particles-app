import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/common/Layout'
import PartiCles from './pages/PartiCles'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/globalStyle'
import ParticleLike from './components/ParticleLike'
import PartiClesArea from './pages/PartiClesArea'



function App() {

  return (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="particles" element={<PartiCles/>} />
          <Route path="like" element={<ParticleLike/>} />
          <Route path="area" element={<PartiClesArea/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </Provider>
  )
}

export default App
