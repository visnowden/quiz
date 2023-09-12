correctAnswerButtons = document.querySelectorAll(".options")
correctAnswerButtons.forEach(function (element) {
  element.addEventListener("click", function () {
    correctAnswerButtons.forEach(function (elements) {
      elements.classList.remove("clicked")
    })
    element.classList.add("clicked")
  })
})
questionIndex = 19
function loadQuestion() {
  questionIndex++
  title = document.getElementById("title")
  question = document.getElementById("question")
  optionA = document.getElementById("optionA")
  optionB = document.getElementById("optionB")
  optionC = document.getElementById("optionC")
  optionD = document.getElementById("optionD")
  optionE = document.getElementById("optionE")
  explanation = document.getElementById("explanation")
  button = document.getElementById("button")
  fetch("questions.json") /* Especifique o nome do arquivo JSON*/
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na requisição!")
      }
      return response.json()
    })
    .then((data) => {
      console.log(questionIndex)
      if(questionIndex == data.length){button.style.display = 'none';questionIndex = 0}
      /* Agora você pode trabalhar com os dados como um objeto JavaScript*/
      title.innerHTML = `${data[questionIndex]["id"]}. ${data[questionIndex]["title"]}`
      question.innerHTML = data[questionIndex]["question"]
      optionA.innerHTML = data[questionIndex]["optionA"]
      optionB.innerHTML = data[questionIndex]["optionB"]
      optionC.innerHTML = data[questionIndex]["optionC"]
      optionD.innerHTML = data[questionIndex]["optionD"]
      optionE.innerHTML = data[questionIndex]["optionE"]
      correctAnswer = data[questionIndex]["correctAnswer"]
      explanation.innerHTML =
        data[questionIndex][
          "explanation"
        ] /* Por exemplo, você pode acessar propriedades do objeto JSON*/ /*console.log(data.id)*/ /* Ou iterar sobre arrays de objetos JSON*/ /* data.forEach(item => {*/ /*   console.log(item.id, item.title)*/ /* })*/
    })
    .catch((error) => {
      console.error(error)
    })
  button.onclick = function () {
    var element = document.querySelector(".clicked")
    var logs = document.getElementById("logs")
    if (element !== null) {
      if (element.id == correctAnswer) {
        msg(logs, "Boa Truta!!!")
        button.textContent = "Próxima"
        explanation.style.display = "flex"
        button.onclick = function () {
          loadQuestion()
          button.textContent = "Confirmar"
          explanation.style.display = "none"
          element.classList.remove("clicked")
        }
      } else {
        msg(logs, "Errou Vacalo!!!")
      }
    } else {
      msg(logs, "Por favor, escolha uma alternativa!")
    }
  }
}
function msg(element, text) {
  element.innerText = text
  element.classList.remove("hidden")
  setTimeout(function () {
    element.classList.add("hidden")
  }, 2000)
}
loadQuestion()
