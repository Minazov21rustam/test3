class Message {

    author;
    body;
    time;

    constructor(author, body){
        this.author = author;
        this.time = gettime();
        this.body = body;
    }

    show(){
        let historyElem = document.getElementById('history');
        historyElem.innerHTML = historyElem.innerHTML + this.toHtml();
    }

    toHtml(){
        return `<p>${this.time} ${this.author}: ${this.body}</p>`;
    }

}

class Messenger{

    messages = [];

    send(author, text){
        this.messages.push(new Message(author, text));
    }

    show_history(){
        let historyElem = document.getElementById('history');
        historyElem.innerHTML = '';
        this.messages.forEach(message => {
            message.show();
        });
    }

}

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

function sendMessage(){

    let autorName = document.getElementById('name');
    let textName = document.getElementById('message');

    let author = autorName.value;
    let text = textName.value;

    if(!author || !text){
       alert("текст сообщения.");
       return;
    }

    messenger.send(author, text);

    autorName.value = '';
    textName.value = '';
}

function showHistory(){
    messenger.show_history();
}

let messenger = new Messenger();