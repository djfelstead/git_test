const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975']; // declare array of contacts
const para = document.querySelector('p'); // declare constant variable named para, store value as content of <p>
const input = document.querySelector('input'); // declare constant variable named input and store value as content of <input>
const btn = document.querySelector('button'); // declare const and 

btn.addEventListener('click', () => // when button is clicked do all of the below
{
    const searchName = input.value.toLocaleLowerCase(); // store variable named 'searchName' 
    input.value = ''; // reset
    input.focus();
    para.textContent = '';
    for (const contact of contacts) {
        const splitContact = contact.split(':');
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is 
            ${splitContact[1]}.`;
            break;
        }
    }
    if (para.textContent === '') {
        para.textContent = 'Contact not found.';
    }
});
