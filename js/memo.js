
// 数字を入力すると、次の項目に遷移。
function moveToNextInput(currentInput) {
    const nextInput = $(currentInput).next('input');
    if (nextInput.length) {
        nextInput.focus();
    }
}
