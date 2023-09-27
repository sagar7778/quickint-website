export default function myfunc(req,res){
 if(req.method==="GET"){
  res.status(200).send('Get Request Success')
 }
 if(req.method === "POST"){
  const {name,contactNo,email,message} = req.body
  

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
    to:[ "koshtisagar7778@gmail.com"],
    subject:"New Lead from website",
    text: "Name: " + name + "\n" + "Phone: " + contactNo + "\n" + "Email: " + email + "\n" + "Message: " + message
};

transporter.sendMail(mailOptions, function(error,info){
    if(error){
        console.log(error);

    }else{
        console.log("Email sent:"+ info.response);
    }
})

  res.status(201).json({
     message:'Success',
     method:'POST',
  });
 }
}