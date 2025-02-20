<h1>Carousel Slider Project</h1>

<h2>Overview</h2>
<p>
  The Carousel Slider Project is a responsive, lightweight image carousel built with vanilla JavaScript, HTML, and CSS.
  It is designed to provide a smooth and intuitive experience for users on both desktop and mobile devices.
  The carousel allows users to navigate through a series of images by clicking on navigation buttons or using touch swipe gestures.
</p>

<h2>Features</h2>
<ul>
  <li><strong>Responsive Design:</strong> Optimized for both large and small screens, ensuring a seamless experience across devices.</li>
  <li>
    <strong>Button Navigation:</strong> Navigate images by clicking the previous and next buttons.
    <ul>
      <li><strong>Large Screens:</strong> Uses <code>.prev</code> and <code>.next</code> classes.</li>
      <li><strong>Small Screens:</strong> Uses <code>.prevSm</code> and <code>.nextSm</code> classes.</li>
    </ul>
  </li>
  <li><strong>Touch/Swipe Support:</strong> On touch-enabled devices, swipe left or right to navigate the carousel.</li>
  <li><strong>Customizable Configuration:</strong> Easily adjust the item width and swipe threshold to suit your design requirements.</li>
  <li><strong>Auto-Scroll Disabled:</strong> The carousel changes slides only on user interaction (clicks or swipes).</li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
  <li>A modern web browser (Chrome, Firefox, Safari, etc.)</li>
  <li>Basic knowledge of HTML, CSS, and JavaScript</li>
</ul>

<h3>Installation</h3>
<ol>
  <li>
    <p>Clone the repository:</p>
    <pre><code>git clone https://github.com/your-username/carousel-slider-project.git
cd carousel-slider-project</code></pre>
  </li>
  <li>
    <p>Open the project:</p>
    <p>Simply open the <code>index.html</code> file in your preferred web browser.</p>
  </li>
</ol>

<h3>File Structure</h3>
<pre>
├── assets/
│   └── images/          # Contains images used in the carousel
├── css/
│   └── styles.css       # Custom styles for the carousel and project layout
├── js/
│   └── carousel.js      # JavaScript file for carousel functionality (buttons & touch events)
├── index.html           # Main HTML file containing the carousel structure
└── README.md            # Project overview and documentation
</pre>

<h2>Usage</h2>
<ul>
  <li><strong>Navigating the Carousel:</strong> Click the left/right buttons to move between images.</li>
  <li><strong>Touch Navigation:</strong> On mobile devices, swipe left or right on the carousel to navigate between images.</li>
</ul>

<h2>Customization</h2>
<ul>
  <li>
    <strong>Adjusting Item Width:</strong> Modify the <code>itemWidth</code> constant in <code>carousel.js</code> to set the width of each carousel item.
  </li>
  <li>
    <strong>Changing Swipe Sensitivity:</strong> Update the <code>swipeThreshold</code> value in <code>carousel.js</code> to change the swipe gesture sensitivity.
  </li>
</ul>

<h2>Contributing</h2>
<p>
  Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.
</p>

<h2>License</h2>
<p>
  This project is open source and available under the <a href="LICENSE">MIT License</a>.
</p>
