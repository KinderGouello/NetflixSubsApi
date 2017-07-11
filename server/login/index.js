module.exports = (app) => {
  app.get('/login', (req, res, next) => {
    res.send({
      success: true,
      token: 'dsfjkldsfjdklsjfk',
    });
  });

  return app;
};
