const button = document.querySelectorAll('.box')
const body = document.querySelector("body")


button.forEach(function(box){

box.addEventListener('click',function(color){

    if(color.target.id==='box1'){
        body.style.backgroundColor = '#508C9B'
    }
    if(color.target.id==='box2'){
        body.style.backgroundColor = '#677D6A'
    }
    if(color.target.id==='box3'){
        body.style.backgroundColor = '#FFD35A'
    }
    if(color.target.id==='box4'){
        body.style.backgroundColor = '#009FBD'
    }
    if(color.target.id==='box5'){
        body.style.backgroundColor = '#D862BC'
    }
})

})

