var quotes = [
    {
        quote : "“Be yourself; everyone else is already taken.”" ,
        auther: "― Oscar Wilde",
    },
    {
        quote : "“So many books, so little time.”" ,
        auther: "― Frank Zappa",
    },
    {
        quote : "“A room without books is like a body without a soul.”" ,
        auther: "― Marcus Tullius Cicero",
    },
    {
        quote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" ,
        auther: "― Bernard M. Baruch",
    },
    {
        quote : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”" ,
        auther: "― Dr. Seuss",
    },
    {
        quote : "“You only live once, but if you do it right, once is enough.”" ,
        auther: "― Mae West",
    },
    {
        quote : "“Be the change that you wish to see in the world.”" ,
        auther: "― Mahatma Gandhi",
    },
    {
        quote : "“If you tell the truth, you don't have to remember anything.”" ,
        auther: "― Mark Twain",
    },
    {
        quote : "“To live is the rarest thing in the world. Most people exist, that is all.”" ,
        auther: "― Oscar Wilde",
    },
    {
        quote : "“It is better to be hated for what you are than to be loved for what you are not.”" ,
        auther: "― Andre Gide",
    },
];

var pervRandomNumber;

function getquote(){
    var randomNumber = Math.trunc(Math.random() * quotes.length);
    
    if(randomNumber == pervRandomNumber){
        randomNumber = (randomNumber +1) %  quotes.length;
    }
    
    // console.log(randomNumber);
    pervRandomNumber = randomNumber;

    document.getElementById('quote').innerHTML = quotes[randomNumber].quote;
    document.getElementById('auther').innerHTML = quotes[randomNumber].auther;
};