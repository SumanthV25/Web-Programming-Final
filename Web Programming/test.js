let express = require("express")
let path = require ("path")
let hbs=require("hbs")


let app = express()
app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, 'templates/views'))
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, "templates/partials"))
app.get("/", (req, res)=>{
    res.render("home")
})
app.get("/selectcity.html", (req, res)=>{
    res.render('selectcity')
})
app.get("/gurgaon.html", (req, res)=>{
    res.render('gurgaon')
});
app.get("/delhi.html", (req, res)=>{
    res.render('delhi')
});
app.get("/login.html", (req, res)=>{
    res.render('login')
});
app.get("/signup.html", (req, res)=>{
    res.render('signup')
});
app.get("/ITC-gurgaon.html", (req, res)=>{
    res.render('ITC-gurgaon')
});
app.get("/maiden.html", (req, res)=>{
    res.render('maiden')
});
app.get("/about.html", (req, res)=>{
    res.render('about')
});
// app.get("/*", (req,res)=>{
//     res.render('error')
// })
app.listen("200", ()=>{
    console.log("Server is running on localhost200")
    console.log(__dirname)
})