
function calculate(num1, num2, operator) {
    sum = num1+operator+num2
    console.log(sum)
}

$(document).ready(function () {
    var sum;
    var answer = 0;
    var display = document.getElementById('display');
    display.innerHTML = answer;
    var actions = ['c', '=']
    var operators = ['+', '-', '/', '*']
    $('.btn').on('click', function() {
        var value = this.getAttribute('data-value');
        if(actions.indexOf(value) != -1){
            if (value == 'c') {
                answer = 0;
            }
        } else if (operators.indexOf(value) != -1) {
            if(!num1){
                var num1 = display.innerText;
            }
            var operator = value;
        } else {
            display.innerHTML += value;
        }
            
        
        
    })

})

