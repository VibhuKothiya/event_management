const mongoose = require('mongoose');

const rsvpSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
    status: {
        type: String,
        enum: ['confirmed', 'waitlist', 'cancelled'],
        default: 'confirmed',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// User can RSVP to the same event only once
rsvpSchema.index({ user: 1, event: 1 }, { unique: true });

module.exports = mongoose.model('RSVP', rsvpSchema);