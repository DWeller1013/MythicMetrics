// Sample data for enhanced leaderboard
const leaderboardData = [
  {
    rank: 1, player: "Arbark", class: "warlock", spec: "Destruction", dungeon: "Ara-Kara, City of Echoes", 
    level: 22, time: "12:45", score: 3250, server: "Stormrage", itemLevel: 639,
    talents: "Deep Burn|Shadowburn|Chaos Bolt|Rain of Fire|Cataclysm|Soul Fire|Conflagrate",
    gear: { head: "Crown of the Fire Peaks", chest: "Robes of Elemental Destruction", weapon: "Staff of Infinite Mysteries" }
  },
  {
    rank: 2, player: "Totemicrage", class: "shaman", spec: "Restoration", dungeon: "The Stonevault", 
    level: 21, time: "14:23", score: 3180, server: "Area-52", itemLevel: 635,
    talents: "Chain Heal|Riptide|Healing Rain|Spirit Walk|Ancestral Guidance|Cloudburst|Wellspring",
    gear: { head: "Helm of the Tidal Guardian", chest: "Vestments of the Sea", weapon: "Tidecaller's Staff" }
  },
  {
    rank: 3, player: "Teuton", class: "paladin", spec: "Protection", dungeon: "The Dawnbreaker", 
    level: 20, time: "15:12", score: 3050, server: "Mal'Ganis", itemLevel: 632,
    talents: "Shield of Vengeance|Consecration|Avenger's Shield|Grand Crusader|First Avenger|Blessed Hammer|Seraphim",
    gear: { head: "Crown of Divine Protection", chest: "Breastplate of the Righteous", weapon: "Sword of the Divine" }
  },
  {
    rank: 4, player: "Shadowstrike", class: "rogue", spec: "Subtlety", dungeon: "City of Threads", 
    level: 19, time: "16:08", score: 2980, server: "Illidan", itemLevel: 628,
    talents: "Shadow Dance|Shadowstrike|Secret Technique|Dark Shadow|Master of Shadows|Weaponmaster|Cold Blood",
    gear: { head: "Mask of the Silent Death", chest: "Leathers of the Night", weapon: "Daggers of the Void" }
  },
  {
    rank: 5, player: "Frostmourne", class: "death-knight", spec: "Blood", dungeon: "Grim Batol", 
    level: 18, time: "17:45", score: 2850, server: "Tichondrius", itemLevel: 625,
    talents: "Death Strike|Vampiric Blood|Dancing Rune Weapon|Tombstone|Blooddrinker|Rapid Decomposition|Bonestorm",
    gear: { head: "Helm of Undying Will", chest: "Breastplate of the Damned", weapon: "Runeblade of Eternal Torment" }
  },
  {
    rank: 6, player: "Moonfire", class: "druid", spec: "Balance", dungeon: "Mists of Tirna Scithe", 
    level: 17, time: "18:22", score: 2720, server: "Sargeras", itemLevel: 622,
    talents: "Starsurge|Starfall|Solar Beam|Incarnation|Stellar Drift|Twin Moons|Force of Nature",
    gear: { head: "Crown of the Ancient Grove", chest: "Robes of Eternal Seasons", weapon: "Staff of the Celestial Balance" }
  },
  {
    rank: 7, player: "Arcaneblast", class: "mage", spec: "Arcane", dungeon: "The Necrotic Wake", 
    level: 16, time: "19:15", score: 2590, server: "Kil'jaeden", itemLevel: 618,
    talents: "Arcane Blast|Arcane Power|Time Warp|Presence of Mind|Charged Up|Arcane Familiar|Temporal Shield",
    gear: { head: "Crown of Infinite Wisdom", chest: "Robes of Arcane Mastery", weapon: "Staff of Pure Magic" }
  },
  {
    rank: 8, player: "Brewmaster", class: "monk", spec: "Brewmaster", dungeon: "Siege of Boralus", 
    level: 15, time: "20:33", score: 2460, server: "Dalaran", itemLevel: 615,
    talents: "Keg Smash|Breath of Fire|Fortifying Brew|Guard|High Tolerance|Special Delivery|Exploding Keg",
    gear: { head: "Crown of the Drunken Master", chest: "Gi of Endless Brew", weapon: "Staff of the Eternal Keg" }
  },
  {
    rank: 9, player: "Holylight", class: "priest", spec: "Holy", dungeon: "Ara-Kara, City of Echoes", 
    level: 14, time: "21:47", score: 2320, server: "Lightbringer", itemLevel: 612,
    talents: "Heal|Prayer of Healing|Guardian Spirit|Divine Hymn|Apotheosis|Benediction|Holy Word",
    gear: { head: "Crown of Divine Grace", chest: "Vestments of the Light", weapon: "Staff of Eternal Blessing" }
  },
  {
    rank: 10, player: "Stormstrike", class: "warrior", spec: "Arms", dungeon: "The Stonevault", 
    level: 13, time: "22:18", score: 2180, server: "Bleeding Hollow", itemLevel: 608,
    talents: "Mortal Strike|Colossus Smash|Warbreaker|In For The Kill|Dreadnaught|Fervor of Battle|Ravager",
    gear: { head: "Helm of the Raging Berserker", chest: "Breastplate of Endless War", weapon: "Axe of the Storm King" }
  }
];

// Sample data for class/spec analytics
const classData = {
  "1-6": { "warrior": 15, "paladin": 12, "hunter": 18, "rogue": 10, "priest": 8, "shaman": 14, "mage": 11, "warlock": 9, "monk": 7, "druid": 13, "demon-hunter": 6, "death-knight": 8, "evoker": 4 },
  "7-11": { "warrior": 12, "paladin": 16, "hunter": 15, "rogue": 14, "priest": 10, "shaman": 13, "mage": 12, "warlock": 11, "monk": 9, "druid": 11, "demon-hunter": 8, "death-knight": 10, "evoker": 6 },
  "12-15": { "warrior": 8, "paladin": 18, "hunter": 12, "rogue": 16, "priest": 12, "shaman": 10, "mage": 14, "warlock": 13, "monk": 11, "druid": 9, "demon-hunter": 12, "death-knight": 14, "evoker": 8 },
  "16-20": { "warrior": 6, "paladin": 20, "hunter": 10, "rogue": 18, "priest": 14, "shaman": 8, "mage": 16, "warlock": 15, "monk": 13, "druid": 7, "demon-hunter": 15, "death-knight": 16, "evoker": 10 },
  "21+": { "warrior": 4, "paladin": 22, "hunter": 8, "rogue": 20, "priest": 16, "shaman": 6, "mage": 18, "warlock": 17, "monk": 15, "druid": 5, "demon-hunter": 18, "death-knight": 18, "evoker": 12 }
};

// Chart instances
let classDistributionChart, specPopularityChart, roleSuccessChart, classScoreChart;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeParticles();
  initializeAOS();
  initializeLucide();
  initializeLeaderboard();
  initializeAnalytics();
  initializeCharts();
  initializeModernFeatures();
});

// Initialize particles.js background
function initializeParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#FFD700'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.3,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#FFD700',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
}

// Initialize AOS (Animate On Scroll)
function initializeAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 120,
      delay: 100
    });
  }
}

// Initialize Lucide icons
function initializeLucide() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Initialize modern features
function initializeModernFeatures() {
  // Add active nav state management
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  // Smooth scroll and active state management
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Enhanced table sorting with animations
  addTableSortingAnimations();
  
  // Add skeleton loading for better UX
  addSkeletonLoading();
  
  // Add enhanced tooltips
  addEnhancedTooltips();
}

// Initialize leaderboard
function initializeLeaderboard() {
  populateLeaderboard(leaderboardData);
}

// Populate leaderboard table with enhanced animations
function populateLeaderboard(data) {
  const tbody = document.getElementById('leaderboardBody');
  
  // Add fade out animation before updating
  tbody.style.opacity = '0';
  tbody.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    tbody.innerHTML = '';
    
    data.forEach((run, index) => {
      const row = document.createElement('tr');
      row.className = run.class;
      row.style.opacity = '0';
      row.style.transform = 'translateY(20px)';
      row.innerHTML = `
        <td><span class="rank-badge">${run.rank}</span></td>
        <td>
          <div class="player-info">
            <span class="player-name">${run.player}</span>
            <span class="server-name">${run.server || 'Unknown'}</span>
          </div>
        </td>
        <td><span class="class-badge ${run.class}">${run.class.charAt(0).toUpperCase() + run.class.slice(1).replace('-', ' ')}</span></td>
        <td><span class="spec-name">${run.spec}</span></td>
        <td><span class="dungeon-name">${run.dungeon}</span></td>
        <td><span class="key-level">+${run.level}</span></td>
        <td><span class="completion-time">${run.time}</span></td>
        <td><span class="mythic-score">${run.score.toLocaleString()}</span></td>
        <td><button class="action-btn talent-btn hover-lift" onclick="showTalents('${run.player}')">View</button></td>
        <td><button class="action-btn gear-btn hover-lift" onclick="showGear('${run.player}')">Inspect</button></td>
      `;
      tbody.appendChild(row);
      
      // Staggered animation for each row
      setTimeout(() => {
        row.style.opacity = '1';
        row.style.transform = 'translateY(0)';
        row.style.transition = 'all 0.3s ease-out';
      }, index * 50);
    });
    
    // Fade in the tbody
    tbody.style.opacity = '1';
    tbody.style.transform = 'translateY(0)';
    tbody.style.transition = 'all 0.3s ease-out';
  }, 150);
}

// Filter leaderboard based on selections
function filterLeaderboard() {
  const keyLevel = document.getElementById('keyLevel').value;
  const classFilter = document.getElementById('classFilter').value;
  const dungeonFilter = document.getElementById('dungeonFilter').value;
  
  let filteredData = leaderboardData.filter(run => {
    let passesKeyLevel = true;
    let passesClass = true;
    let passesDungeon = true;
    
    // Key level filter
    if (keyLevel !== 'all') {
      const [min, max] = keyLevel.includes('+') ? [21, 999] : keyLevel.split('-').map(Number);
      passesKeyLevel = run.level >= min && (max === 999 || run.level <= max);
    }
    
    // Class filter
    if (classFilter !== 'all') {
      passesClass = run.class === classFilter;
    }
    
    // Dungeon filter
    if (dungeonFilter !== 'all') {
      passesDungeon = run.dungeon.toLowerCase().includes(dungeonFilter.replace('-', ' '));
    }
    
    return passesKeyLevel && passesClass && passesDungeon;
  });
  
  populateLeaderboard(filteredData);
}

// Sort table by column
function sortTable(columnIndex) {
  const table = document.getElementById('leaderboardTable');
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  const isNumeric = columnIndex === 0 || columnIndex === 5 || columnIndex === 7; // rank, level, score
  
  rows.sort((a, b) => {
    const aVal = a.cells[columnIndex].textContent.trim();
    const bVal = b.cells[columnIndex].textContent.trim();
    
    if (isNumeric) {
      return parseFloat(aVal.replace(/[^0-9.-]+/g, '')) - parseFloat(bVal.replace(/[^0-9.-]+/g, ''));
    } else {
      return aVal.localeCompare(bVal);
    }
  });
  
  rows.forEach(row => tbody.appendChild(row));
}

// Initialize analytics
function initializeAnalytics() {
  updateAnalytics();
  populateTopPlayers();
}

// Update analytics based on key level selection
function updateAnalytics() {
  const keyLevel = document.getElementById('analyticsKeyLevel').value;
  const data = keyLevel === 'all' ? aggregateAllData() : classData[keyLevel] || classData['all'];
  
  updateClassDistributionChart(data);
  updateSpecPopularityChart(keyLevel);
  updateRoleSuccessChart(keyLevel);
  updateClassScoreChart(keyLevel);
}

// Aggregate data for all key levels
function aggregateAllData() {
  const aggregated = {};
  Object.values(classData).forEach(levelData => {
    Object.entries(levelData).forEach(([className, count]) => {
      aggregated[className] = (aggregated[className] || 0) + count;
    });
  });
  return aggregated;
}

// Update class distribution chart
function updateClassDistributionChart(data) {
  const ctx = document.getElementById('classDistributionChart').getContext('2d');
  
  if (classDistributionChart) {
    classDistributionChart.destroy();
  }
  
  const classColors = {
    'death-knight': '#C41E3A', 'demon-hunter': '#A330C9', 'druid': '#FF7D0A', 'evoker': '#33937F',
    'hunter': '#ABD473', 'mage': '#69CCF0', 'monk': '#00FF96', 'paladin': '#F58CBA',
    'priest': '#FFFFFF', 'rogue': '#FFF569', 'shaman': '#0070DE', 'warlock': '#9482C9', 'warrior': '#C79C6E'
  };
  
  classDistributionChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(data).map(c => c.charAt(0).toUpperCase() + c.slice(1).replace('-', ' ')),
      datasets: [{
        data: Object.values(data),
        backgroundColor: Object.keys(data).map(c => classColors[c] || '#888'),
        borderColor: '#444',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'right', labels: { color: '#fff', usePointStyle: true } },
        tooltip: { backgroundColor: '#333', titleColor: '#ffcc00', bodyColor: '#fff' }
      }
    }
  });
}

// Update specialization popularity chart
function updateSpecPopularityChart(keyLevel) {
  const ctx = document.getElementById('specPopularityChart').getContext('2d');
  
  if (specPopularityChart) {
    specPopularityChart.destroy();
  }
  
  const specData = {
    labels: ['Protection Paladin', 'Resto Shaman', 'Destro Warlock', 'Sub Rogue', 'Blood DK', 'Balance Druid', 'Arcane Mage', 'Brewmaster Monk'],
    data: [25, 22, 20, 18, 16, 14, 12, 10]
  };
  
  specPopularityChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: specData.labels,
      datasets: [{
        label: 'Popularity %',
        data: specData.data,
        backgroundColor: 'rgba(255, 204, 0, 0.6)',
        borderColor: 'rgba(255, 204, 0, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, ticks: { color: '#fff' }, grid: { color: '#444' } },
        x: { ticks: { color: '#fff', maxRotation: 45 }, grid: { color: '#444' } }
      },
      plugins: {
        legend: { labels: { color: '#fff' } },
        tooltip: { backgroundColor: '#333', titleColor: '#ffcc00', bodyColor: '#fff' }
      }
    }
  });
}

// Update role success chart
function updateRoleSuccessChart(keyLevel) {
  const ctx = document.getElementById('roleSuccessChart').getContext('2d');
  
  if (roleSuccessChart) {
    roleSuccessChart.destroy();
  }
  
  roleSuccessChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Tank', 'Healer', 'Melee DPS', 'Ranged DPS'],
      datasets: [{
        label: 'Success Rate %',
        data: [85, 88, 82, 79],
        backgroundColor: 'rgba(255, 204, 0, 0.2)',
        borderColor: 'rgba(255, 204, 0, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 204, 0, 1)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: { color: '#fff', stepSize: 20 },
          grid: { color: '#444' },
          angleLines: { color: '#444' }
        }
      },
      plugins: {
        legend: { labels: { color: '#fff' } },
        tooltip: { backgroundColor: '#333', titleColor: '#ffcc00', bodyColor: '#fff' }
      }
    }
  });
}

// Update class score chart
function updateClassScoreChart(keyLevel) {
  const ctx = document.getElementById('classScoreChart').getContext('2d');
  
  if (classScoreChart) {
    classScoreChart.destroy();
  }
  
  const scoreData = {
    labels: ['Paladin', 'Rogue', 'Warlock', 'Death Knight', 'Mage', 'Monk', 'Druid', 'Shaman'],
    data: [3200, 3150, 3100, 3050, 3000, 2950, 2900, 2850]
  };
  
  classScoreChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: scoreData.labels,
      datasets: [{
        label: 'Average M+ Score',
        data: scoreData.data,
        backgroundColor: 'rgba(255, 204, 0, 0.1)',
        borderColor: 'rgba(255, 204, 0, 1)',
        borderWidth: 3,
        pointBackgroundColor: 'rgba(255, 204, 0, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: false, ticks: { color: '#fff' }, grid: { color: '#444' } },
        x: { ticks: { color: '#fff' }, grid: { color: '#444' } }
      },
      plugins: {
        legend: { labels: { color: '#fff' } },
        tooltip: { backgroundColor: '#333', titleColor: '#ffcc00', bodyColor: '#fff' }
      }
    }
  });
}

// Populate top players table with enhanced styling
function populateTopPlayers() {
  const tbody = document.getElementById('topPlayersBody');
  tbody.innerHTML = '';
  
  leaderboardData.slice(0, 10).forEach((player, index) => {
    const row = document.createElement('tr');
    row.className = player.class;
    row.innerHTML = `
      <td>
        <div class="rank-container">
          <span class="rank-number">${player.rank}</span>
          ${index < 3 ? `<i data-lucide="${index === 0 ? 'crown' : index === 1 ? 'medal' : 'award'}" class="rank-icon"></i>` : ''}
        </div>
      </td>
      <td>
        <div class="player-info">
          <span class="player-name">${player.player}</span>
        </div>
      </td>
      <td><span class="server-name">${player.server}</span></td>
      <td><span class="class-badge ${player.class}">${player.class.charAt(0).toUpperCase() + player.class.slice(1).replace('-', ' ')}</span></td>
      <td><span class="spec-name">${player.spec}</span></td>
      <td><span class="item-level">${player.itemLevel}</span></td>
      <td><span class="mythic-score">${player.score.toLocaleString()}</span></td>
      <td><span class="best-run">${player.dungeon} +${player.level}</span></td>
      <td>
        <button class="action-btn talent-btn hover-lift" onclick="showTalents('${player.player}')">Talents</button>
        <button class="action-btn gear-btn hover-lift" onclick="showGear('${player.player}')">Gear</button>
      </td>
    `;
    tbody.appendChild(row);
  });
  
  // Re-initialize Lucide icons for the newly added elements
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Initialize completion times chart
function initializeCharts() {
  const ctx = document.getElementById('completionChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Ara-Kara +20', 'Stonevault +19', 'Dawnbreaker +18', 'City of Threads +17', 'Grim Batol +16'],
      datasets: [{
        label: 'Completion Times (minutes)',
        data: [12.75, 14.38, 15.20, 16.13, 17.75],
        backgroundColor: 'rgba(255, 204, 0, 0.2)',
        borderColor: 'rgba(255, 204, 0, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 204, 0, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 2, color: '#fff' }, grid: { color: '#444' } },
        x: { ticks: { color: '#fff' }, grid: { color: '#444' } }
      },
      plugins: {
        legend: { position: 'top', labels: { color: '#fff' } },
        tooltip: { backgroundColor: '#333', titleColor: '#ffcc00', bodyColor: '#fff' }
      }
    }
  });
}

// Show talents modal
function showTalents(playerName) {
  const player = leaderboardData.find(p => p.player === playerName);
  if (!player) return;
  
  document.getElementById('talentModalTitle').textContent = `${playerName}'s Talents - ${player.spec} ${player.class.charAt(0).toUpperCase() + player.class.slice(1)}`;
  
  const talents = player.talents.split('|');
  const container = document.getElementById('talentTreeContainer');
  container.innerHTML = `
    <div class="talent-tree">
      ${talents.map((talent, index) => `
        <div class="talent-slot selected">
          <div class="talent-icon">${String.fromCharCode(9733)}</div>
          <div class="talent-name">${talent}</div>
        </div>
      `).join('')}
    </div>
  `;
  
  document.getElementById('talentModal').style.display = 'block';
}

// Show gear modal
function showGear(playerName) {
  const player = leaderboardData.find(p => p.player === playerName);
  if (!player) return;
  
  document.getElementById('gearModalTitle').textContent = `${playerName}'s Equipment - Item Level ${player.itemLevel}`;
  
  const container = document.getElementById('gearContainer');
  container.innerHTML = `
    <div class="gear-grid">
      ${Object.entries(player.gear).map(([slot, item]) => `
        <div class="gear-slot">
          <div class="gear-item">
            <div class="gear-icon">${getSlotIcon(slot)}</div>
            <div class="gear-info">
              <h4>${item}</h4>
              <p>Item Level: <span class="item-level">${player.itemLevel}</span></p>
              <p>${slot.charAt(0).toUpperCase() + slot.slice(1)}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  document.getElementById('gearModal').style.display = 'block';
}

// Get icon for gear slot
function getSlotIcon(slot) {
  const icons = {
    head: '🎩', chest: '👕', weapon: '⚔️', legs: '👖', 
    feet: '👢', hands: '🧤', shoulders: '🎽', waist: '🥋'
  };
  return icons[slot] || '⚡';
}

// Close modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Smooth scroll behavior with enhanced animation
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 100;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Update active state
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Enhanced table sorting animations
function addTableSortingAnimations() {
  // Add visual feedback for sortable columns
  const sortableHeaders = document.querySelectorAll('.sortable');
  sortableHeaders.forEach(header => {
    header.addEventListener('click', function() {
      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
      
      // Show loading state briefly
      const tbody = document.querySelector('#leaderboardTable tbody');
      tbody.style.opacity = '0.5';
      setTimeout(() => {
        tbody.style.opacity = '1';
      }, 300);
    });
  });
}

// Add skeleton loading for better UX
function addSkeletonLoading() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  
  // Show loading when filtering
  const originalFilterFunction = window.filterLeaderboard;
  window.filterLeaderboard = function() {
    loadingOverlay.style.display = 'flex';
    setTimeout(() => {
      originalFilterFunction();
      loadingOverlay.style.display = 'none';
    }, 500);
  };
}

// Add enhanced tooltips
function addEnhancedTooltips() {
  // Add tooltips to action buttons
  const actionButtons = document.querySelectorAll('.action-btn');
  actionButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      const tooltipText = this.classList.contains('talent-btn') ? 
        'View talent build and specialization details' : 
        'Inspect equipment and item levels';
      
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = tooltipText;
      tooltip.style.cssText = `
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.75rem;
        z-index: 1000;
        pointer-events: none;
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 215, 0, 0.3);
      `;
      
      document.body.appendChild(tooltip);
      
      const rect = this.getBoundingClientRect();
      tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
      tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
      
      this.addEventListener('mouseleave', function() {
        if (tooltip && tooltip.parentNode) {
          tooltip.parentNode.removeChild(tooltip);
        }
      }, { once: true });
    });
  });
}

// Enhanced modal animations
function showTalents(playerName) {
  const player = leaderboardData.find(p => p.player === playerName);
  if (!player) return;
  
  document.getElementById('talentModalTitle').textContent = `${playerName}'s Talents - ${player.spec} ${player.class.charAt(0).toUpperCase() + player.class.slice(1)}`;
  
  const talents = player.talents.split('|');
  const container = document.getElementById('talentTreeContainer');
  container.innerHTML = `
    <div class="talent-tree">
      ${talents.map((talent, index) => `
        <div class="talent-slot selected hover-lift" style="animation-delay: ${index * 0.1}s">
          <div class="talent-icon">${String.fromCharCode(9733)}</div>
          <div class="talent-name">${talent}</div>
        </div>
      `).join('')}
    </div>
  `;
  
  const modal = document.getElementById('talentModal');
  modal.style.display = 'block';
  
  // Add entrance animation
  setTimeout(() => {
    modal.querySelector('.modal-content').style.animation = 'slideIn 0.3s ease-out';
  }, 10);
}

// Enhanced gear modal
function showGear(playerName) {
  const player = leaderboardData.find(p => p.player === playerName);
  if (!player) return;
  
  document.getElementById('gearModalTitle').textContent = `${playerName}'s Equipment - Item Level ${player.itemLevel}`;
  
  const container = document.getElementById('gearContainer');
  container.innerHTML = `
    <div class="gear-grid">
      ${Object.entries(player.gear).map(([slot, item], index) => `
        <div class="gear-slot hover-lift" style="animation-delay: ${index * 0.1}s">
          <div class="gear-item">
            <div class="gear-icon">${getSlotIcon(slot)}</div>
            <div class="gear-info">
              <h4>${item}</h4>
              <p>Item Level: <span class="item-level">${player.itemLevel}</span></p>
              <p>${slot.charAt(0).toUpperCase() + slot.slice(1)}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  const modal = document.getElementById('gearModal');
  modal.style.display = 'block';
  
  // Add entrance animation
  setTimeout(() => {
    modal.querySelector('.modal-content').style.animation = 'slideIn 0.3s ease-out';
  }, 10);
}
