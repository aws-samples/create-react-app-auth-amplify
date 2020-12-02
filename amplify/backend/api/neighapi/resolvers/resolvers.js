import Note from "../models/note";
import Mare from "../models/mare";
export const resolvers = {
  Query: {
    async getNote(root, { _id }) {
      return await Note.findById(_id);
    },
    async allNotes() {
      return await Note.find();
    },
    async getMare(root, { _id }) {
      return await Mare.findById(_id);
    },
    async allMares() {
      return await Mare.find();
    }
  },
  Mutation: {
    async createNote(root, { input }) {
      return await Note.create(input);
    },
    async updateNote(root, { _id, input }) {
      return await Note.findOneAndUpdate({ _id }, input, { new: true });
    },
    async deleteNote(root, { _id }) {
      return await Note.findOneAndRemove({ _id });
    },
    async createMare(root, { input }) {
      return await Mare.create(input);
    },
    async updateMare(root, { _id, input }) {
      return await Mare.findOneAndUpdate({ _id }, input, { new: true });
    },
    async deleteMare(root, { _id }) {
      return await Mare.findOneAndRemove({ _id });
    }
  }
};