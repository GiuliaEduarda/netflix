
let boxBuscar = document.querySelector('.buscarbox');
let lupa = document.querySelector('.lupabuscar');



lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
})
var rect = obj.getBoundingClientRect('.buscarbox');



window.addEventListener('scroll', function(){
    let header = document.querySelector('.header');
    header.classList.toggle('scroll', window.scrollY > 0);

})