const toggleButton= document.getElementById('theme-toggle');
toggleButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
    toggleButton.classList.toggle('dark-theme');
});