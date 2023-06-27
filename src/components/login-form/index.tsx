import { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  CircularProgress,
  Grid,
  Link,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { object, string, TypeOf } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useLoginMutation } from "@redux/api/login";
import useSnackbar from "@hooks/useSnackbar";
import { useNavigate } from "react-router-dom";
import Paths from "@constants/Paths";

const SigninForm = () => {
  const { showSnack } = useSnackbar();
  const [login, { isLoading }] = useLoginMutation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const siginSchema = object({
    username: string().nonempty(`${t("Messages.ThisFieldIsRequired")}`),
    password: string().nonempty(`${t("Messages.ThisFieldIsRequired")}`),
  });
  type SigninInput = TypeOf<typeof siginSchema>;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SigninInput>({
    resolver: zodResolver(siginSchema),
    mode: "onChange",
  });

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const signinHandler = async (inputValues: SigninInput) => {
    try {
      const res = await login({ body: { ...inputValues } }).unwrap();
      showSnack({
        type: "success",
        message: t("Messages.LoginSuccess"),
      });
      localStorage.setItem("token", res.token);
      navigate(Paths.HOME);
    } catch (error) {
      showSnack({
        type: "error",
        message: t("Messages.LoginError"),
      });
    }
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(signinHandler)}
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          fullWidth
          id="username"
          label={t("Username")}
          autoComplete="username"
          autoFocus
          error={!!errors["username"]}
          helperText={errors["username"] ? errors["username"].message : ""}
          {...register("username")}
        />
        <TextField
          margin="normal"
          fullWidth
          label={t("Password")}
          type={isShowPassword ? "text" : "password"}
          id="password"
          autoComplete="current-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                {isShowPassword ? (
                  <VisibilityIcon onClick={() => setIsShowPassword(false)} />
                ) : (
                  <VisibilityOff onClick={() => setIsShowPassword(true)} />
                )}
              </InputAdornment>
            ),
          }}
          error={!!errors["password"]}
          helperText={errors["password"] ? errors["password"].message : ""}
          {...register("password")}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ my: 2 }}
          size="large"
          startIcon={
            isLoading ? (
              <CircularProgress size={20} color="secondary" />
            ) : (
              <ExitToAppIcon />
            )
          }
          disabled={isLoading}
        >
          {t("Login")}
        </Button>

        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              {t("ForgotPassword")}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SigninForm;
