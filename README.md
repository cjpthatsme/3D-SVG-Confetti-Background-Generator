# 🎉 Confetti Background

A beautiful, performant SVG confetti background with depth of field, parallax scrolling, and dynamic color gradients.

[Confetti Background Demo](https://codepen.io/cjpthatsme/pen/EaPWJXB)

## ✨ Features

- **9 Custom SVG Ribbon Shapes** - Handcrafted, varied designs from complex to simple
- **Depth of Field Blur** - Cinematic focus effect with foreground and background blur
- **Parallax Scrolling** - Depth-based scroll speed for 3D effect
- **Dynamic Sizing** - Ribbons scale based on their depth (far = small, near = large)
- **Harmonious Gradients** - Color selection favors adjacent colors in palette
- **Weighted Shape Selection** - Control which ribbon shapes appear more frequently
- **3D Shadow Effects** - Realistic drop shadows for added depth
- **Highly Configurable** - Easy-to-use options API
- **Zero Dependencies** - Pure JavaScript, no external libraries

## 🚀 Quick Start

### 1. Include the Script

```html
<script src="confetti_background.js"></script>
```

### 2. Add a Container

```html
<div id="confetti-container"></div>
```

### 3. Initialize

```javascript
const confetti = new ConfettiBackground('#confetti-container');
```

That's it! 🎊

## 📖 Full Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        #confetti-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 0;
        }
        
        .content {
            position: relative;
            z-index: 1;
        }
    </style>
</head>
<body>
    <div id="confetti-container"></div>
    <div class="content">
        <h1>Your Content Here</h1>
    </div>

    <script src="confetti_background.js"></script>
    <script>
        const confetti = new ConfettiBackground('#confetti-container', {
            count: 150,
            colors: ['#E9D742', '#96CD61', '#2AAEDA', '#F5AA44', '#F2724C'],
            minSize: 50,
            maxSize: 100,
            ribbonWeights: [1, 1, 1, 1, 1, 1, 1, 5, 5] // Favor simpler shapes
        });
    </script>
</body>
</html>
```

## ⚙️ Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ribbons` | Array | ribbonTemplates | Array of ribbon template functions |
| `count` | Number | 100 | Number of confetti pieces to generate |
| `colors` | Array | [11 colors] | Array of hex color codes for gradients |
| `parallax` | Boolean | true | Enable/disable parallax scrolling effect |
| `minSize` | Number | 50 | Minimum confetti size in viewBox units |
| `maxSize` | Number | 100 | Maximum confetti size in viewBox units |
| `ribbonWeights` | Array | [1,1,1,1,1,1,1,1,1] | Weights for each ribbon shape (higher = more frequent) |

### Ribbon Shapes (0-8)

- **0**: Complex twisted ribbon (large)
- **1**: Curved flowing ribbon (medium)
- **2**: Multi-curve ribbon (medium)
- **3**: Spiral twisted ribbon (medium)
- **4**: Angular flowing ribbon (large)
- **5**: Short curved ribbon (small)
- **6**: Thin twisted ribbon (small)
- **7**: Minimal curved ribbon (tiny)
- **8**: Simple rectangular ribbon (tiny)

## 💡 Usage Examples

### Custom Colors

```javascript
new ConfettiBackground('#container', {
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']
});
```

**Tip:** Arrange colors in a harmonious sequence (warm to cool, light to dark) for best gradient results since adjacent colors are favored.

### Favor Simple Shapes

```javascript
new ConfettiBackground('#container', {
    ribbonWeights: [1, 1, 1, 1, 1, 1, 1, 5, 5]  // Ribbons 7-8 appear 5x more
});
```

### Larger Size Range

```javascript
new ConfettiBackground('#container', {
    minSize: 30,
    maxSize: 200
});
```

### More Confetti

```javascript
new ConfettiBackground('#container', {
    count: 300
});
```

### Disable Parallax

```javascript
new ConfettiBackground('#container', {
    parallax: false
});
```

### Multiple Selectors

```javascript
// ID selector
new ConfettiBackground('#container');

// Class selector
new ConfettiBackground('.background-wrapper');

// Data attribute
new ConfettiBackground('[data-confetti]');

// Pass DOM element directly
const element = document.getElementById('container');
new ConfettiBackground(element);
```

## 🛠️ Methods

### `regenerate()`

Regenerate all confetti pieces with new random positions, rotations, and depths.

```javascript
const confetti = new ConfettiBackground('#container');

// Later...
confetti.regenerate();
```

### `help()` (Static)

Display comprehensive help in the console.

```javascript
ConfettiBackground.help();
```

## 🎨 Color Selection Algorithm

The gradient system favors adjacent colors for harmonious results:

- **70%** chance: Pick immediately adjacent color
- **20%** chance: Pick color 2 positions away
- **10%** chance: Pick any random color

This means if you arrange your colors thoughtfully, you'll get beautiful, cohesive gradients!

## 🌟 Advanced Tips

### Performance

- For better performance on lower-end devices, reduce `count` to 50-100
- Disable `parallax` if you don't need scroll effects

### Visual Design

- Use 5-11 colors for best variety
- Arrange colors in a spectrum (e.g., warm → cool) for harmonious gradients
- Use `ribbonWeights` to control visual complexity
- Set `minSize` and `maxSize` based on your viewport size

### Layer Effects

```javascript
// Background layer - subtle
new ConfettiBackground('#bg-layer', {
    count: 50,
    minSize: 30,
    maxSize: 60,
    ribbonWeights: [0, 0, 0, 0, 0, 0, 1, 5, 5]  // Only simple shapes
});

// Foreground layer - bold
new ConfettiBackground('#fg-layer', {
    count: 30,
    minSize: 80,
    maxSize: 150,
    ribbonWeights: [3, 3, 3, 2, 2, 0, 0, 0, 0]  // Only complex shapes
});
```

## 📁 Project Structure

```
confetti/
├── confetti_background.js    # Main library file
├── demo.html                 # Demo page
├── more different/           # Original SVG ribbon files
│   ├── ribbon2-01.svg
│   ├── ribbon2-02.svg
│   └── ...
├── README.md
└── .gitignore
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - feel free to use in personal and commercial projects.

## 🎯 Browser Support

Works in all modern browsers that support:
- SVG
- ES6 JavaScript
- `querySelector`
- `requestAnimationFrame`

Tested on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🙏 Credits

Created with ❤️ by [Your Name]

Custom SVG ribbon designs included.

---

**Need help?** Run `ConfettiBackground.help()` in your browser console for interactive documentation!

