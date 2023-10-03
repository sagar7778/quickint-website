const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"notifications@quickint.in",
        pass:"fhnqaraiuzhmmwzs"
    }
});

const mailOptions={
    from:"notifications@quickint.in",
    to:[ "neelpatel.6531@gmail.com", "info@quickint.in"],
    subject:"New Lead from website",
    text:"Test sending Gmail using Node Js"
};

transporter.sendMail(mailOptions, function(error,info){
    if(error){
        console.log(error);

    }else{
        console.log("Email sent:"+ info.response);
    }
})

