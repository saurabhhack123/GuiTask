

function initPlaceHolder(input, defaultValue) {
    input.onfocus = function() {
        if (input.value == defaultValue) {
            input.value = "";
            input.style.color = '#444444';
        }
    };
    function remove(){
        if (input.value == "") {
            input.value = defaultValue;
            input.style.color = '#c9c9c9';
        }
    }
    input.onblur = remove;
    remove();
 }