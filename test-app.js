  /* global data */
  function init () {
    let group, value
    let sCounter = 0
    let eCounter = 0

    const successCounter = document.querySelector('#successCounter')
    const errorCounter = document.querySelector('#errorCounter')
    const input = document.querySelector('#input')
    const question = document.querySelector('#question')
    const error = document.querySelector('#error')
    const success = document.querySelector('#success')

    function newVal () {
      group = data[Math.floor(Math.random() * data.length)]
      value = group[1][Math.floor(Math.random() * group[1].length)]
      question.innerHTML = value
      console.log(group, value, Math.floor(Math.random() * data[1].length))
    }

    data.forEach(e => {
      const option = document.createElement('option')
      option.value = option.innerHTML = e[0]
      input.appendChild(option)
    })

    window.onSubmit = () => {
      if (group[0] === input.value) {
        sCounter++
        error.style.display = 'none'
        success.style.display = 'block'
        input.value = ''
        newVal()
      } else {
        eCounter++
        sCounter = 0
        error.style.display = 'block'
        success.style.display = 'none'
      }

      successCounter.innerHTML = sCounter
      errorCounter.innerHTML = eCounter
    }

    newVal()
  }

  window.addEventListener('DOMContentLoaded', init)
