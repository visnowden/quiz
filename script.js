var answerButtons = document.querySelectorAll(".answers")
          
answerButtons.forEach(function (element) {
  element.addEventListener("click", function () {
    answerButtons.forEach(function (elements) {
        elements.classList.remove("clicked")
      })
    element.classList.add("clicked")
  })
})

function check(){
    var element = document.querySelector(".clicked")
    element.style.backgroundColor = 'blue'
}