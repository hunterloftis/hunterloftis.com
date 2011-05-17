exports = module.exports = {

  index: function(req, res, next) {
    res.context(null, 'home/index', req.param('format'));
  }
  
}