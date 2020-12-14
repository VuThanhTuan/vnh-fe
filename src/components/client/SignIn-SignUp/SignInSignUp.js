import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import "./SignInSignUp.module.scss";
import SignIn from "./SignIn/SignIn";
import Signup from "./Signup";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function SignInSignUp(props) {
  const { onClose, open } = props;

  const [value, setValue] = React.useState(0);

  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    onClose();
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <div className="dialog-container">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          className="popup-header"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Đăng nhập" {...a11yProps(0)} />
          <Tab label="Đăng ký" {...a11yProps(1)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <SignIn />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Signup />
          </TabPanel>
        </SwipeableViews>
      </div>
    </Dialog>
  );
}

export default SignInSignUp;
