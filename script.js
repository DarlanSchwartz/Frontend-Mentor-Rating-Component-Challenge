let currentRating = null;


function SetActive(btn)
{
    currentRating = Number(btn.getAttribute("id"));
    const ratingBtns = document.querySelectorAll('.rating-btn');
    ratingBtns.forEach(button =>{button.classList.remove('rating-btn-selected')});
    btn.classList.add('rating-btn-selected');
}

function Submit()
{
    if(currentRating == null)
    {
        return;
    }
    
    document.querySelector('.submit-window').classList.add('hide');
    document.querySelector('.thank-you-window').classList.remove('hide');
    document.querySelector('.selection-outcome').innerHTML = `You selected ${currentRating} out of 5`;
}