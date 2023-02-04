module.exports = {
    error404(request, response) {
      response.status(404).render('404');
    }
  }