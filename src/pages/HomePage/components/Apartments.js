import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import BlueButton from "../../../common/components/StyledButtons/BlueButton";
import { apartmentsConst } from "../../../utils/constants";
import ApartmentCard from "./ApartmentCard";
import hearts from "../../../assets/Icon ionic-md-heart-half.svg";
import home from "../../../assets/Icon awesome-home.svg";
import hands from "../../../assets/Icon awesome-hands-helping.svg";

function Apartments() {
  const themeState = useSelector((state) => state.navbar);

  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: themeState.isDark
        ? theme.palette.dark.bgc
        : theme.palette.light.bgc,
      padding: `${theme.typography.pxToRem(44)} ${theme.typography.pxToRem(
        44
      )}`,
      overflow: "hidden",
    },
    mainHeader: {
      color: themeState.isDark
        ? theme.palette.dark.text
        : theme.palette.light.text,
      fontSize: theme.typography.pxToRem(60),
      fontWeight: "bold",
      marginTop: `${theme.typography.pxToRem(200)}`,
    },
    innerHeader: {
      color: theme.palette.primaryBlue,
    },
    descriptionText: {
      minWidth: theme.typography.pxToVw(430),
      maxWidth: theme.typography.pxToVw(430),
      margin: ` ${theme.typography.pxToRem(12)} 0 `,
      fontSize: theme.typography.pxToRem(22),
      color: themeState.isDark
        ? theme.palette.dark.text
        : theme.palette.light.text,
      opacity: "0.6",
      fontStyle: "italic",
    },
    apartmentsGrid: {
      paddingTop: `${theme.typography.pxToRem(80)}`,
    },
    imgs: {
      backgroundColor: `${theme.palette.primaryBlue}`,
      borderRadius: `${theme.typography.pxToRem(200)}`,
      transform: "scale(0.8)",
      padding: `${theme.typography.pxToRem(10)}`,
      width: `${theme.typography.pxToRem(244)}`,
      height: `${theme.typography.pxToRem(244)}`,
    },
    serviceText: {
      color: themeState.isDark
        ? theme.palette.dark.text
        : theme.palette.light.text,
      fontSize: theme.typography.pxToRem(28),
      textAlign: "center",
      marginLeft: theme.typography.pxToRem(-180),
    },
    serviceHeader: {
      color: themeState.isDark
        ? theme.palette.dark.text
        : theme.palette.light.text,
      fontSize: theme.typography.pxToRem(60),
      fontWeight: "bold",
      marginTop: `${theme.typography.pxToRem(100)}`,
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.container}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={6} direction="column" justifyContent="space-between">
          <p className={classes.mainHeader}>
            TOP RATED <span className={classes.innerHeader}>APARTMENTS</span>
            <br />
          </p>

          <p className={classes.descriptionText}>
            with over 1 thousand homes for sale
          </p>
        </Grid>

        <Grid
          item
          container
          alignItems="center"
          direction="row"
          justifyContent="center"
          className={classes.apartmentsGrid}
        >
          <Grid item xs={10} lg={3}>
            <ApartmentCard />
          </Grid>

          <Grid item xs={10} lg={3}>
            <ApartmentCard />
          </Grid>
          <Grid item xs={10} lg={3}>
            <ApartmentCard />
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="row"
          justifyContent="center"
          className={classes.apartmentsGrid}
        >
          <Grid item xs={10} lg={3}>
            <ApartmentCard />
          </Grid>

          <Grid item xs={10} lg={3}>
            <ApartmentCard />
          </Grid>
          <Grid item xs={10} lg={3}>
            <ApartmentCard />
          </Grid>
        </Grid>

        {/* */}
        <Grid
          item
          container
          alignItems="center"
          direction="row"
          justifyContent="center"
          className={classes.apartmentsGrid}
        >
          <Grid item xs={3} justifyContent="center">
            <BlueButton
              text={apartmentsConst.VIEW_MORE}
              width={260}
              height={88}
              borderRadius={24}
              fontSize={22}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          alignItems="center"
          direction="row"
          justifyContent="center"
        >
          <Grid item xs={4} justifyContent="center">
            <p className={classes.serviceHeader}>
              OUR <span className={classes.innerHeader}>SERVICES</span>
            </p>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="row"
          justifyContent="center"
          className={classes.apartmentsGrid}
        >
          <Grid item xs={3} justifyContent="center">
            <img src={home} alt="" className={classes.imgs} />
          </Grid>
          <Grid item xs={3} justifyContent="center">
            <img src={hearts} alt="" className={classes.imgs} />
          </Grid>
          <Grid item xs={3} justifyContent="center">
            <img src={hands} alt="" className={classes.imgs} />
          </Grid>
        </Grid>

        <Grid
          item
          container
          alignItems="center"
          direction="row"
          justifyContent="center"
        >
          <Grid item xs={3} justifyContent="center">
            <p className={classes.serviceText}>
              Buy your dream <br />
              <span className={classes.innerHeader}>home</span>
            </p>
          </Grid>
          <Grid item xs={3} justifyContent="center">
            <p className={classes.serviceText}>
              Rent the home you <br />
              <span className={classes.innerHeader}>love</span>
            </p>
          </Grid>
          <Grid item xs={3} justifyContent="center">
            <p className={classes.serviceText}>
              Be partner with <br />
              <span className={classes.innerHeader}>Homefinder</span>
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Apartments;
