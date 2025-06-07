function runMiddlewares(req, res, middlewares) {
  let index = 0;

  const next = () => {
    if (index < middlewares.length) {
      const middleware = middlewares[index++];
      middleware(req, res, next);
    }
  };
  next();
}

const middleware1 = (req, res, next) => {
  console.log("Middleware 1 executed: Auth check");
  next();
};

const middleware2 = (req, res, next) => {
  console.log("Middleware 2 executed: Data validation");
  next();
};

const middleware3 = (req, res, next) => {
  console.log("Middleware 3 executed: Save to database");
  next();
};


const req = {};
const res = {};

runMiddlewares(req, res, [middleware1, middleware2, middleware3]);