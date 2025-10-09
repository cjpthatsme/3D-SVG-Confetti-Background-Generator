# 🎨 Creating Custom Ribbon Templates

This guide explains how to create your own custom ribbon template functions for the Confetti Background system.

## 📋 Table of Contents

- [Overview](#overview)
- [Template Function Structure](#template-function-structure)
- [Requirements](#requirements)
- [Step-by-Step Guide](#step-by-step-guide)
- [Best Practices](#best-practices)
- [Examples](#examples)
- [Common Patterns](#common-patterns)
- [Troubleshooting](#troubleshooting)

## Overview

Ribbon templates are functions that generate SVG markup strings. They accept two color parameters and return a complete SVG string with unique gradient IDs.

## Template Function Structure

```javascript
(color1, color2) => {
    // 1. Generate unique gradient IDs
    const id1 = getUniqueId();
    const id2 = getUniqueId();
    
    // 2. Return SVG string with embedded gradients and paths
    return `<svg xmlns="http://www.w3.org/2000/svg" ...>
        <defs>
            <linearGradient id="${id1}" ...>
                <stop offset="0" stop-color="${color1}"/>
                <stop offset="1" stop-color="${color2}"/>
            </linearGradient>
        </defs>
        <path d="..." style="fill:url(#${id1})"/>
    </svg>`;
}
```

## Requirements

### Must Have

1. **Arrow Function Signature**: `(color1, color2) => { ... }`
2. **Unique Gradient IDs**: Use `getUniqueId()` for each gradient
3. **Color Parameters**: Use `${color1}` and `${color2}` in gradient stops
4. **Return SVG String**: Return a complete SVG element as a string
5. **Proper xmlns**: Include `xmlns="http://www.w3.org/2000/svg"`

### Should Have

1. **viewBox attribute**: Define a consistent coordinate system
2. **xmlns:xlink**: Include if using `xlink:href` for gradient references
3. **Reasonable size**: Keep viewBox dimensions under 100x100 for consistency

### Must Not

1. **Don't use random IDs**: Always use `getUniqueId()` for gradients
2. **Don't hardcode colors**: Use the `color1` and `color2` parameters
3. **Don't include XML declaration**: No `<?xml version="1.0"?>` tags

## Step-by-Step Guide

### 1. Start with Your SVG File

If you have an existing SVG file, open it in a text editor:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 50">
    <defs>
        <linearGradient id="grad1">
            <stop offset="0" stop-color="#FF0000"/>
            <stop offset="1" stop-color="#00FF00"/>
        </linearGradient>
    </defs>
    <path d="M10,0 L15,25 L10,50 L5,25 Z" fill="url(#grad1)"/>
</svg>
```

### 2. Convert to Template Function

```javascript
(color1, color2) => {
    const id1 = getUniqueId();
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 50"><defs><linearGradient id="${id1}"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient></defs><path d="M10,0 L15,25 L10,50 L5,25 Z" fill="url(#${id1})"/></svg>`;
}
```

### 3. Handle Multiple Gradients

If your SVG has multiple gradients:

```javascript
(color1, color2) => {
    const id1 = getUniqueId();
    const id2 = getUniqueId();
    const id3 = getUniqueId();
    
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 50">
        <defs>
            <linearGradient id="${id1}">
                <stop offset="0" stop-color="${color1}"/>
                <stop offset="1" stop-color="${color2}"/>
            </linearGradient>
            <linearGradient id="${id2}">
                <stop offset="0" stop-color="${color2}"/>
                <stop offset="1" stop-color="${color1}"/>
            </linearGradient>
            <!-- Reference another gradient -->
            <linearGradient id="${id3}" xlink:href="#${id1}"/>
        </defs>
        <path d="..." style="fill:url(#${id1})"/>
        <path d="..." style="fill:url(#${id2})"/>
    </svg>`;
}
```

### 4. Add to Ribbon Templates Array

```javascript
const ribbonTemplates = [
    // ... existing templates ...
    
    // Your new template
    (color1, color2) => {
        const id1 = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 50">
            <defs>
                <linearGradient id="${id1}">
                    <stop offset="0" stop-color="${color1}"/>
                    <stop offset="1" stop-color="${color2}"/>
                </linearGradient>
            </defs>
            <path d="M10,0 L15,25 L10,50 L5,25 Z" fill="url(#${id1})"/>
        </svg>`;
    }
];
```

### 5. Test Your Template

```javascript
// Add it to the options
new ConfettiBackground('#container', {
    ribbons: [...ribbonTemplates, myNewRibbonTemplate],
    ribbonWeights: [0,0,0,0,0,0,0,0,0,1] // Only use your new template
});
```

## Best Practices

### Sizing

```javascript
// Good: Consistent viewBox for uniform scaling
viewBox="0 0 20 50"  // Width: 20, Height: 50

// Good: Square shapes work well
viewBox="0 0 25 25"

// Avoid: Very large dimensions
viewBox="0 0 500 1000"  // Too large

// Avoid: Very small dimensions  
viewBox="0 0 2 5"  // Too small, may look pixelated when scaled up
```

### Gradients

```javascript
// Good: Use both color parameters
<stop offset="0" stop-color="${color1}"/>
<stop offset="1" stop-color="${color2}"/>

// Good: Create variations by reversing colors
<stop offset="0" stop-color="${color2}"/>
<stop offset="1" stop-color="${color1}"/>

// Good: Multi-stop gradients
<stop offset="0" stop-color="${color1}"/>
<stop offset="0.5" stop-color="${color2}"/>
<stop offset="1" stop-color="${color1}"/>

// Avoid: Hardcoded colors
<stop offset="0" stop-color="#FF0000"/>  // Don't do this!
```

### Transforms

```javascript
// Good: Use transform attributes on gradients
gradientTransform="rotate(45)"
gradientTransform="translate(10 20) scale(1.5)"

// Good: Transform paths for variety
transform="rotate(15 50 50)"
transform="scale(1.2)"
```

### Performance

```javascript
// Good: Simple paths
d="M10,0 L15,25 L10,50 L5,25 Z"

// Good: Use curves for smooth shapes
d="M10,0 Q15,12 12,25 T10,50"

// Avoid: Overly complex paths with hundreds of points
// Keep path data reasonable
```

## Examples

### Simple Rectangle Ribbon

```javascript
(color1, color2) => {
    const id1 = getUniqueId();
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 30">
        <defs>
            <linearGradient id="${id1}" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="${color1}"/>
                <stop offset="1" stop-color="${color2}"/>
            </linearGradient>
        </defs>
        <rect x="2" y="0" width="6" height="30" fill="url(#${id1})" rx="1"/>
    </svg>`;
}
```

### Curved Ribbon

```javascript
(color1, color2) => {
    const id1 = getUniqueId();
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 40">
        <defs>
            <linearGradient id="${id1}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0" stop-color="${color1}"/>
                <stop offset="1" stop-color="${color2}"/>
            </linearGradient>
        </defs>
        <path d="M7.5,0 Q12,10 7.5,20 Q3,30 7.5,40" 
              stroke="url(#${id1})" 
              stroke-width="4" 
              fill="none" 
              stroke-linecap="round"/>
    </svg>`;
}
```

### Multi-Gradient Ribbon

```javascript
(color1, color2) => {
    const id1 = getUniqueId();
    const id2 = getUniqueId();
    
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 45">
        <defs>
            <linearGradient id="${id1}" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0" stop-color="${color1}"/>
                <stop offset="1" stop-color="${color2}"/>
            </linearGradient>
            <linearGradient id="${id2}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0" stop-color="${color2}"/>
                <stop offset="1" stop-color="${color1}"/>
            </linearGradient>
        </defs>
        <!-- Front face -->
        <path d="M5,0 L15,0 L15,40 L5,40 Z" fill="url(#${id1})"/>
        <!-- Side face for 3D effect -->
        <path d="M15,0 L20,5 L20,45 L15,40 Z" fill="url(#${id2})" opacity="0.7"/>
    </svg>`;
}
```

### Star/Burst Shape

```javascript
(color1, color2) => {
    const id1 = getUniqueId();
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <defs>
            <radialGradient id="${id1}">
                <stop offset="0%" stop-color="${color1}"/>
                <stop offset="100%" stop-color="${color2}"/>
            </radialGradient>
        </defs>
        <path d="M12,2 L14,10 L22,10 L16,15 L18,23 L12,18 L6,23 L8,15 L2,10 L10,10 Z" 
              fill="url(#${id1})"/>
    </svg>`;
}
```

## Common Patterns

### Pattern: Two-Tone Ribbon

Create depth with two different gradient directions:

```javascript
(color1, color2) => {
    const id1 = getUniqueId();
    const id2 = getUniqueId();
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 40">
        <defs>
            <linearGradient id="${id1}" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0" stop-color="${color1}"/>
                <stop offset="1" stop-color="${color2}"/>
            </linearGradient>
            <linearGradient id="${id2}" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0" stop-color="${color1}"/>
                <stop offset="1" stop-color="${color2}"/>
            </linearGradient>
        </defs>
        <rect x="0" y="0" width="6" height="40" fill="url(#${id1})"/>
        <rect x="6" y="0" width="6" height="40" fill="url(#${id2})"/>
    </svg>`;
}
```

### Pattern: Twisted Ribbon

Use transforms to create a 3D twist effect:

```javascript
(color1, color2) => {
    const id1 = getUniqueId();
    const id2 = getUniqueId();
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 50">
        <defs>
            <linearGradient id="${id1}">
                <stop offset="0" stop-color="${color1}"/>
                <stop offset="1" stop-color="${color2}"/>
            </linearGradient>
            <linearGradient id="${id2}">
                <stop offset="0" stop-color="${color2}"/>
                <stop offset="1" stop-color="${color1}"/>
            </linearGradient>
        </defs>
        <ellipse cx="10" cy="12.5" rx="8" ry="2" fill="url(#${id1})"/>
        <rect x="2" y="12.5" width="16" height="25" fill="url(#${id2})"/>
        <ellipse cx="10" cy="37.5" rx="8" ry="2" fill="url(#${id1})"/>
    </svg>`;
}
```

### Pattern: Gradient Reference

Reuse gradients with transforms:

```javascript
(color1, color2) => {
    const id1 = getUniqueId();
    const id2 = getUniqueId();
    const id3 = getUniqueId();
    
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 45">
        <defs>
            <linearGradient id="${id1}">
                <stop offset="0" stop-color="${color1}"/>
                <stop offset="1" stop-color="${color2}"/>
            </linearGradient>
            <!-- Reference with transform -->
            <linearGradient id="${id2}" xlink:href="#${id1}" 
                          gradientTransform="rotate(90)"/>
            <linearGradient id="${id3}" xlink:href="#${id1}" 
                          gradientTransform="rotate(180)"/>
        </defs>
        <path d="..." fill="url(#${id1})"/>
        <path d="..." fill="url(#${id2})"/>
        <path d="..." fill="url(#${id3})"/>
    </svg>`;
}
```

## Troubleshooting

### Problem: Ribbons look stretched

**Solution**: Check your viewBox aspect ratio. Keep it reasonable (1:2 to 1:5 ratio works well).

```javascript
// Good
viewBox="0 0 20 50"  // 1:2.5 ratio

// May stretch
viewBox="0 0 10 100"  // 1:10 ratio
```

### Problem: Gradients not showing

**Solution**: Make sure gradient IDs match between definition and usage:

```javascript
// Correct
const id1 = getUniqueId();
<linearGradient id="${id1}">
<path fill="url(#${id1})"/>

// Wrong - IDs don't match
<linearGradient id="${id1}">
<path fill="url(#grad1)"/>  // Wrong!
```

### Problem: Colors not changing

**Solution**: Verify you're using `${color1}` and `${color2}`, not hardcoded colors:

```javascript
// Correct
<stop offset="0" stop-color="${color1}"/>

// Wrong
<stop offset="0" stop-color="#FF0000"/>
```

### Problem: Ribbons too small/large

**Solution**: Adjust the viewBox dimensions or use the `minSize`/`maxSize` options:

```javascript
// In template: adjust viewBox
viewBox="0 0 25 50"  // Larger base size

// Or in options
new ConfettiBackground('#container', {
    minSize: 80,   // Larger minimum
    maxSize: 200   // Larger maximum
});
```

### Problem: Performance issues

**Solution**: Simplify path data and reduce number of gradients:

```javascript
// Simple path (fast)
d="M10,0 L15,25 L10,50 L5,25 Z"

// Complex path (slower)
d="M10,0 C12,5 13,10 ... (hundreds of points)"
```

## Testing Your Template

Create a test page to preview your ribbon:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { background: #222; padding: 50px; }
        .test-ribbon { 
            display: inline-block;
            margin: 20px;
            transform: scale(3);
        }
    </style>
</head>
<body>
    <div id="container"></div>
    
    <script src="confetti_background.js"></script>
    <script>
        // Test your new template
        const myRibbon = (color1, color2) => {
            const id1 = getUniqueId();
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 50">
                <defs>
                    <linearGradient id="${id1}">
                        <stop offset="0" stop-color="${color1}"/>
                        <stop offset="1" stop-color="${color2}"/>
                    </linearGradient>
                </defs>
                <path d="M10,0 L15,25 L10,50 L5,25 Z" fill="url(#${id1})"/>
            </svg>`;
        };
        
        // Test with only your ribbon
        new ConfettiBackground('#container', {
            ribbons: [myRibbon],
            count: 50,
            colors: ['#FF0000', '#00FF00', '#0000FF']
        });
    </script>
</body>
</html>
```

## Resources

- [MDN SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
- [SVG Path Commands](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
- [SVG Gradients](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Gradients)
- [SVG Transforms](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform)

## Contributing Your Templates

If you create awesome ribbon templates, consider sharing them! Open an issue or PR with:

1. The template function code
2. A screenshot of the ribbon
3. Any special notes about the design

---

Happy ribbon creating! 🎨✨

