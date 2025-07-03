const express = require('express');
const router = express.Router();
const Extension = require('../models/Extension');

// Create a new extension
router.post('/', async (req, res) => {
  console.log('POST /extensions called with body:', req.body);
  try {
    const { name, developer, logo, description, category, features, version, published, stats } = req.body;
    const extension = new Extension({
      name,
      developer,
      logo,
      description,
      category,
      features,
      version,
      published,
      stats,
    });
    await extension.save();
    console.log('Extension saved successfully:', extension);
    res.status(201).json(extension);
  } catch (error) {
    console.error('Error saving extension:', error);
    res.status(500).json({ error: error.message });
  }
});


// Get all extensions
router.get('/', async (req, res) => {
  try {
    const extensions = await Extension.find();
    res.json(extensions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single extension by ID (move this above the /:id/publish and /:id routes to avoid route conflicts)
router.get('/:id', async (req, res, next) => {
  // If the id is 'publish', skip to next route
  if (req.params.id === 'publish') return next();
  try {
    const extension = await Extension.findById(req.params.id);
    if (!extension) return res.status(404).json({ error: 'Extension not found' });
    res.json(extension);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get a single extension by ID
router.get('/:id', async (req, res) => {
  try {
    const extension = await Extension.findById(req.params.id);
    if (!extension) return res.status(404).json({ error: 'Extension not found' });
    res.json(extension);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an extension
router.put('/:id', async (req, res) => {
  try {
    const updated = await Extension.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Extension not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an extension
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Extension.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Extension not found' });
    res.json({ message: 'Extension deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Toggle publish status
router.patch('/:id/publish', async (req, res) => {
  try {
    const extension = await Extension.findById(req.params.id);
    if (!extension) return res.status(404).json({ error: 'Extension not found' });
    extension.published = !extension.published;
    await extension.save();
    res.json(extension);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 