let creditLimit = 5000;

/*
 * Input: number of dollars to loan out
 * Returns: Promise of loan which may or may not fulfill, based on remaining credit. 
 * If creditLimit is less than the requested amount, only the remaining limit is loaned out, otherwise the full amount is loaned out. If $0 remain in the limit, the loan request is rejected (error!).
 */
const loanOut = function(amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit <= 0) {
      reject("Limit is reached");
    } else if (creditLimit < amount) {
      const remainingLimit = creditLimit;
      creditLimit = 0;
      resolve(remainingLimit);
    } else {
      creditLimit -= amount;
      resolve(amount);
    }
  });
};
loanOut(10000)
  .then(loanedAmount => console.log(`Loan approved: $${loanedAmount}`))
  .catch(error => console.error(`Loan denied: ${error}`));
