const specifiedElement = document.getElementById('toggle-btn'),
    inputElement = document.getElementById('toggle'),
    listMenu = document.getElementById('listMenu');

// document.addEventListener('click', function(e) {
//     let isClickInside = specifiedElement.contains(e.target);
//     if (!isClickInside) {
//         if(inputElement.checked){
//             inputElement.checked = false;
//         }
//     } else {
//         e.preventDefault();
//         if(inputElement.checked){
//             inputElement.checked = false;
//         } else {
//             inputElement.checked = true;
//         }
//     }
// });

specifiedElement.addEventListener('click', (e)=>{
    console.log('click');
    if(listMenu.classList.contains('active')){
        listMenu.classList.remove('active');
    }else{
        listMenu.classList.add('active');
    }
    // if(headerContent.classList.contains('active')){
    //     headerContent.classList.remove('active');
    //     navMenu.classList.remove('show');
    // } else {
    //     headerContent.classList.add('active');
    //     navMenu.classList.add('show');
    // }
}, false);