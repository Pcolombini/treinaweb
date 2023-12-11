const btn = document.querySelector('button');

const trocaCor = btn.addEventListener('click',function(){
    document.body.style.backgroundColor = 'green';

    btn.addEventListener('click',function() {
        document.body.style.backgroundColor = 'purple';
        
        btn.addEventListener('click',function() {
            document.body.style.backgroundColor = 'red';
        })
    })
})

