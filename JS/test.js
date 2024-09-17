const questions = [
    {
        question:
            "Какое количество элементов в массиве является оптимальным для эффективной работы программы?",
        answers: [
            "10-50 элементов",
            "100-500 элементов",
            "1000-5000 элементов",
            "Не знаю",
        ],
        correctAnswer: "10-50 элементов",
    },
    {
        question: "Какой тип данных в JavaScript не является примитивным?",
        answers: ["Число", "Строка", "Объект", "Не знаю"],
        correctAnswer: "Объект",
    },
    {
        question: "Что такое асинхронность в JavaScript?",
        answers: [
            "Асинхронность - это когда код выполняется одновременно в нескольких потоках",
            "Асинхронность - это когда код выполняется последовательно, один оператор за другим",
            "Асинхронность - это когда код выполняется независимо от основного потока выполнения программы",
            "Не знаю",
        ],
        correctAnswer:
            "Асинхронность - это когда код выполняется последовательно, один оператор за другим",
    },
    {
        question:
            "Какой метод используется для добавления нового элемента в конец массива?",
        answers: ["push()", "pop()", "shift()", "Не знаю"],
        correctAnswer: "push()",
    },
];


let currentQuestion = 0; //Индекс текущего вопроса
let score = 0; //счетчик правильных ответов

// появление блока с тестом
$("#test-start").click(() =>{
    $(".modal-test").fadeIn(800);
})
// закрытие блока
$(".test-block__close").click(()=>{
    $(".modal-test").fadeOut(800);
})

// скрываем тексt и заголовок
$(".test-block__btn").click(() => {
    const btnTest = $(".test-block__btn>.test__link");
    if (btnTest.text() === "Начать тест"){
        $(".test-block__title").css("display", "none");
        $(".test-block__text").css("display", "none");
        showQuestion(currentQuestion, btnTest);
    }

    else if(btnTest.text() === "Следующий вопрос"){
       
        let selectedAnswer = $('input[type="radio"]:checked').next("span").text();
        let curentAnswerText = questions[currentQuestion].correctAnswer;
         if(selectedAnswer === curentAnswerText){
            score++;
         }

         if(selectedAnswer){
             //снимаем выбор с рэдио-кнопок
             $('input[type="radio"]').prop("checked", false);

             currentQuestion++;
             if (currentQuestion < questions.length) {
                 showQuestion(currentQuestion);
             }
             else {
                 $(".test-block__question").text(`Ваш результат: ${score} из ${questions.length}`);
                 $(".test-block__answers").hide();
                 btnTest.text("Завершить тест");
             }
         }
         else{
            alert("Введите значение")
         }
    }

    else if(btnTest.text() === "Завершить тест"){
        $(".modal-test").fadeOut(800);
    }
       
    }) 

function showQuestion(index, btnTest){
    $(".test-block__question").css("display","block").text(questions[index].question);
    $(".test-block__answers").css("display", "flex");
    $(".test-block__variant1+span").text(questions[index].answers[0]);
    $(".test-block__variant2+span").text(questions[index].answers[1]);
    $(".test-block__variant3+span").text(questions[index].answers[2]);
    $(".test-block__variant4+span").text(questions[index].answers[3]);

    btnTest.text("Следующий вопрос");
}
