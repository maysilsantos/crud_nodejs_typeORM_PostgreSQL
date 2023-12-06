import "reflect-metadata" //lib que permite a utilizacao de notations em uma aplicacao
import express from "express"

const app = express();

app.listen(3000, () => console.log("Server running baby!"))