const express=require("express");
const app = express();
app.get("/", (req, res) => {
   res.send("<p>hi there!</p>");
});

app.listen(8096);

// End

