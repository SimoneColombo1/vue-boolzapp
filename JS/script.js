//< VUE

const{ createApp }= Vue;

createApp({
data(){
return{
    CurrentChat :0,
    NewMessage:"",
    Search:"",

    contacts: [
        {
            name: 'Michele',
            avatar: './img/avatar_1.jpg' ,
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50',
                    
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: './img/avatar_2.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: './img/avatar_6.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Federico',
            avatar: './img/avatar_7.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Davide',
            avatar: './img/avatar_8.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
        }
    ],
   
    LastMessage :0,
   
    

}





}, 
 methods: {
   
   //! Funzione per selezionare la chat
    SelectChat: function(i){
     this.CurrentChat= i;

       console.log(this.CurrentChat);

    },
         
     
 

//% Funzione per inserire un nuovo messaggio nell'array

UserMessage: function(NewMessage){
      //? prendo la data odierna
    let giorno= new Date();
    let gg= giorno.getDate() + "/";

let mm = giorno.getMonth() + 1 + "/";
let aaaa = giorno.getFullYear();

let Hh = giorno.getHours() + ":";
let Mm = giorno.getMinutes() + ":";


const invio={
        date: gg + mm + aaaa+  " " +Hh+Mm,
        message: NewMessage,
        status : 'sent'
       }
          
       
       setTimeout(()=>{
          this.contacts[this.CurrentChat].messages.push({ date: gg + mm + aaaa+  " " +Hh+Mm,
          message: 'okay',
          status : 'received'

          }
          
        
          )




          },1000)
       
       
       
       
       
       
       
       this.contacts[this.CurrentChat].messages.push(invio);

          console.log(invio, this.NewMessage)

},

//> Funzione per la ricerca degli utenti

SearchUser: function(){
    
    
    this.contacts.forEach((element, i) => {
        if (this.contacts[i].name.toLowerCase().includes(this.Search.toLowerCase())) {
            this.contacts[i].visible = true;
            
        } else {
            this.contacts[i].visible = false
            
        }
    });


},








 }


}).mount('#app')