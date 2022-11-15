module.exports = app => {

  // Base routes
  const indexRouter = require("./index.routes");
  app.use("/", indexRouter);

  // Auth routes
  const authRouter = require("./auth.routes");
  app.use("/", authRouter);

  // Student routes
  const studentRoutes = require('./student.routes')
  app.use('/', studentRoutes)
}

