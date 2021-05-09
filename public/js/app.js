'use strict';

$(function() {
    // alert( 'ready!' );
    
    $('.next').on('click', function() {
        alert('next');
        hadithIndex == 299 ? hadithIndex = 0 : hadithIndex++ ;
 
    });
    
    $('.prev').on('click', function() {
        alert('prev');    
        hadithIndex == 0 ? hadithIndex = 299 : hadithIndex-- ;

    });

    // display the date
    const d = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById("timeNow").innerHTML =`Today Date : ${d.getFullYear()}-${months[d.getMonth()]}-${d.getDate()}`
// -------------------------------------------

//     const sections = $('section');
//     const links = [$('header ul li')];
// console.log(links);
//     links.forEach(link => {
//     console.log(link);
//     link.on('click', function(){
//         $('.header ul li.active').removeClass('active');
//         link.addClass('active');
//         const target = link.dataset.filter;
//         console.log(target);
//     });

// })
});

// links for nav bar
// const sections = document.querySelectorAll('section');
// const links = document.querySelectorAll('header ul li');
// console.log(links);
// links.forEach(link => {
//     console.log(link);
//     link.addEventListener('click', ()=>{
//         document.g('.header ul li.active').classList.remove('active');
        // link.classList.add('active');
        // const target = link.dataset.filter;
        // console.log(target);
        // sections.forEach(section => {
        //     if (section.classList.contains(target)){
        //         section.scrollIntoView()
        //     }
        // })
//     })


// const months = ["محرم","صفر","ربيع الأول","ربيع الآخر","جمادى الأولى","جمادى الآخرة","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"]