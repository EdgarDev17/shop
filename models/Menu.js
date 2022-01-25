import mongoose from 'mongoose'

//Slug es un index, un identificador unico
const schema = new mongoose.Schema({
  name: String,
  parent: String,
});


export default mongoose.models.Menu || mongoose.model('Menu', schema, 'menus')