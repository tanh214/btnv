function calculate(operation) {
    let result = 0;
    let logText = '';
    let logId = '';

    switch (operation) {
        case 'add':
            const num1Add = parseFloat(document.getElementById('num1Add').value);
            const num2Add = parseFloat(document.getElementById('num2Add').value);
            result = num1Add + num2Add;
            document.getElementById('resultAdd').value = result;
            logText = `${num1Add} + ${num2Add} = ${result}`;
            logId = 'addLog';
            break;

        case 'sub':
            const num1Sub = parseFloat(document.getElementById('num1Sub').value);
            const num2Sub = parseFloat(document.getElementById('num2Sub').value);
            result = num1Sub - num2Sub;
            document.getElementById('resultSub').value = result;
            logText = `${num1Sub} - ${num2Sub} = ${result}`;
            logId = 'subLog';
            break;

        case 'mul':
            const num1Mul = parseFloat(document.getElementById('num1Mul').value);
            const num2Mul = parseFloat(document.getElementById('num2Mul').value);
            result = num1Mul * num2Mul;
            document.getElementById('resultMul').value = result;
            logText = `${num1Mul} * ${num2Mul} = ${result}`;
            logId = 'mulLog';
            break;

        case 'div':
            const num1Div = parseFloat(document.getElementById('num1Div').value);
            const num2Div = parseFloat(document.getElementById('num2Div').value);
            if (num2Div !== 0) {
                result = num1Div / num2Div;
            } else {
                result = 'undefined'; 
            }
            document.getElementById('resultDiv').value = result;
            logText = `${num1Div} / ${num2Div} = ${result}`;
            logId = 'divLog';
            break;
    }

    appendLog(logId, logText);
}

function appendLog(logId, logText) {
    const logElement = document.getElementById(logId);

    // Chưa thực hiện sẽ hiện ra khi web mới tạo hoặc reset
    if (logElement.textContent === 'Chưa thực hiện') {
        logElement.innerHTML = '';
    }

    // nhập số mới sau reset
    const newEntry = document.createElement('p');
    newEntry.textContent = logText;
    newEntry.classList.add('active');

    // bỏ phần cũ khi reset
    logElement.querySelectorAll('p').forEach(entry => {
        entry.classList.remove('active');
    });

    logElement.appendChild(newEntry);
}

// nút reset và các function
function resetCalculations() {
    // Reset each operation log to "Chưa thực hiện"
    document.getElementById('addLog').innerHTML = 'Chưa thực hiện';
    document.getElementById('subLog').innerHTML = 'Chưa thực hiện';
    document.getElementById('mulLog').innerHTML = 'Chưa thực hiện';
    document.getElementById('divLog').innerHTML = 'Chưa thực hiện';

    // Clear the individual result inputs
    document.getElementById('resultAdd').value = '';
    document.getElementById('resultSub').value = '';
    document.getElementById('resultMul').value = '';
    document.getElementById('resultDiv').value = '';

    // Clear the number inputs
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.value = '';
    });
}
