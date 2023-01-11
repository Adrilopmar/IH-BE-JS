let num1 =0
let num2 =0
let total = 0
let operator = ''

const inputNum= (data)=>{
    if(operator ==''){
    switch(data){
        case '+':
            operator = '+'
            break;
        case '-':
            operator = '-'
            break;
        case '*':
            operator = '*'
            break;
        case '/':
            operator = '/'
            break;
        case 'c':
            num1 = 0
            num2=0
            operator=''
            document.getElementById('screen').innerHTML= num1
            break;
        case '=':
            break;
        default:
            num1 +=data
            document.getElementById('screen').innerHTML= parseInt(num1)
    }
}
else{
    switch(data){
        case '+':
            break;
        case '-':
            break;
        case '*':
            break;
        case '/':
            break;
        case 'c':
            num1 = 0
            num2=0
            operator= ''
            document.getElementById('screen').innerHTML= num1
            break;
        case '=':
            calculate(operator)
            num2=0
            operator=''
            break;
        default:
            num2 +=data
            document.getElementById('screen').innerHTML= parseInt(num2)
    }
}
} 

const calculate =(operator)=>{
    switch(operator){
        case '+':
            total =  parseInt(num1) + parseInt(num2)
          document.getElementById('screen').innerHTML= parseInt(num1) + parseInt(num2)
          break;
        case '-':
            total =  parseInt(num1) - parseInt(num2)
            document.getElementById('screen').innerHTML= parseInt(num1) - parseInt(num2)
          break;
        case '*':
            total =  parseInt(num1) * parseInt(num2)
            document.getElementById('screen').innerHTML= parseInt(num1) * parseInt(num2)
          break;
        case '/':
            total =  parseFloat(num1) / parseFloat(num2)
            document.getElementById('screen').innerHTML=  (parseInt(num1) / parseInt(num2))
          break;
    }
    num1=total
}

document.querySelectorAll('button').forEach(el=>el.addEventListener('click',()=>{
    inputNum(el.value)
}))