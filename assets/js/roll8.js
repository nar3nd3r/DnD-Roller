// Rolls a 8-sided die and highlights the text if it rolls the maximum/minimum value,
// appends that to #dice-sum and adds its value to #result.
function roll8(number) {
    let result;
    for (let n = 0; n < number; n++) {
        result = Math.floor((Math.random() * 8) + 1);
        if (result === 1) {
            $("#dice-sum").append(`<span class="crit-miss">${result}</span> + `);
        } else if (result === 8) {
            $("#dice-sum").append(`<span class="crit-hit">${result}</span> + `);
        } else {
            $("#dice-sum").append(`${result} + `);
        }
        $("#result").html(+$("#result").html() + result);
    }
    return result;
}