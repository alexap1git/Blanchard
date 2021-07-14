window.addEventListener('DOMContentLoaded', function () {

                document.querySelector('.search__realizm').addEventListener('click', function(){
                    document.querySelector('.is-activ').classList.remove('is-activ')
                    document.querySelector('.menu__realizm').classList.toggle('is-activ')
                })
                document.querySelector('.search__impressianizm').addEventListener('click', function(){
                    document.querySelector('.is-activ').classList.remove('is-activ')
                    document.querySelector('.menu__impressianizm').classList.toggle('is-activ')
                })
                document.querySelector('.search__postimpressianizm').addEventListener('click', function(){
                    document.querySelector('.is-activ').classList.remove('is-activ')
                    document.querySelector('.menu__postimpressianizm').classList.toggle('is-activ')
                })
                document.querySelector('.search__avangard').addEventListener('click', function(){
                    document.querySelector('.is-activ').classList.remove('is-activ')
                    document.querySelector('.menu__avangard').classList.toggle('is-activ')
                })
                document.querySelector('.search__futurism').addEventListener('click', function(){
                    document.querySelector('.is-activ').classList.remove('is-activ')
                    document.querySelector('.menu__futurism').classList.toggle('is-activ')
                })
   

})
