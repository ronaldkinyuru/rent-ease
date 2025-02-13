require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// Add a new property
exports.addProperty = async (req, res) => {
    const { description, location, price, status } = req.body;
    const ownerId = req.user.id; // User's ID from auth middleware

    try {
        const { error } = await supabase
            .from('properties')
            .insert({
                owner_id: ownerId,
                title,
                description,
                location,
                price,
            });

        if (error) throw error;

        res.status(201).json({ message: 'Property added successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all properties
exports.getProperties = async (req, res) => {
    try {
        const { data: properties, error } = await supabase.from('properties').select('*');
        if (error) throw error;

        res.status(200).json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific property by ID
exports.getPropertyById = async (req, res) => {
    const { id } = req.params;

    try {
        const { data: property, error } = await supabase
            .from('properties')
            .select('*')
            .eq('id', id)
            .single();
        if (error) return res.status(404).json({ message: 'Property not found' });

        res.status(200).json(property);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a property
exports.updateProperty = async (req, res) => {
    const { id } = req.params;
    const { description, location, price, status } = req.body;

    try {
        const { error } = await supabase
            .from('properties')
            .update({ description, location, price, status })
            .eq('id', id);

        if (error) throw error;

        res.status(200).json({ message: 'Property updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a property
exports.deleteProperty = async (req, res) => {
    const { id } = req.params;

    try {
        const { error } = await supabase.from('properties').delete().eq('id', id);
        if (error) throw error;

        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
