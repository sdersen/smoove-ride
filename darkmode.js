const darkSwitch = document.querySelector('.switch');
const headline = document.querySelector('.title')

ligthBUtton.addEventListener('click', () => {
darkButton.classList.remove('change-class');
document.body.style.backgroundColor = '#FFFFFF';
});

darkButton.addEventListener('click', () => {
    darkButton.classList.add('change-class');
    document.body.style.backgroundColor = '#1E1F1C';
    });