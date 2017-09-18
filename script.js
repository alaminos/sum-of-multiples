var myObj = {
    
    calculation: function(n) {
        var result = 0;
        for (var i = 0; i < n; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                result = result + i;}
            }
        this.printResult(result);
    },

    fetchNumber: function() {
        var numberEnteredByUser = document.getElementById('numberEnteredByUser').value;
        this.calculation(numberEnteredByUser);
    },

    printResult: function(numberGotFromCalculation) {
        var getElement = document.getElementById('resultDisplay');
        getElement.innerHTML = "Result = " + numberGotFromCalculation;
    }

}