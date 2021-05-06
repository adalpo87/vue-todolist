/* 
Rifare l’esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni elemento ha due stati (checked o non checked)
- al click dell’elemento avviene il toggle dello status
- al click sulla croce si elimina l’elemento
- clickando sul bottone si aggiunge il contenuto dell’input text solo se è più lungo di 2 caratteri
- se è più corto appare un alert che scompare dopo 2 secondi 
*/

 const app = new Vue({

    el: '#app',
    
    data:{
       alertActive: false,
       str: '',
       toDoList : [

           {
             ToDo: 'Ripassare Html/Css',
             checked: false   
           },
           {
            ToDo: 'Studiare Vue',
            checked: false 
          },
          {
            ToDo: 'Amare Vue',
            checked: true   
          },
          {
            ToDo: 'Alzarsi presto la mattina per ripassare',
            checked: false   
          }

       ] 

    },
    methods:{
        removeTodo(index){
            this.toDoList.splice(index,1);
        },
        addStr(){
            if(this.str.length > 2){
                this.toDoList.push(
                    {
                        ToDo: this.str,
                        checked: false
                    });
                this.str = '';  
            }else{
                this.alertActive = true;
                setTimeout(()=>{
                    this.alertActive = false;
                }, 2000)
            }
        }
        
    }
 });