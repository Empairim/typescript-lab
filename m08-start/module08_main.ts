/*  Module 8: Organize code using TypeScript namespaces
    Lab Start */

/// <reference path="module08_loans.ts" />
/// <reference path="module08_loan-programs.ts" />

/*  TODO Add reference paths. */

/*  TODO Update the function calls. */

let interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({
  principle: 30000,
  interestRate: 5,
});
let conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({
  principle: 30000,
  interestRate: 5,
  months: 180,
});
console.log(interestOnlyPayment);
console.log(conventionalLoanPayment);
