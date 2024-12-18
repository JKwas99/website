button = document.getElementsByClassName("hamburger")
sidebar = document.getElementsByClassName("menu")

button[0].addEventListener('click', ()=>{
    button[0].classList.toggle("hamburger-active")
    sidebar[0].classList.toggle("list-active")
})

document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggleBtn = item.querySelector('.toggle-btn');

    question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';
        
        // Zamykamy wszystkie odpowiedzi
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.toggle-btn').forEach(btn => btn.style.transform = 'rotate(0deg)');

        // Otwieramy/zamykamy aktualną
        if (!isOpen) {
        answer.style.display = 'block';
        toggleBtn.style.transform = 'rotate(180deg)';
        } else {
        answer.style.display = 'none';
        }
    });
    });