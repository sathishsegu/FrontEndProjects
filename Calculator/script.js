let input = document.getElementById('ipBox');
let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key >= '0' && key <= '9' || ['+', '-', '*', '/','.'].includes(key)) {
        string += key;
        input.value = string;
    } else if (key === 'Enter') {
        input.value = eval(string);
        string = "";
    } else if (key === 'Escape' || key === 'Delete') {
        string = "";
        input.value = string;
    } else if (key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string;
    }
});