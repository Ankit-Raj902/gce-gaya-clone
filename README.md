# 🎓 GCE Gaya College Website Clone  

This is a **personal project** created by me — a fully structured, well-designed, and visually stylish **GCE Gaya College Website Clone**.  
I made this using **HTML**, **CSS**, and a little bit of **JavaScript** (because when I built this project, I had just started learning JS 😅).  
It’s one of my early projects — but I’m really proud of how clean, organized, and well-structured it turned out!  

---

## 🧱 Project Overview  

This project is a **clone of my college website (GCE Gaya)** — built completely from scratch using:
- HTML (for structure)
- CSS (for styling and layout)
- JavaScript (for light functionality like image sliding & marquee animation)

I’ve organized everything inside `div` containers properly, each with specific classes for easy styling and flexibility.  
Example snippet 👇  
```html
<div class="dropdown">
  <label for="about" class="dropdown-btn">
    About Us <i class="fa-solid fa-angle-down"></i>
  </label>
  <input type="checkbox" id="about" class="dropdown-checkbox">
  <div class="dropdown-content">
    <a href="#">Contact Us</a>
    <a href="#">Feedback</a>
  </div>
</div>

## ✨ Features

### 🎨 Design & Styling
- **Custom CSS** with carefully selected color schemes
- **Google Fonts Integration** - Montserrat and Roboto Condensed
- **Font Awesome Icons** for enhanced UI
- **Responsive Layout** using Flexbox
- **Professional Color Scheme** (#285691 as primary color)

### 🏗️ HTML Structure
- **Semantic Div Structure** with well-organized classes
- **Dropdown Navigation System** using checkbox hack
- **Image Slider** for dynamic content
- **Marquee/Ticker** for announcements
- **Section-based Layout** for different content areas

### ⚡ JavaScript Functionality
- **Image Slider** with smooth transitions
- **Auto-rotating Slides** with controls
- **Continuous Marquee Animation**
- **Smooth Scrolling Effects**
- **Easing Functions** for better animations

## 🛠️ Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling and animations
- **JavaScript** - Interactive functionality
- **Google Fonts** - Typography
- **Font Awesome** - Icons

## 📁 Project Structure

LOGO AND IMAGES ARE TAKEN FRON ONLINE RESOURCES PRESENT THERE


## 🔧 External Dependencies

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

🎯 Key Components
Navigation Dropdowns

<div class="dropdown">
  <label for="about" class="dropdown-btn">
    About Us <i class="fa-solid fa-angle-down"></i>
  </label>
  <input type="checkbox" id="about" class="dropdown-checkbox">
  <div class="dropdown-content">
    <a href="#">Contact Us</a>
    <a href="#">Feedback</a>
  </div>
</div>


Image Slider
Smooth transition animations

Next/Previous controls

Auto-rotation feature

Responsive design

Marquee Announcements
Continuous scrolling

Smooth animation

Hover effects

🎨 Color Scheme
Primary Blue: #285691

Secondary Blue: #183351

Accent Orange: #eead4c

Background Gray: #eeeeee

Text Dark: #333333

⚡ JavaScript Features
Smooth Image Transitions
function nextSlide() {
    const current = document.querySelector('.slide.active');
    const next = current.nextElementSibling || slides[0];
    // Smooth animation logic
}

Marquee Animation
const marqueeContainer = document.querySelector('.marquee-container');
const marqueeLink = document.querySelector('.marquee-link');
// Continuous scrolling implementation

Easing Functions
function easeOutQuad(t) {
    return t * (2 - t);
}

🚀 Getting Started
Clone the repository

git clone https://github.com/yourusername/gce-gaya-website.git

📱 Responsive Design
The website is built with mobile-first approach and includes:

Flexible grid layouts

Responsive images

Mobile-friendly navigation

Adaptive font sizes

🔮 Future Enhancements
Add more JavaScript interactivity

Implement backend functionality

Add student portal

Include real-time updates

Enhance mobile experience

Add dark mode

📝 Note
This project was created several weeks ago with the JavaScript knowledge I had at that time. I plan to continue updating and improving it with more advanced features as my skills progress.

🤝 Contributing
Feel free to fork this project and submit pull requests for any improvements.

📄 License
This project is open source and available under the MIT License.

Built with ❤️ for GCE Gaya Community

text

This README.md file includes all the information you provided in a well-structured markdown format that you can directly copy and paste into your GitHub repository. It covers:
- Project overview
- Features
- Technologies used
- Code examples
- Setup instructions
- Future plans
- Professional formatting with emojis and sections

You can customize the repository URL, add your actual username, and include any additional details specific to your implementation.






