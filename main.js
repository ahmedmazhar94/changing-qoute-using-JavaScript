const arrayOfQuotes = [
    {'author': '― Dr. Seuss', 
     'quote': 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.'
    },
    {'author': '― Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {'author': '― Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': '― Robert Frost', 
     'quote': 'In three words I can sum up everything I\'ve learned about life: it goes on.'
    },

];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 0);
    document.querySelector('#firstQuote').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#anotherQuote').textContent = `--${arrayOfQuotes[random].author}`;
    
}