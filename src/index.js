require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const userRoutes = require("./routes/users");

const middlewareLogRequest = require("./middleware/log");

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use("/assets", express.static("public/images"));
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server berhasil running di port ${PORT}`);
});
