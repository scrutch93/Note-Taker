import notesData from '../db/db.json';

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(notesData));
  

    app.post('/api/notes', (req, res) => {
   


      }); 