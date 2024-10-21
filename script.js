const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Python', 'Java', 'C', 'C++', 'HTML', 'CSS', 'JavaScript'],
        datasets: [{
            label: 'Programming Languages',
            data: [45, 25, 10, 8, 5, 4, 3],
            backgroundColor: [
                '#377eb8', // Python
                '#ff7f00', // Java
                '#4daf4a', // C
                '#984ea3', // C++
                '#e41a1c', // HTML
                '#f781bf', // CSS
                '#ffff33'  // JavaScript
            ],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});
