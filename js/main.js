function  estatisticaSimples(n1,n2,n3) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n3);
 
    
    

     if( n1 >= n2  && n1 >= n2){
         document.write('O valor maior  é: '+ n1 +'<br>');
     } else if (n2 >= n1 && n2 >= n3 ){
         document.write('O valor maior é: ' + n2 +'<br>');
     } else{
         document.write('O valor maior é: ' + n3 +'<br>');
     }

     if(n1 <= n2 && n1 <= n3){
         document.write('O valor menor é: ' + n1 +'<br>');
     } else if( n2 <= n1 && n2 <= n3){
         document.write('O valor menor é : ' + n2 +'<br>');
     } else{
         document.write('O valor menor é: ' + n3 +'<br>');
     }


     var media = (n1 + n2 + n3)/3;
     

     document.write('A média é: ' +  media +'<br>');
}

var n1 = prompt('Digite o valor de A');
var n2 = prompt('Digite o valor de B');
var n3 = prompt('Digite o valor de C');


estatisticaSimples(n1,n2,n3);
