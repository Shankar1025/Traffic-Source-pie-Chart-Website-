const ctx = document.getElementById('traffic_Chart').getContext('2d');

const data = {
    labels: ['Social Media', 'Search Engines', 'Email Marketing', 'Referrals', 'Direct'],
    datasets: [{
        data: [30, 40, 15, 10, 5],
        backgroundColor: [
            '#FF6384', 
            '#36A2EB', 
            '#FFCE56', 
            '#4BC0C0', 
            '#9966FF'  
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Website Traffic Sources'
            }
        }
    }
};

const trafficChart = new Chart(ctx, config);

const legendContainer = document.getElementById('legend');
data.labels.forEach((label, index) => {
    const colorBox = document.createElement('div');
    colorBox.innerHTML = `<div class="color-box" style="background-color:${data.datasets[0].backgroundColor[index]}"></div>${label}: ${data.datasets[0].data[index]}%`;
    legendContainer.appendChild(colorBox);
});
