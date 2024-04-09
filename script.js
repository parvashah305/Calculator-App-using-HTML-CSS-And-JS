function display(val){
    var result = document.getElementById("result") 
    result.value += val
    
}

function delete1(){
    let result=document.getElementById("result")
    result.value=" "
}

function solve(){
    let a= document.getElementById("result")
    console.log(a)
    let final_result=eval(a.value)
    console.log(final_result)
    a.value =final_result
   
}