var numsb = document.getElementsByClassName("num"),
    operationsb = document.getElementsByClassName("operation"),
    clearb = document.getElementsByClassName("clear"),
    resultb = document.getElementById("result"),
    dotb = document.getElementById("dot"),
    display = document.getElementById("display"),
    currentnumber = "0",
    newnumber = false,
    pendingop = " ";
    
for (var i=0; i<numsb.length; i++) {
    var num = numsb[i];
    num.addEventListener('click', function(e) {
        numberpress(e.target.textContent)
    });  
};

for (var i=0; i<operationsb.length; i++) {
    var operation = operationsb[i];
    operation.addEventListener('click', function(e) {
        operationpress(e.target.textContent)
    });
};

for (var i=0; i<clearb.length; i++) {
    var clear = clearb[i];
    clear.addEventListener('click', function(e) {
        clearpress(e.target.id)
    });
};

dotb.addEventListener('click', dotpress);

function numberpress(number) {
    if (newnumber) {
        display.value = number;
        newnumber = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        };
    };
};
function operationpress(op) {
    var localoper = display.value;

    if (newnumber && pendingop !== '=') {
        display.value = currentnumber;
    } else {
        newnumber = true;
        if (pendingop === '+') {
            currentnumber += parseFloat(localoper);
        } else if (pendingop === '-') {
            currentnumber -= parseFloat(localoper);
        } else if (pendingop === '*') {
            currentnumber *= parseFloat(localoper);
        } else if (pendingop === '/') {
            currentnumber /= parseFloat(localoper);
        } else {
            currentnumber = parseFloat(localoper);
        };

        display.value = currentnumber;
        pendingop = op;
    }; 

};

function dotpress() {
    var localdot = display.value;

    if (newnumber) {
        localdot = '0.';
        newnumber = false;
    } else {
        if (localdot.indexOf('.') === -1) {
            localdot += '.';
        };
    };
    display.value = localdot;
};

function clearpress(id) {
    if (id === 'c') {
        display.value = display.value.substring(0, display.value.length - 1);
    } else if (id === 'ac') {
        display.value = '0';
        newnumber = true;
    };
};
