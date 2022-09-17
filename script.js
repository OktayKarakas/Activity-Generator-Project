document.getElementById('button').addEventListener('click', function () {
  fetch('http://www.boredapi.com/api/activity/')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('ideaToDo').textContent = data.activity
    })
})
