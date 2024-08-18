import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Add = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [inputs, setInputs] = useState({
    title: location.state?.title || "",
    content: location.state?.content || "",
    img_url: location.state?.img_url || "",
  });

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addData = () => {
    const apiUrl = location.state ? `http://localhost:3001/update/${location.state.id}` : "http://localhost:3001/add";
    
    axios
      .post(apiUrl, inputs)
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "600px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Title"
            onChange={inputHandler}
            name="title"
            value={inputs.title}
            fullWidth
          />
          <TextField
            variant="outlined"
            placeholder="Content"
            onChange={inputHandler}
            name="content"
            value={inputs.content}
            multiline
            rows={4}
            fullWidth
          />
          <TextField
            variant="outlined"
            placeholder="Image URL"
            onChange={inputHandler}
            name="img_url"
            value={inputs.img_url}
            fullWidth
          />
          <Button variant="contained" color="secondary" onClick={addData}>
            {location.state ? "Update" : "Submit"}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Add;
