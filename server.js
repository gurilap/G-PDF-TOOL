const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ FIX: Home route add karo
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Dynamic Tool Page
app.get('/tool/:toolName', (req, res) => {
    const tool = req.params.toolName;
    const formattedToolName = tool.replace(/-/g, ' ').toUpperCase();
    
    const toolHtml = `
    <h1 style="text-align:center;margin-top:50px;">
        ${formattedToolName} - Coming Soon 🚧
    </h1>
    `;
    res.send(toolHtml);
});

// API Route
app.post('/api/process/:toolName', (req, res) => {
    res.send(`Processing for ${req.params.toolName} coming soon`);
});

app.listen(port, () => {
    console.log(`Server is LIVE on http://localhost:${port}`);
});
