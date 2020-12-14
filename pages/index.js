// import React from "react";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
// // import { useSelector } from "react-redux";
// // import SignInSignUp from "../src/components/client/SignIn-SignUp/SignInSignUp";

// export default function Home() {
//   // const counter = useSelector((state) => state.count);
//   // console.log("object", counter);
//   // const [open, setOpen] = React.useState(false);

//   // const login = () => {
//   //   setOpen(true);
//   // };

//   // const handleClose = () => {
//   //   setOpen(false);
//   // };
//   return (
//     <Container maxWidth="sm">
//       <Box my={4}>
//         <div>
//           <Button variant="contained" color="primary">
//             Primary
//           </Button>
//           {/* <SignInSignUp open={open} onClose={handleClose} /> */}
//         </div>
//       </Box>
//     </Container>
//   );
// }
import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <div>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          {/* <SignInSignUp open={open} onClose={handleClose} /> */}
        </div>
      </Box>
    </Container>
  );
}
