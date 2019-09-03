import React, { Suspense } from 'react'
import Clock from './components/Clock'
import { Gradient } from 'react-gradient'
import '../assets/stylesheets/App.sass'

const gradients = [
  ['#0F2027', '#203A43'],
  ['#2C5364', '#1E5D8A']
]

function App () {
  return (
      <Gradient
        gradients={gradients}
        property='background'
        duration={5000}
        angle='45deg'
      >
        <div className='app'>
          <Suspense fallback={<p>App is loading...</p>}>
            <Clock />
          </Suspense>
        </div>
    </Gradient>
  )
}

export default App
