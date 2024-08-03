import express from 'express';
import cors from 'cors'
import { quests } from './quests.js';




const app = express();
const port = 3000;

// Basic CORS-enabled middleware
app.use(cors());

// Endpoint to fetch quests with pagination
app.get('/api/quests', (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
    const pageSize = 3; // Number of quests per page, adjust as needed

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedQuests = quests.slice(startIndex, endIndex);

    res.json(paginatedQuests);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
