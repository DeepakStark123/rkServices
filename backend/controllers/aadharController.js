const Aadhar = require('../models/Aadhar');

exports.createAadhar = async (req, res) => {
    try {
        const aadhar = new Aadhar(req.body);
        const savedAadhar = await aadhar.save();
        res.status(201).json(savedAadhar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllAadhars = async (req, res) => {
    try {
        const aadhars = await Aadhar.find();
        res.status(200).json(aadhars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAadharById = async (req, res) => {
    try {
        const aadhar = await Aadhar.findById(req.params.id);
        if (!aadhar) return res.status(404).json({ message: 'Aadhar not found' });
        res.status(200).json(aadhar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAadhar = async (req, res) => {
    try {
        const updatedAadhar = await Aadhar.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAadhar) return res.status(404).json({ message: 'Aadhar not found' });
        res.status(200).json(updatedAadhar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteAadhar = async (req, res) => {
    try {
        const deletedAadhar = await Aadhar.findByIdAndDelete(req.params.id);
        if (!deletedAadhar) return res.status(404).json({ message: 'Aadhar not found' });
        res.status(200).json({ message: 'Aadhar deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
