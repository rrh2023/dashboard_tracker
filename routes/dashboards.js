const express = require('express');
const router = express.Router();

// @route  GET api/dashboards
// @desc   Get all users dashboards
// @access Private
router.get('/', (req, res) => {
    res.send('Get all dashboards'); 
});

// @route  POST api/dashboards
// @desc   Add new dashboard
// @access Private
router.post('/', (req, res) => {
    res.send('Add dashboard'); 
});

// @route  PUT api/dashboards/:id
// @desc   Update dashboard
// @access Private
router.put('/:id', (req, res) => {
    res.send('Update dashboard'); 
});

// @route  DELETE api/dashboards/:id
// @desc   Delete dashboard
// @access Private
router.delete('/:id', (req, res) => {
    res.send('Delete dashboard'); 
});

module.exports = router