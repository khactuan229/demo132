export var isflag;
export var create
export default function validator(options) {
        // lay form members
        var formMember  = document.querySelector('#form')
        console.log('options', options);


        // ham xu ly validate
         function validate(rule, inputElement) {
            var errorInput = inputElement.closest('.form-group').querySelector('.form-message');
            var errorElement = rule.test(inputElement.value)
                  
                    if(errorElement) {
                        errorInput.innerText = errorElement;
                        inputElement.closest('.form-group').classList.add('invalid')
                    }

                    return !!errorElement;
        }

    
    // lap qua rules lay input
    options.rules.forEach(rule => {
        var inputElement = formMember.querySelector(rule.selector)
        var errorInput = inputElement.closest('.form-group').querySelector('.form-message');
            // validate(rule,inputElement)
        

            if(inputElement) {
                inputElement.onblur = () => {
                      validate(rule, inputElement)
                }

                inputElement.oninput = function() { 
                    errorInput.innerText = '';
                    inputElement.closest('.form-group').classList.remove('invalid')
                }
            }

    });

     create = function(){
        var createElement = formMember.querySelector('#create')
                if(createElement) {
                    isflag = false 
                createElement.onclick = function(){
                    options.rules.forEach(rule => {
                var inputElement = formMember.querySelector(rule.selector)
                         var invalid = validate(rule,inputElement) // true(co loi)
                        
                        if(!invalid) {
                            isflag = true
                        }

                        if(isflag) {
                           return true
                        }
                        else{
                            return false
                        }
                    })
                }
            }
        };
        create()

 
} ;






validator.isRequired = function(selector) {
    return {
        selector,
        test:function(value) {
            return value.trim() ? undefined : 'vui long nhap truong nay'
        }
    }
}


validator.isEmail = function(selector) {
    return {
        selector,
        test:function(value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
             return regex.test(value) ? undefined : 'vui long nhap email'
        }
    }
}




validator({ 
    form: '#form',
    rules:[
        validator.isRequired('#fullname'),
        validator.isEmail('#email')
    ]
})


