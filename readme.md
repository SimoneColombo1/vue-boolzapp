Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato


Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco)


----------------------------------------------------------Milestone 1---------------------------------------------------------

Creo la parte grafica della pagina ,metto la sidebar e ci inserisco i contatti usando un v-for.

----------------------------------------------------------Milestone 2---------------------------------------------------------

Creo una variabile active contact e le segno il valore 0, inserisco gli elementi della chat con un v-for seguito da un if else
mettendo come condizione per stampare la chat index === ad active contact, e stampo gli elementi con il contact attivo, poi metto ai contatti sulla sidebar una funzione click che cambia il valore di active contact a seconda di quale contatto clicco.

---------------------------------------------------------Milestone 3-------------------------------------------------------------------------

Creo una variabile con una stringa vuota, poi utilizzando un input con il key up inserisco il testo che verrà preso da una funzione che lo metterà nella variabile vuota , gli verrà messa la variabile sent e poi pushato nell'array. dopo aver cliccato invio partirà un altra funzione con un set timeout di un secondo che stamperà un secondo messaggio con la variabile recieved e che anch'esso verrà pushato nell array.


--------------------------------------------------------Milestone 4----------------------------------------------------------------------------------------

Creo una funzione key up con un for each che all'interno ha un filter per verificare se all interno del nome sono presenti le lettere inserite dall'utente,
una volta verificato do alla variabile visible il valore true se sono presenti le lettere false se no usando un if else, stampo ciò che desidero in pagina dando una classe none agli elementi che non rispecchiano i requisiti.