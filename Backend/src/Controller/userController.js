const generateRandomNDigits = require("../../consumerNo/genConsumerNo.js");
const  transport = require("../Config/nodemailerConfig.js");
const  user = require("../Model/user.js");
const bcrypt = require('bcrypt');
const cloudinaryUploader = require("../Config/cloudinaryConfig.js");


async function creatUser(req, res){
 
try {
    
  const fileUrls = [];
    for (let file of req.files) {
      let data = await cloudinaryUploader.uploader.upload(file.path);
      fileUrls.push(data);
    }
   
   // let result = await Products.create({ ...req.body, images: fileUrls });

    let data = await user.create({...req.body, photo:fileUrls, Consumernumber:generateRandomNDigits(5)});

    const mailData = {
        from: "itsknits@gmail.com",
        to: req.body.email,
        subject: "login Id",
        text:`Your Consumer No ${generateRandomNDigits(5)}`
      };
      await transport.sendMail(mailData);
  
      res.status(201).send({
        success: true,
        result: {
          name: data.name,
          email: data.email,
        },
      });

} catch (error) {
    console.log(error.message)
   }
}

    
async function login(req, res){
    try {
        let result =await user.findOne({ Consumernumber :  req.body.Consumernumber});
        if(result){
            res.json(result).status(200).send({
            mesaage:"login Successful",
            name:result.name,
            email:result.email,
            id:   result._id
            
          })
        }
        res.status(400).send({
          message:"incorrect credentials"
          
        })
     
    } catch (error) {
        console.log(error.messge)
    
    //res.send(error.message)
        
    }
}

//get
async function getUser(req, res){
  let { limit, page, sortBy, sortOrder} = req.query;
  try {
     let count = await user.find().count();
      let result =await user.find()
      .sort({ [sortBy]: sortOrder || 1 })
      .limit(limit || 10)
      .skip(parseInt(page) * limit); 
      res.status(201).send({ totalRecords: count, result });
  } catch (error) {
      console.log(error.messge)
   //   res.send(error.message)
      
  }
}

//get by id
 async function getUserbyid(req, res){
  try {
      let result = await user.findById(req.params.id);
      res.status(200).send(result)
  } catch (error) {
      res.status(404).send(error.message)
      
  }
}

async function updateUser (req, res){
  try {
    console.log(req.body)

    let users = await user.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinaryUploader.uploader.destroy(users.cloudinary_id);
    // Upload image to cloudinary
    const result = await cloudinaryUploader.uploader.upload(req.file.path);
    const data = {
      name: req.body.name || users.name,
      photo: result.secure_url || users.photo,
      cloudinary_id: result.public_id | users.cloudinary_id,
    };
   
    let  _id=req.params.id
    users = await user.findByIdAndUpdate(req.body, _id, data, {
 new: true
 });
    res.json(users);

    // const fileUrls = [];
    // for (let file of req.files) {
    //   let data = await cloudinaryUploader.uploader.upload(file.path);
    //   fileUrls.push(data.secure_url);
    // }

    // console.log(req.body)
    // let  _id=req.params.id

    //   let data = await user.findByIdAndUpdate({...req.body, _id, photo:fileUrls })
    //   res.json(data).status(201)
  } catch (error) {
      res.send(error.message).status(404)
  }
}



async function deleteuser(req, res) {
  try {
    let result = await user.deleteOne({ _id: req.params.id });
    res.status(200).send("user deleted !");
  } catch (error) {
    res.status(400).send(error.message);
  }
}


 





module.exports = {creatUser, login, getUser, deleteuser,getUserbyid, updateUser};