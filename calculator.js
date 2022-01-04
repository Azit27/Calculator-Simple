
document.addEventListener("DOMContentLoaded", function(event){
    let body = document.querySelector('body');
    let result = document.querySelector('#result');

    let clear = document.querySelector('#clear');
    let operand = document.querySelector('#operand');
    let equalto = document.querySelector('#equalto');
    let numdelete = document.querySelector('#delete-num');
    let Normal_btn = document.querySelectorAll("#Normal-btn");


    let initial_value = "";

    Normal_btn.forEach((Normal_btn, index)=>{
        Normal_btn.addEventListener('click', function(){
            let text = this.innerHTML;
            initial_value += text;
            result.innerHTML =  initial_value;
        });
       
    });


    /*equal to button action*/

    equalto.addEventListener('click', function(){
        if(result.innerHtML != ""){
            operand.innerHTMl = result.innerHTML;
            result.innerHTML = eval(result.innerHTML);
            initial_value = eval(result.innerHTML);

        }
        else{
            alert('Please Enter any Number');
        }
    });


    /*clear all number*/
    clear.addEventListener('click', function(){
        result.innerHTML = "";
        initial_value = "";
    });


    /*delete single number*/

    numdelete.addEventListener('click', function(){
        result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length-1);
        initial_value = result.innerHTML;
    });




});
