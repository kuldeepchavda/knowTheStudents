// // import { useState } from "react";
// const token =localStorage.getItem("token");

// const userAuthentication = async (req, res) => {
//   try {
//     const response = await fetch(`http://localhost:8080/registration/user`, {
//       method: "GET",
//       headers: {
//         Authorization: `${token}`,
//       },
//     });
//     if (response.ok) {
//       const data = await response.json();
      
//       // res.status(200).json({ data: data.data });
    
//     return data}
//   } catch (err) {
//     console.log("error while catching userData",err);
//     res.status(500).json({error:err.message})
//   }
// };

// module.exports = { userAuthentication };
