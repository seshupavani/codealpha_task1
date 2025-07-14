// Wait for form submit
document.getElementById("ageForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop page reload

  const dobInput = document.getElementById("dob").value;

  if (!dobInput) {
    alert("Please select a valid date.");
    return;
  }

  const today = new Date();
  const dob = new Date(dobInput);

  if (dob > today) {
    alert("Date of birth cannot be in the future.");
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("result").innerText = 
    `Your age is ${years} years, ${months} months, and ${days} days.`;
});
