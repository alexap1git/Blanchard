window.addEventListener('DOMContentLoaded', function () {
                document.querySelector('.touch-beautiful__alignment').addEventListener('click', function(){
                    document.querySelector('.header__search-input').classList.remove('search__input-revealed')                     
                    document.querySelector('.search_form-mobile').classList.remove('search_form-mobile-revealed')
                    document.querySelector('.header__burger-btn').classList.remove('header__withdraw')
                    document.querySelector('.header__blanchard-link').classList.remove('header__withdraw')
                    document.querySelector('.header__search-form-close').classList.remove('header__search-form-close-activ')
                })
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

                document.querySelector('.search__realizm').addEventListener('click', function(){
                    document.querySelector('.search__realizm').classList.toggle('search__realizm-activ')
/*                    document.querySelector('.search__realizm-activ').addEventListener('click', function(){
                        document.querySelector('.realizm').classList.toggle('search__realizm-visited')
                    })  */
                })
                document.querySelector('.search__impressianizm').addEventListener('click', function(){
                    document.querySelector('.search__impressianizm').classList.toggle('search__impressianizm-activ')
/*                    document.querySelector('.search__impressianizm-activ').addEventListener('click', function(){
                        document.querySelector('.impressianizm').classList.toggle('search__impressianizm-visited')
                    })  */
                })
                document.querySelector('.search__postimpressianizm').addEventListener('click', function(){
                    document.querySelector('.search__postimpressianizm').classList.toggle('search__postimpressianizm-activ')
/*                    document.querySelector('.search__postimpressianizm-activ').addEventListener('click', function(){
                        document.querySelector('.postimpressianizm').classList.toggle('search__postimpressianizm-visited')
                    })  */
                })
                document.querySelector('.search__avangard').addEventListener('click', function(){
                    document.querySelector('.search__avangard').classList.toggle('search__avangard-activ')
/*                    document.querySelector('.search__avangard-activ').addEventListener('click', function(){
                        document.querySelector('.avangard').classList.toggle('search__avangard-visited')
                    })  */
                })
                document.querySelector('.search__futurism').addEventListener('click', function(){
                    document.querySelector('.search__futurism').classList.toggle('search__futurism-activ')
/*                    document.querySelector('.search__futurism-activ').addEventListener('click', function(){
                        document.querySelector('.futurism').classList.toggle('search__futurism-visited')
                    })  */
                })


                document.querySelector('#burger').addEventListener('click', function(){
                    document.querySelector('.nav-menu__adaptiv').classList.toggle('nav__is-activ')
                    document.querySelector('.header__burger-btn').classList.toggle('burger__is-activ')
                    document.querySelector('.nav__enter-link').classList.toggle('nav__enter-link-activ')                    
                })
                               
                document.querySelector('.header__search-label').addEventListener('click', function(){
                    document.querySelector('.header__search-input').classList.add('search__input-revealed')  
                    document.querySelector('.search_form-mobile').classList.add('search_form-mobile-revealed')
                    document.querySelector('.header__burger-btn').classList.add('header__withdraw')
                    document.querySelector('.header__blanchard-link').classList.add('header__withdraw')
                    document.querySelector('.header__search-form-close').classList.add('header__search-form-close-activ')
                })
                document.querySelector('.header__search-form-close').addEventListener('click', function(){
                    document.querySelector('.header__search-input').classList.remove('search__input-revealed')  
                    document.querySelector('.search_form-mobile').classList.remove('search_form-mobile-revealed')
                    document.querySelector('.header__burger-btn').classList.remove('header__withdraw')
                    document.querySelector('.header__blanchard-link').classList.remove('header__withdraw')
                    document.querySelector('.header__search-form-close').classList.remove('header__search-form-close-activ')
                })
                 

})
