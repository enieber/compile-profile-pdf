const markdownpdf = require("markdown-pdf")
const fs = require("fs")
 
/*
markdownpdf()
  .from("profile.md")
  .to("profile.pdf", function () {
    console.log("Done")
  })
*/

markdownpdf()
  .from("profilept.md")
  .to("profilept.pdf", function () {
    console.log("Done pt")
  })
