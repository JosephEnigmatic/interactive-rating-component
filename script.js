const thankYou = document.querySelector('.thank-you')
const rating = document.querySelector('.rating')
const rateEl = document.getElementById('rating-el')
const btn = document.querySelectorAll('.btn')
const submitBtn = document.querySelector('.submit')
let rate = 0;    

const rateReview = () => {
    if (rate > 0) {
        rateEl.textContent = rate;
        thankYou.classList.toggle('show')
        rating.style.display = 'none'
    }

}


btn.forEach((button) => {
    button.addEventListener('click', () => {
        rate = button.innerHTML
    })
})

submitBtn.addEventListener('click', rateReview)