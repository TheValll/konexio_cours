const dataLOwercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLOwercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&^$*ù!/;.:§µ%£¨\"'";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
const generate = () => {
  let data = [];
  let password = "";
  if (lowercase.checked) {
    data.push(...dataLOwercase);
  }
  if (uppercase.checked) {
    data.push(...dataUppercase);
  }
  if (number.checked) {
    data.push(...dataNumbers);
  }
  if (symbols.checked) {
    data.push(...dataSymbols);
  }
  if (data.length === 0) {
    alert("Veuillez choisir des critères");
    return;
  }
  for (let i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;
  navigator.clipboard.writeText(passwordOutput.value);
  generateButton.textContent = "Copié";
  setTimeout(() => {
    generateButton.textContent = "Générer MDP";
  }, 2000);
  return;
};

generateButton.addEventListener("click", generate);
