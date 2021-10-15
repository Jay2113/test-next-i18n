import React, {
  FC,
  FormEventHandler,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useRouter } from "next/router";
import {
  makeStyles,
  TextField,
  Button,
  Typography,
  Link,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import { CustomTextField } from "../src/components/textField/textField";
import { useTranslation } from "next-i18next";

import { useAuth } from "../src/contexts/auth";
import { DefaultPageLayout } from "../src/components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

const useStyles = makeStyles((theme) => ({
  form: {
    padding: 30,
  },
  field: {
    borderRadius: "7px",
    backgroundColor: theme.palette.background.default,
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
  },
  fieldContainer: {
    marginBottom: theme.spacing(2),
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {},
  },
  loginButtonWrapper: {
    position: "relative",
    display: "flex",
  },
  loginButton: {
    fontWeight: 600,
    fontStyle: "normal",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    padding: "1rem",
    whiteSpace: "nowrap",

    [theme.breakpoints.down("sm")]: {},
  },
  loginButtonLoader: {
    color: "#78BB67",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  title: {
    color: theme.palette.secondary.main,
  },
  
  fieldText: {
    color: theme.palette.background.default,
    marginRight: "5rem",
  },
  textBlack: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
    fontStyle: "normal",
    padding: "3px 1rem 0 1rem",
    fontSize: "16px",
  },
  error: {
    marginTop: "2rem",
  },
  gridError: {
    marginBottom: "2rem",
  },
  activated: {
    fontStyle: "italic",
    color: theme.palette.primary.main,
  },
}));

type LoginPageProps = {};

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage: FC<LoginPageProps> = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const router = useRouter();
  const { auth, signIn } = useAuth();
  //   const email = router.query.email as string;
  //   const activated = router.query.activated as string;

  const [formValues, setFormValues] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [authError, setAuthError] = useState<string | undefined>(undefined);

  const setFieldValue = useCallback(
    (field: keyof LoginForm, value: string) => {
      setFormValues((values) => ({
        ...values,
        [field]: value,
      }));
    },
    [setFormValues]
  );

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const onSubmit: FormEventHandler = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setSubmitting(true);
        const authStatus = await signIn(formValues.email, formValues.password);
        if (authStatus.authenticated) {
          setAuthenticated(true);
          await router.push("/");
        }
      } catch (e) {
        console.log(e);
      }
      setSubmitting(false);
    },
    [formValues, router, signIn]
  );

  return (
    <DefaultPageLayout title={t("login.title")}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={4}
      >
        <Grid item>
          <Typography variant="h1" className={classes.title}>
            {t("Connexion")}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <Link href="#" className={classes.textBlack}>
              {t("Pas encore inscrit ?")}
            </Link>
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <form className={classes.form} onSubmit={onSubmit}>
            <div className={classes.fieldContainer}>
              <CustomTextField
                label={t("email")}
                name="email"
                id="filled-error"
                fullWidth
                className={classes.field}
                value={formValues.email}
                variant="outlined"
                onChange={(e) => setFieldValue("email", e.target.value)}
              />
              <CustomTextField
                label={t("password")}
                name="password"
                type="password"
                id="filled-error"
                className={classes.field}
                value={formValues.password}
                onChange={(e) => setFieldValue("password", e.target.value)}
                fullWidth
                variant="outlined"
              />

              <div className={classes.loginButtonWrapper}>
                <Button
                  type="submit"
                  className={classes.loginButton}
                  variant="contained"
                  disabled={submitting}
                  color="primary"
                >
                  {t("connexion")}
                </Button>
                {submitting && (
                  <CircularProgress
                    size={24}
                    className={classes.loginButtonLoader}
                  />
                )}
              </div>
            </div>
          </form>
        </Grid>
      </Grid>

      <Grid container >
      <Grid item className={classes.fieldContainer}>
              <Typography>
                <Link href="/mot-de-passe-oublie" className={classes.textBlack}>
                  {t("Mot de passe oublié ? ")}
                </Link>
              </Typography>
            </Grid>
      </Grid>
    </DefaultPageLayout>
  );
};

export default LoginPage;
