document.getElementById('calculateBtn').addEventListener('click',
    function() {
        let burgerName = document.getElementById('burgerName').value;
        if (burgerName == '') {
            alert('Inserisci il nome del panino');
        } else {
           let ingredients = document.getElementsByClassName('ingredient');
           let total = 3;
           for ( let i = 0; i < ingredients.length; i++ ) {
               if (ingredients[i].checked) {
                   total = total + parseInt(ingredients[i].value);
               }
           }
           let discountCode = document.getElementById('discountCode').value;
           if ( coupon.includes(discountCode) ) {
               total = total * 0.7;
           }
           document.getElementById('price').innerHTML = total;
        }
    }
)

let coupon = ['asso', 'fante', 'cavallo', 're']