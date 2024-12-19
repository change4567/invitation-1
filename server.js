const express = require('express');
const app = express();
const net = require('net');

function findAvailablePort(startPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer();
        server.listen(startPort, () => {
            const { port } = server.address();
            server.close(() => resolve(port));
        });
        server.on('error', () => {
            resolve(findAvailablePort(startPort + 1));
        });
    });
}

async function startServer() {
    const port = await findAvailablePort(process.env.PORT || 3000);
    
    app.use(express.static('public'));
    app.use(express.json());

    app.post('/api/generate', (req, res) => {
        const { userName, userProblem } = req.body;
        const generator = new ReportGenerator(userName, userProblem);
        generator.generateReport()
            .then(report => {
                res.json({ report });
            });
    });

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

startServer().catch(console.error); 