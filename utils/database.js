const mongoose = require("mongoose");
const Notes = require("../models/Notes");

async function getAllNotesFromDb() {
  return await Notes.find();
}

async function createNewNotes(data) {
  const { title, text, date, color } = data;
  const newNotes = await new Notes({
    title,
    text,
    date,
    color,
  });
  return newNotes.save();
}

async function deleteNote(id) {
  return await Notes.findByIdAndDelete(id);
}

module.exports = {
  getAllNotesFromDb,
  createNewNotes,
  deleteNote,
};
