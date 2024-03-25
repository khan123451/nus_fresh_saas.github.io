var revenueList = [10045624, 32056711, 781726, 65756111, 2000, 200];
var expenditureList = [300000, 250000, 2500000, 200000];

function listSum(myList) {
    // create a variable for the sum and initialize it
    let sum = 0;

    // iterate over each item in the array
    for (let i = 0; i < myList.length; i++) {
        sum += myList[i];
    }
    return sum;
}

document.getElementById('totalRevenue').innerHTML = 'SGD$' + listSum(revenueList);
document.getElementById('totalExpenditure').innerHTML = 'SGD$' + listSum(expenditureList);


// The element where the count will be displayed
const totalRevenueElement = document.getElementById('totalRevenue');
const totalExpenditureElement = document.getElementById('totalExpenditure');

let countRevenue = 0; // Start counting from 1
let countExpenditure = 0; // Start counting from 1
const endRevenueCount = listSum(revenueList);
const endExpenditureCount = listSum(expenditureList);
const stepTime = 0; // Time in milliseconds between steps

function updateRevenueCounter() {
    totalRevenueElement.innerText = countRevenue;
    countRevenue += 1000000; // Increment the count

    if (countRevenue <= endRevenueCount) {
        // If we haven't reached 1,000,000 yet, keep counting
        requestAnimationFrame(updateRevenueCounter);
    }
}

function updateExpenditureCounter() {
    totalExpenditureElement.innerText = countExpenditure;
    countExpenditure += 100000; // Increment the count

    if (countExpenditure <= endExpenditureCount) {
        // If we haven't reached 1,000,000 yet, keep counting
        requestAnimationFrame(updateExpenditureCounter);
    }
}

// Start the animation
requestAnimationFrame(updateRevenueCounter);

// Start the animation
requestAnimationFrame(updateExpenditureCounter);

// Sample data for the charts
const balanceData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
        label: 'Account Balance ($)',
        data: [1000, 1500, 1000, 2000],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

const expenditureData = {
    labels: ['Branch 1', 'Branch 2', 'Branch 3', 'Other'],
    datasets: [{
        label: 'Expenditure',
        data: expenditureList,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1
    }]
};

const revenueData = {
    labels: ['Save', 'Loan', 'Debt', 'Stock Investment', 'Bond', 'Other'],
    datasets: [{
        label: 'SGD',
        data: revenueList,
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
        ]
    }]
};

// Options for the charts
const options = {
    animation: {
        duration: 1500, // general animation time
    },
    hover: {
        animationDuration: 1000, // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 1000, // animation duration after a resize
};

// Create the charts using Chart.js
new Chart(document.getElementById('balanceChart'), {
    type: 'line',
    data: balanceData,
    options: options
});

new Chart(document.getElementById('expenditurePieChart'), {
    type: 'pie',
    data: expenditureData,
    options: options
});

new Chart(document.getElementById('revenueBarChart'), {
    type: 'bar',
    data: revenueData,
    options: options
});