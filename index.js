const markdownpdf = require("markdown-pdf")
const fs = require("fs")
 
markdownpdf()
  .from("profile.md")
  .to("profile.pdf", function () {
    console.log("Done")
  })
