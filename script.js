const driverPhoneInput = document.getElementById('driverPhone');
const studentCountInput = document.getElementById('studentCount');
const tripBudgetInput = document.getElementById('tripBudget');
const saveTripBtn = document.getElementById('saveTripBtn');

const driverInfo = document.getElementById('driverInfo');
const studentInfo = document.getElementById('studentInfo');
const budgetInfo = document.getElementById('budgetInfo');
const budgetAmountLabel = document.getElementById('budgetAmountLabel');
const budgetMessage = document.getElementById('budgetMessage');
const travelShare = document.getElementById('travelShare');
const stayShare = document.getElementById('stayShare');
const foodShare = document.getElementById('foodShare');
const funShare = document.getElementById('funShare');

function updateTripSummary() {
  const driverPhone = driverPhoneInput.value.trim();
  const studentCount = studentCountInput.value.trim();
  const budget = Number(tripBudgetInput.value);

  if (driverPhone) {
    driverInfo.textContent = `Driver: ${driverPhone}`;
  } else {
    driverInfo.textContent = 'Driver: Add phone';
  }

  if (studentCount) {
    studentInfo.textContent = `Students: ${studentCount}`;
  } else {
    studentInfo.textContent = 'Students: 0';
  }

  if (budget && budget > 0) {
    const travel = Math.round(budget * 0.35);
    const stay = Math.round(budget * 0.25);
    const food = Math.round(budget * 0.2);
    const fun = budget - travel - stay - food;

    budgetInfo.textContent = `Budget: ₹${budget.toLocaleString()}`;
    budgetAmountLabel.textContent = `Budget plan for ₹${budget.toLocaleString()}`;

    let message = 'Your squad is ready to enjoy a smart and smooth trip.';
    if (budget < 8000) {
      message = 'Budget-friendly plan with simple stays and shared snacks.';
    } else if (budget >= 8000 && budget < 15000) {
      message = 'Balanced plan for comfort, fun, and good food.';
    } else {
      message = 'Premium vibes with room for extra fun and better stays.';
    }

    budgetMessage.textContent = message;
    travelShare.textContent = `${Math.round((travel / budget) * 100)}%`;
    stayShare.textContent = `${Math.round((stay / budget) * 100)}%`;
    foodShare.textContent = `${Math.round((food / budget) * 100)}%`;
    funShare.textContent = `${Math.round((fun / budget) * 100)}%`;
  } else {
    budgetInfo.textContent = 'Budget: Add amount';
    budgetAmountLabel.textContent = 'Estimated plan';
    budgetMessage.textContent = 'Enter your budget to see a smart split.';
    travelShare.textContent = '0%';
    stayShare.textContent = '0%';
    foodShare.textContent = '0%';
    funShare.textContent = '0%';
  }
}

saveTripBtn.addEventListener('click', updateTripSummary);
[driverPhoneInput, studentCountInput, tripBudgetInput].forEach((input) => {
  input.addEventListener('input', updateTripSummary);
});

updateTripSummary();
