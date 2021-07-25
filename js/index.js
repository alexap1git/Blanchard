window.addEventListener('DOMContentLoaded', function () {

                document.querySelector('.search__realizm').addEventListener('click', function(){
                    document.querySelector('.menu__realizm').classList.toggle('realizm__is-activ')
                })
                document.querySelector('.search__impressianizm').addEventListener('click', function(){
                    document.querySelector('.menu__impressianizm').classList.toggle('impressianizm__is-activ')
                })
                document.querySelector('.search__postimpressianizm').addEventListener('click', function(){
                    document.querySelector('.menu__postimpressianizm').classList.toggle('postimpressianizm__is-activ')
                })
                document.querySelector('.search__avangard').addEventListener('click', function(){
                    document.querySelector('.menu__avangard').classList.toggle('avangard__is-activ')
                })
                document.querySelector('.search__futurism').addEventListener('click', function(){
                    document.querySelector('.menu__futurism').classList.toggle('futurism__is-activ')
                })
                document.querySelector('#burger').addEventListener('click', function(){
                    document.querySelector('#nav-menu').classList.toggle('nav__is-activ')
                    document.querySelector('.header__burger-btn').classList.toggle('burger__is-activ')
                })

})
