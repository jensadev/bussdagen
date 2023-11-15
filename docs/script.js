window.onload = function () {
  const button = document.querySelector('#count-button')
  const counter = document.querySelector('#counter')
  button.addEventListener('click', function () {
    counter.textContent = parseInt(counter.textContent) + 1
  })
}
