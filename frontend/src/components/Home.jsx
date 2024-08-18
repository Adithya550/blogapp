import { AppBar, Button, Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const updateValue = (value) => {
    navigate("add", { state: { value } });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
      window.location.reload(true);
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  useEffect(() => {
    const apiUrl = `http://localhost:3001/get`;
    axios
      .get(apiUrl)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Grid container spacing={2} sx={{ mt: "70px", justifyContent: "center" }}>
        {blogs.map((blog, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{ maxWidth: "300px", mx: "15px", mt: "20px" }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "350px",
                position: "relative",
              }}
            >
              <Container
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  p: 0,
                }}
              >
                <img
                  src={blog.img_url}
                  alt={blog.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{
                    mt: 1,
                    color: "gray",
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 1,
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {blog.content}
                </Typography>
              </Container>
              <Button
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  backgroundColor: "purple",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "darkpurple",
                  },
                }}
                onClick={()=>{
                    handleDelete(blog._id)
                    console.log(blog._id)
                }}
              >
                DELETE
              </Button>
              <Button
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  backgroundColor: "purple",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "darkpurple",
                  },
                }}
                onClick={()=>{
                  updateValue(blog);
                }}
              >
                UPDATE
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
