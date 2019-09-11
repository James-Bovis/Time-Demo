import React, { Suspense } from 'react'
import moment from 'moment'
import Clock from './components/Clock'
import { Gradient } from 'react-gradient'
import '../assets/stylesheets/App.sass'

const hour = moment().format('HH')

const genereateGradients = (hour): Array => {
  if (hour < '12') {
    return (
      [['#1a2a6c', '#b21f1f', '#fdbb2d']]
    )
  }
  else if (hour >= '19') {
    return (
      [['#000000', '#434343', '#434343', '#000000']]
    )
  }
  else if (hour <='19') {
    return (
      [['#2980b9', '#2c3e50', '#2c3e50', '#2980b9', ]]
    )
  }
}

const App = () => {
  return (
      <Gradient
        gradients={genereateGradients(hour)}
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
