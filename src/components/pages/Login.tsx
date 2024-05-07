import { useState } from "react";

//import material ui components
import { FormControl, Grid, TextField } from "@mui/material";

function Login() {
  const [login, setLogin] = useState('')

  return (
    <>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField id="login_name"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            label="Login"/>
        </FormControl>
        {(["left right"] as const).map((item, itemIndex) => (
          <div key={itemIndex}>{item}</div>
        ))}
      </Grid>
    </>
  );
}

export default Login;