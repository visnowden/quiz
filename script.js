var answerDivs = document.querySelectorAll('.answers');

answerDivs.forEach(function (answerDiv) {
    answerDiv.addEventListener('click', function () {
        // Remova a cor ciano de todas as divs
        answerDivs.forEach(function (div) {
            div.style.backgroundColor = 'red';
            div.style.color = 'white';
        });

        // Defina a cor ciano apenas na div clicada
        this.style.backgroundColor = 'cyan';
        this.style.color = 'black';
    });
});
