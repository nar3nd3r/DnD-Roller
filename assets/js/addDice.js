// Adds 1 die to the respective row of dice clicked.
function addDice(die) {
    $(`input[name = "${die}"]`).val(+$(`input[name = "${die}"]`).val() + 1); 
    console.log($(`input[name = "${die}"]`).val());
    return false;
}