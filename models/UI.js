export class UI {

    showQuestion(text){
        const questionTitle = document.getElementById("question")
        questionTitle.innerText = text
    }

    showChoices(choices){
        const choicesContainer = document.getElementById("choices")
        for(let i = 0; i < choices.length; i++){
            const button = document.createElement("button")
            button.innerHTML = choices[i]
            button.className = "button"

            choicesContainer.append(button)
        }
    }

}