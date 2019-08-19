const jwt = require('jsonwebtoken');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, access denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.user.isAdmin === false) {
      return res.status(403).json({ msg: 'Unauthorized user' });
    }
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
