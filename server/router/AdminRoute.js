const express = require('express');
const expressAsynchandler = require('express-async-handler');

const bcrypt = require('bcryptjs');
const User = require('../model/database/Admin');

const userRoute = express.Router();
userRoute.post("/signin", 
expressAsynchandler(async(req, res) => {
    
    console.log(req.body.email);
    if (!req.body.email) {
        return (res.send({ message: "Please Enter email id" }))
    } else if (!req.body.password) {
        return res.send({ message: "Please enter password" });
    }

    const user = await User.findOne({ email: req.body.email });

    console.log(req.body.email + " admin wants to sign in ");

    if (user) {
        console.log(req.body.email + " admin signin found in database");

        if(bcrypt.compareSync(req.body.password,user.password))
        {
            return res.send({
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                education:user.education,
                expre:user.expre,
                message:"Success"
            });
        }
        else
        {
            console.log("Invalid Password");
            res.send({
                message: "Invalid email or password",
               
            });
            // window.location.reload();
        }
    } else {
        console.log("Invalid Email");
        res.send({
            message: "Invalid email or password",
        });
        // window.location.reload();
    }

}));

userRoute.post("/allfiles", (req, res) => {
    User.find({},(err, files) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      return res.json({ files });
    });
  });

userRoute.get(
    "/:id",
    expressAsynchandler(async (req, res) => {
      const sellerId = req.params.id;
      try {
        const seller = await User.findOne({ _id: sellerId });
        if (seller) {
          return res.status(200).send({
            message: "Success",
            seller: seller,
          });
        }
        return res
          .status(400)
          .send({ message: "Could not find the requested resource" });
      } catch (err) {
        return res
          .status(400)
          .send({ message: "Could not find the requested resource" });
      }
    })
  );

userRoute.post("/register",
expressAsynchandler(async(req,res)=>{

    console.log(req.body.email + " admin requested to register");

    const admin = await User.findOne({ email: req.body.email });

    if(admin)
    {
        console.log(req.body.email+" admin already registered ");
        res.send({
            message:"Email Already Registered"
        });
    }
    else{

        // var digits = "0123456789";
        // let OTP = "";
        // for (let i = 0; i < 6; i++) {
        //   OTP += digits[Math.floor(Math.random() * 10)];
        // }

        // const transporter=nodemailer.createTransport(
        //     sendgridTransport({
        //         auth:
        //     })
        // )


        const user=new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            education:req.body.education,
            exper:req.body.exper,
            contactNo:req.body.contactNo
        });

        console.log(user.firstName);
        console.log(user.email);
        console.log(user.lastName);
        console.log(user.contactNo);

        const creatstudent=await user.save();

        console.log(req.body.email + " admin created");

        res.status(200).send({
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            contactNo:user.contactNo,
            education:user.education,
            exper:user.exper,
            message:"Success"
        });
    }
}));

module.exports = userRoute;