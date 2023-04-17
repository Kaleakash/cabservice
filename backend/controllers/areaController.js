const AreaForm = require('../models/areaModel');

exports.getAllAreaDetails = (req, res) => {
    AreaForm.find()
    .then((docs) => {
           res.status(200).json({
        message: 'area details fetched successfully!',
        areaForms: docs
      })

    })
    .catch((err) => {
      console.log('Error getting contact forms from DB:' + err);
      res.status(404).json({ message: 'Getting area details failed!' });
    });;
}

exports.createAreaForm = (req, res) => {
    console.log(req.body)
  const areaForm = new AreaForm({
    areaName: req.body.areaName,
    latitude: eval(req.body.latitude),
    longitude: eval(req.body.longitude)
  });
  console.log(areaForm);
  areaForm.save()
    .then(() => {
      console.log('Area Form saved successfully');
      res.status(201).json({ // 201=>A new resource was created.
        message: 'ContactForm added to DB successfully.'
      });
    })
    .catch((err) => {
      console.log('Error saving form to DB:', err);
      res.status(404).json({ message: 'Saving contact form failed!' });
    });
}



