function initPage(req, res, next) {
  const page = parseInt(req.query.page) || 1; // Req the page
  const pageSize = parseInt(req.query.page_size) || 5; // Comments per page

  req.page = page;
  req.pageSize = pageSize;

  next();
}

module.exports = { initPage };
