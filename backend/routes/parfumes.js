const express = require('express');

const router = express.Router();

// To get all perfumes
router.get('/', (req, res) => {
    res.json({ mssg: 'Get all Perfumes' });
}
);

// Get a single perfume
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mssg: `Get single perfume with id ${id}` });
}
);

// POST a perfume
router.post('/', (req, res) => {
    res.json({ mssg: 'Post a perfume' });
}
);

// DELETE a perfume
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'Delete a perfume' });
}
);

//Update a perfume
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update a perfume' });
}
);

module.exports = router;