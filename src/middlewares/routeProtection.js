module.exports = (req, res, next) => {
  if (!req.session.userID) {
    const isAjax = req.headers['x-requested-with'] === 'XMLHttpRequest';
    const acceptsJson = req.headers.accept && req.headers.accept.includes('application/json');

    if (isAjax || acceptsJson) {
      return res.status(401).json({ error: 'Não autenticado' });
    }

    return res.redirect('/');
  }
  next();
};