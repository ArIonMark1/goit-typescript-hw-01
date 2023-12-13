import { concatenation } from "./concatenation";
var button = document.querySelector('button');
var input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', function () {
        concatenation(input.value, 'hello!');
    });
}
//# sourceMappingURL=index.js.map