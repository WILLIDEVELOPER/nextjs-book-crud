import React, { useState } from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [value, setValue] = useState();
  const handleChange = (e, val) => {
    setValue(val);
    if (val == 0) {
      router.push("/");
    } else if (val == 1) {
      router.push("/books");
    }else if(val == 2){
      router.push("/books/add")
    }
  };
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#001E3C" }}>
      <Toolbar>
        <MenuBookIcon sx={{ fontSize: "26px" }} />
        <Box display="flex" margin={"auto"}>
          <Tabs onChange={handleChange} value={value} textColor="inherit">
            <Tab label="Home" />
            <Tab label="All Books" />
            <Tab label="Add Book" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
