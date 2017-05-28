'use strict';

import mongoose from 'mongoose';

import '../models/notes';

import config from '../../etc/config.json';

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.user}:${config.db.password}${config.db.host}:${config.db.port}/${config.db.name}`);
    //mongoose.connect('mongodb://admin:1@ds155411.mlab.com:55411/vr_notes');
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });
    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}