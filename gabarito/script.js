function finalizarQuiz() {
    const form = document.getElementById('quiz-form');
    const respostasCorretas = {
        q1: 'Parasita',
        q2: 'Anthony Hopkins',
        q3: 'Bons Meninos',
        q4: 'Renée Zellweger',
        q5: 'Soul',
        q6: 'Parasita',
        q7: 'Parasita'
    };

    let gabarito = {};
    for (let i = 1; i <= 7; i++) {
        const resposta = form[`q${i}`].value;
        gabarito[`q${i}`] = {
            resposta: resposta,
            correta: resposta === respostasCorretas[`q${i}`]
        };
    }

    localStorage.setItem('gabarito', JSON.stringify(gabarito));
    window.location.href = 'gabarito.html';
}