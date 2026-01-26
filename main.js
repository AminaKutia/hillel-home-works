 // You need to calculate amount of tip to give in a restaurant/cafe.

// 	Workflow:

// 1.	User inputs check summ. (Use “prompt” function).

// 2.	User inputs tip percentage. (Use “prompt” function)

// 3. For cancelled input show “Canceled.”

// 4.	You need to validate the input data: both values should be numbers,  check summ can’t be

// a negative number, percentage can’t be negative and bigger than 100.

// 5.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).

// 6.	You need to calculate tip amount and total sum to pay.

// 7.	Show message: (example). Use ”alert” function

// Check summ: 200

// Tip: 15%

// Tip amount: 30

// Total sum to pay:  230

// TIP CALCULATOR

const checkSumInput = prompt('Enter check sum:');
if (checkSumInput === null) {
  alert('Canceled.');
} else {
  const tipPercentInput = prompt('Enter tip percentage:');
  if (tipPercentInput === null) {
    alert('Canceled.');
  } else {
    const checkSum = Number(checkSumInput);
    const tipPercent = Number(tipPercentInput);

    const isValid =
      !isNaN(checkSum) &&
      !isNaN(tipPercent) &&
      checkSum >= 0 &&
      tipPercent >= 0 &&
      tipPercent <= 100;

    if (!isValid) {
      alert('Invalid input data');
    } else {
      const tipAmount = (checkSum * tipPercent) / 100;
      const totalSum = checkSum + tipAmount;

      alert(
        `Check sum: ${checkSum}
Tip: ${tipPercent}%
Tip amount: ${tipAmount}
Total sum to pay: ${totalSum}`
      );
    }
  }
}