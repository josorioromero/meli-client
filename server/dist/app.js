"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compression = _interopRequireDefault(require("compression"));

var _errorhandler = _interopRequireDefault(require("errorhandler"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @vendors
// @constants
const author = {
  name: 'Jorge',
  lastname: 'Osorio'
}; // app setup

const app = (0, _express.default)();
app.use((0, _morgan.default)('common'));
app.use((0, _compression.default)()); // GET /items

app.get('items', catchUnhandledErrors((req, res) => {
  let promise;

  if (req.query.q && req.query.q.trim()) {
    promise = fetch(`${process.env.MELI_SEARCH_SVC}?q=${req.query.q}`).then(response => response.json());
  } else {
    promise = Promise.resolve();
  }

  return promise.then(data => {
    let categories = [];
    let items = [];

    if (data) {
      categories = (data.filters || []).filter(category => category.id === 'category').map(category => category.values.map(value => value.path_from_root.map(path => path.name)).find(() => true)).find(() => true);
      let results = data.results || [];

      for (let i = 0; i < 4 && i < results.length; i++) {
        let article = results[i];
        items.push({
          id: article.id,
          title: article.title,
          price: {
            currency: article.currency_id,
            amount: article.available_quantity,
            decimals: article.price
          },
          picture: article.thumbnail,
          condition: article.condition,
          free_shipping: article.shipping && article.shipping.free_shipping === true,
          location: {
            state: article.address.state_name,
            city: article.address.city_name
          }
        });
      }
    }

    res.send({
      author,
      categories,
      items
    });
  });
}));
app.get('/items/:id', catchUnhandledErrors((req, res) => {
  return fetch(`${process.env.MELI_PRODUCT_DETAIL_SVC}/items/${req.params.id}`).then(async response => {
    if (response.status !== 200) {
      return response.text().then(body => {
        res.status(response.status).send(body);
      });
    } else {
      return response.json().then(article => {
        return Promise.all([fetch(`${process.env.MELI_PRODUCT_DETAIL_SVC}/categories/${article.category_id}`).then(response => response.json()), fetch(`${process.env.MELI_PRODUCT_DETAIL_SVC}/items/${article.id}/description`).then(response => response.json())]).then(([category, description]) => [article, category, description]);
      }).then(([article, category, description]) => {
        let categories = (category.path_from_root || []).map(path => path.name);
        let item = {
          id: article.id,
          title: article.title,
          price: {
            currency: article.currency_id,
            amount: article.available_quantity,
            decimals: article.price
          },
          picture: article.pictures && article.pictures.length > 0 ? article.pictures[0].url : article.thumbnail,
          condition: article.condition,
          free_shipping: article.shipping && article.shipping.free_shipping === true,
          sold_quantity: article.sold_quantity,
          description: description.plain_text
        };
        res.send({
          author,
          categories,
          item
        });
      });
    }
  });
}));

if (process.env.NODE_ENV === 'PROD') {
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Error: this project is non intented for production usage');
  });
} else {
  app.use((0, _errorhandler.default)());
}

function catchUnhandledErrors(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      await next(err);
    }
  };
}

var _default = app;
exports.default = _default;