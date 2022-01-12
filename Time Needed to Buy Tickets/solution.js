var timeRequiredToBuy = function(tickets, k) {
    let noOfTurns = 0;
    while (true) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[k] === 0) {
                return noOfTurns;
            }
            if (tickets[i] != 0) {
                tickets[i] -= 1;
                noOfTurns += 1;
            }
        }
    } 
};