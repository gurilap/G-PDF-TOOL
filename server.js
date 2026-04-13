const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public', 'index.html')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
  try {
    const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    fs.writeFileSync(path.join(publicPath, 'index.html'), htmlContent);
  } catch(e) {
      console.log("index.html template not found in root, ignoring copy.");
  }
}
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/tool/:toolName', (req, res) => {
    const tool = req.params.toolName;
    const formattedToolName = tool.replace(/-/g, ' ').toUpperCase();

    const toolHtml = `<h1>${formattedToolName}</h1>`;
    res.send(toolHtml);
});

app.post('/api/process/:toolName', (req, res) => {
    res.send("Under Construction");
});

app.listen(port, () => {
    console.log(`Server is LIVE on http://localhost:${port}`);
});
