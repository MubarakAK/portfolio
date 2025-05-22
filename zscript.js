header1 = document.getElementsByClassName("head1")[0]
left = document.getElementsByClassName("left")[0]
lister = document.getElementsByClassName("lister")[0]
container = document.getElementsByClassName("container1")[0]


let infoarr = [['HTML', 'CSS', 'JS'], ['HTML', 'CSS', 'JS'], ['HTML', 'CSS', 'JS'], ['HTML', 'CSS', 'JS'], ['HTML', 'CSS', 'JS'], ['HTML', 'CSS', 'JS'], ['HTML', 'CSS', 'JS'], ['HTML', 'CSS', 'JS'], ['HTML', 'CSS', 'JS'], ['HTML', 'CSS', 'JS'], ['HTML', 'CSS', 'JS'], ['HTML', 'CSS', 'JS']]


// container.addEventListener("hover", ()=>{

//     if(left.style.width=="0px"){
//         left.style.width = '35%';
//         header1.style.display = ''
//         lister.style.display = ''
//     }
//     else{
//         left.style.width = '0';
//         header1.style.display = 'none'
//         lister.style.display = 'none'
//     }
// })

setInterval(() => {

    if(left.style.width=="0px"){
        left.style.width = '35%';
        header1.style.display = ''
        lister.style.display = ''
    }
    else{
        left.style.width = '0';
        header1.style.display = 'none'
        lister.style.display = 'none'
    }

}, 8000);