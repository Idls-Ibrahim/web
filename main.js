const navClick = document.querySelector('.click');
const listBar = document.querySelector('.nav-bar');
const btnImg = document.querySelector('.btn');
const btnValue = document.querySelector('.btn a');
const imgHidden =  document.querySelectorAll('.hidden');
const projectImg = document.querySelector(".project-img");
const submitBtn = document.querySelector('.contact button');
const inputEmail = document.querySelector('.email');
const inputText = document.querySelector('.text');
const textAera = document.querySelector('textarea');
navClick.addEventListener('click', ()=>{
    listBar.classList.toggle('open');
    listBar.style.cssText = "transition: 1s ease;";
    navClick.classList.toggle("move");
    navClick.style.cssText = "transition: 1s ease;";
});
window.onscroll = ()=>{
    listBar.classList.remove('open');
    navClick.classList.remove("move");
}

btnImg.addEventListener('click', ()=>{
    imgHidden.forEach((img)=>{
        img.classList.toggle('hidden');
        img.style.cssText = "transition: 1s ease;";
    });
    projectImg.classList.toggle('grid-tempelat');
    if(btnValue.textContent === "عرض المزيد"){
    btnValue.innerHTML = 'عرض اقل';
    }
    else{
    btnValue.innerHTML = 'عرض المزيد';
    }
});
submitBtn.onclick = ()=>{
    if(inputEmail.value === "" || inputText.value === "" || textAera.value === "" ){
        alert("املاء جميع الخانات");
    }
    else{
        window.location.reload(0);
        alert('شكرا على تعليقك');
    }
    
}