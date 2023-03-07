    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);

    new JustValidate ('.contacts__call-forms', {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 30,
                strength: {
                    custom: '^[a-zA-Zа-яА-Я]+$'
/*                   custom: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]'*/
                }
            },
            tel: {
                required: true,
                function (name,value)  {
                    const phone = selector.inputmask.unmaskedvalue()
                /*    console.log(phone)*/
                    return Number(phone)&&phone.length === 10
                }
            },
            mail: {    
                required: true,
                email: true
            },

            messages: {
                name: {
                    name: 'Name not valid',
                },
            },
        },
    });

