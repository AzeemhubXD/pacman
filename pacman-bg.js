// This script adds a background image programmatically
window.addEventListener('DOMContentLoaded', function() {
    console.log("Setting background image");
    
    // Create pacman movie background
    const container = document.querySelector('.background-container');
    
    if (!container) {
        console.error("Background container not found");
        return;
    }
    
    // Remove any existing images
    container.innerHTML = '';
    
    // Apply a background color
    container.style.backgroundColor = "#000066";
    container.style.backgroundImage = "linear-gradient(45deg, #000066, #660066)";
    
    // Create pacman movie style background with shapes
    const canvasEl = document.createElement('canvas');
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
    container.appendChild(canvasEl);
    
    const ctx = canvasEl.getContext('2d');
    
    // Draw background
    ctx.fillStyle = "#000066";
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
    
    // Draw pacman characters in background
    const colors = ["#FFFF00", "#FF0000", "#00FFFF", "#FF00FF", "#FFAA00"];
    const sizes = [50, 30, 40, 60, 35, 45];
    
    for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvasEl.width;
        const y = Math.random() * canvasEl.height;
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // 50% chance to draw pacman or ghost
        if (Math.random() > 0.5) {
            // Draw pacman
            ctx.fillStyle = "#FFFF00";
            ctx.beginPath();
            ctx.arc(x, y, size, Math.PI / 7, Math.PI * 2 - Math.PI / 7);
            ctx.lineTo(x, y);
            ctx.fill();
        } else {
            // Draw ghost
            ctx.fillStyle = color;
            ctx.beginPath();
            // Ghost head (arc)
            ctx.arc(x, y - size/4, size/2, Math.PI, 0, false);
            // Ghost body
            ctx.lineTo(x + size/2, y + size/2);
            
            // Wavy bottom
            for (let j = 0; j < 3; j++) {
                ctx.lineTo(x + size/2 - (j+1)*(size/3), y + size/4 + ((j%2)*size/4));
            }
            
            ctx.lineTo(x - size/2, y + size/2);
            ctx.lineTo(x - size/2, y - size/4);
            ctx.fill();
            
            // Eyes
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(x - size/6, y - size/3, size/8, 0, Math.PI * 2);
            ctx.arc(x + size/6, y - size/3, size/8, 0, Math.PI * 2);
            ctx.fill();
            
            // Pupils
            ctx.fillStyle = "blue";
            ctx.beginPath();
            ctx.arc(x - size/6, y - size/3, size/16, 0, Math.PI * 2);
            ctx.arc(x + size/6, y - size/3, size/16, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Add filter for better game visibility
    canvasEl.style.opacity = "0.4";
    
    console.log("Background setup complete");
}); 