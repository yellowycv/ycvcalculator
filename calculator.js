let input = document.getElementById("input");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case 'RESET':
                input.value = '';
                break;
            case '←':
                if (input.value) {
                    input.value = input.value.slice(0, -1);
                }
                break;
            case '=':
                try {
                    input.value = eval(input.value);
                } catch {
                    input.value = 'ERROR';
                }
                break;
            default:
                input.value += e.target.innerText;
        }
    });
});
