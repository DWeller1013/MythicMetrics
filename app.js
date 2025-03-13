const ctx = document.getElementById('completionChart').getContext('2d');
const completionChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Dungeon 1', 'Dungeon 2', 'Dungeon 3', 'Dungeon 4', 'Dungeon 5'],
    datasets: [{
      label: 'Completion Times (minutes)',
      data: [25, 26.5, 24.8, 27.2, 29],
      backgroundColor: 'rgba(255, 204, 0, 0.2)', // Gold
      borderColor: 'rgba(255, 204, 0, 1)', // Gold
      borderWidth: 2,
      pointBackgroundColor: 'rgba(255, 204, 0, 1)', // Gold
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2,
        },
        grid: {
          color: '#444',
        },
      },
      x: {
        grid: {
          color: '#444',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#ffcc00',
        bodyColor: '#fff',
      },
    },
  },
});

// Smooth scroll behavior (optional, to smoothly navigate through sections)
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
