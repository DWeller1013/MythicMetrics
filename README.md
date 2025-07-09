# 🏆 MythicMetrics

**A comprehensive World of Warcraft Mythic+ leaderboard and analytics platform**

MythicMetrics is a modern, feature-rich web application that transforms basic Mythic+ tracking into a comprehensive raider.io-style platform. Built with cutting-edge web technologies and featuring glassmorphism design, advanced animations, and interactive analytics.

![MythicMetrics Hero](https://github.com/user-attachments/assets/28cc22ff-ba9e-430b-a761-26f0335e1b98)

## ✨ Features

### 🎯 Enhanced Leaderboard System
- **Multi-level Filtering**: Filter runs by key level ranges (M1-6, M7-11, M12-15, M16-20, M21+)
- **Class & Dungeon Filtering**: Interactive dropdowns for all 13 WoW classes and current season dungeons
- **Sortable Columns**: Click any column header to sort by rank, player, class, spec, dungeon, level, time, or score
- **Real-time Updates**: Filtering updates the leaderboard instantly without page refresh

### 📊 Class/Specialization Analytics Dashboard
- **Class Distribution Chart**: Interactive doughnut chart showing class popularity by key level
- **Specialization Trends**: Bar chart displaying the most popular specs for different content levels
- **Role Success Analysis**: Radar chart showing success rates for Tank/Healer/DPS roles
- **Score Analytics**: Line chart tracking average M+ scores across all classes
- **Dynamic Key Level Analysis**: All charts update based on selected key level range

### 🔍 Talent Tree & Gear Inspection
- **Modal Talent Viewer**: Click "View" to see detailed talent builds in a professional modal interface
- **Equipment Inspector**: Click "Inspect" to view complete gear loadouts with item levels
- **Interactive Design**: Clean, WoW-themed modals with proper close functionality
- **Comprehensive Data**: Shows talent names, gear slots, and item information

### 🎨 Modern UI/UX Design
- **Glassmorphism Effects**: Backdrop blur and modern glass-style components throughout
- **Advanced Typography**: Inter + JetBrains Mono font stack with improved hierarchy
- **Professional Gradient Schemes**: Custom CSS properties for consistent theming
- **Interactive Particle Background**: Particle.js integration for immersive experience
- **AOS Scroll Animations**: Smooth reveal animations as users scroll
- **Enhanced Hover States**: Micro-interactions and smooth transitions
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing
- **WoW-Authentic Styling**: Proper class colors, medieval typography, and dark theme

## 🚀 Live Demo

View the application screenshots:
- [Enhanced Leaderboard](https://github.com/user-attachments/assets/3a24aad1-ba7f-4bcd-bfeb-a19767bb561b)
- [Analytics Dashboard](https://github.com/user-attachments/assets/5d1b2c50-cc91-428f-acf0-43bcfbdc93cf)

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic structure with accessibility considerations
- **CSS3**: Advanced grid layouts, glassmorphism effects, and responsive design
- **JavaScript ES6+**: Interactive filtering, modal system, and chart integration

### Libraries & Frameworks
- **[Chart.js](https://www.chartjs.org/)**: Professional data visualization with multiple chart types
- **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)**: Smooth scroll animations
- **[Particles.js](https://vincentgarreau.com/particles.js/)**: Interactive particle background
- **[Lucide Icons](https://lucide.dev/)**: Modern, clean icon set
- **[Google Fonts](https://fonts.google.com/)**: Typography (Cinzel, Inter, JetBrains Mono)

### Design Features
- **CSS Custom Properties**: Advanced theming system
- **Glassmorphism**: Modern UI design trend implementation
- **Advanced Shadows**: Multi-layered shadow system
- **Responsive Grid**: CSS Grid and Flexbox layouts
- **Color System**: Authentic WoW class colors

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DWeller1013/MythicMetrics.git
   cd MythicMetrics
   ```

2. **Open in browser**
   ```bash
   # Option 1: Using Python (if installed)
   python -m http.server 8000
   
   # Option 2: Using Node.js (if installed)
   npx serve .
   
   # Option 3: Using any local server or open index.html directly
   ```

3. **View the application**
   - Open your browser and navigate to `http://localhost:8000`
   - Or open `index.html` directly in your browser

## 🎮 Usage Guide

### Navigating the Leaderboard
1. **Browse Runs**: View top M+ runs with comprehensive details
2. **Apply Filters**: 
   - Select key level range from dropdown (All Levels, M1-6, M7-11, etc.)
   - Filter by specific class (Death Knight, Demon Hunter, Druid, etc.)
   - Filter by dungeon (Ara-Kara, The Stonevault, etc.)
3. **Sort Data**: Click any column header to sort by that metric
4. **Inspect Players**: 
   - Click "View" button to see talent builds
   - Click "Inspect" button to view gear loadouts

### Analytics Dashboard
1. **Navigate**: Click "Statistics" or "Charts" in the navigation
2. **Select Key Level**: Use the dropdown to analyze different difficulty ranges
3. **View Charts**: Interact with multiple chart types showing class/spec data
4. **Understand Trends**: Charts update dynamically based on your selections

## 📁 Project Structure

```
MythicMetrics/
├── index.html          # Main HTML file with semantic structure
├── style.css           # Comprehensive CSS with glassmorphism effects
├── app.js              # JavaScript functionality and data management
├── README.md           # Project documentation (this file)
└── MythicMetrics-Notes/
    ├── Notes.txt       # Original project planning notes
    └── AI Comments.txt # Development comments and feedback
```

## 🗄️ Data Structure

### Player Run Data
```javascript
{
  rank: 1,
  player: "Arbark",
  class: "warlock",
  spec: "Destruction",
  dungeon: "Ara-Kara, City of Echoes",
  level: 22,
  time: "12:45",
  score: 3250,
  server: "Stormrage",
  itemLevel: 639,
  talents: "Deep Burn|Shadowburn|Chaos Bolt|Rain of Fire|Cataclysm|Soul Fire|Conflagrate",
  gear: {
    head: "Crown of the Fire Peaks",
    chest: "Robes of Elemental Destruction",
    weapon: "Staff of Infinite Mysteries"
  }
}
```

## 🎨 Design System

### Color Palette
- **Primary Gold**: `#FFD700` (WoW-authentic gold)
- **Gradient Schemes**: Multiple predefined gradients
- **Glass Effects**: `rgba(255, 255, 255, 0.05)` with backdrop blur
- **Class Colors**: Authentic WoW class color mappings

### Typography
- **Display Font**: Cinzel (medieval-style headers)
- **Body Font**: Inter (modern, readable text)
- **Monospace**: JetBrains Mono (code and data)

## 🚧 Future Roadmap

### Planned Features
- [ ] **Real WoW API Integration**: Connect to Blizzard's official API
- [ ] **Player Profiles**: Detailed individual player statistics
- [ ] **Guild Leaderboards**: Team-based rankings and analytics
- [ ] **Historical Data**: Track progress over time
- [ ] **Mobile App**: React Native companion application
- [ ] **Advanced Filtering**: More granular search options
- [ ] **Social Features**: Player comparisons and sharing

### Technical Improvements
- [ ] **Backend Implementation**: Node.js/Express server
- [ ] **Database Integration**: PostgreSQL for data persistence
- [ ] **Caching Strategy**: Redis for performance optimization
- [ ] **Testing Suite**: Comprehensive unit and integration tests
- [ ] **CI/CD Pipeline**: Automated deployment and testing

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines
- **Code Style**: Follow existing patterns and conventions
- **Responsive Design**: Ensure all changes work on mobile and desktop
- **Performance**: Optimize for fast loading and smooth interactions
- **Accessibility**: Maintain WCAG compliance where possible
- **Browser Support**: Test in modern browsers (Chrome, Firefox, Safari, Edge)

### Areas for Contribution
- **API Integration**: Help connect to real WoW APIs
- **New Features**: Implement items from the roadmap
- **Performance**: Optimize loading times and animations
- **Testing**: Add unit tests and improve reliability
- **Documentation**: Improve guides and code comments

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **World of Warcraft**: Blizzard Entertainment for the game and inspiration
- **Chart.js Community**: For excellent charting capabilities
- **AOS Library**: For smooth scroll animations
- **Particles.js**: For interactive background effects
- **Google Fonts**: For high-quality typography
- **raider.io & murlok.io**: For inspiration and design reference

## 📞 Support

Having issues? Here's how to get help:

1. **Check Issues**: Look through existing [GitHub Issues](https://github.com/DWeller1013/MythicMetrics/issues)
2. **Create Issue**: Open a new issue with detailed description
3. **Documentation**: Review this README and code comments
4. **Community**: Engage with other users in discussions

---

**Built with ❤️ for the World of Warcraft community**

*Transform your Mythic+ experience with MythicMetrics - where data meets design.*