answerButtons = document.querySelectorAll(".answers")

answerButtons.forEach(function (element) {
  element.addEventListener("click", function () {
    answerButtons.forEach(function (elements) {
      elements.classList.remove("clicked")
    })
    element.classList.add("clicked")
  })
})

function check() {
  element = document.querySelector(".clicked")
  if(element.id.match(answer)){
    console.log('Beleza')

  }else{
    console.log('fake')
  }
}


questionIndex = 0
function loadQuestion() {

  questionIndex++

  title    = document.getElementById("title")
  question = document.getElementById("question")
  answer1  = document.getElementById("answer1")
  answer2  = document.getElementById("answer2")
  answer3  = document.getElementById("answer3")
  answer4  = document.getElementById("answer4")
  answer5  = document.getElementById("answer5")
  justify  = document.getElementById("justify")

  button   = document.getElementById("button")

  fetch('questions.json') // Especifique o nome do arquivo JSON
    .then(response=>{if(!response.ok){throw new Error('Erro na requisição!')}return response.json()})

    .then(data => {
      // Agora você pode trabalhar com os dados como um objeto JavaScript

      title.innerHTML = `${data[(questionIndex)]['id']}. ${data[(questionIndex)]['title']}`
      question.innerHTML = data[(questionIndex)]['question']
      answer1.innerHTML = data[(questionIndex)]['answer1']
      answer2.innerHTML = data[(questionIndex)]['answer2']
      answer3.innerHTML = data[(questionIndex)]['answer3']
      answer4.innerHTML = data[(questionIndex)]['answer4']
      answer5.innerHTML = data[(questionIndex)]['answer5']
      answer            = data[(questionIndex)]['answer']
      justify.innerHTML = data[(questionIndex)]['justify']

      // Por exemplo, você pode acessar propriedades do objeto JSON
      //console.log(data.id)

      // Ou iterar sobre arrays de objetos JSON
      // data.forEach(item => {
      //   console.log(item.id, item.title)
      // })
    })
    .catch(error => {console.error(error)})


    button.onclick = check()
}
loadQuestion()