import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavbarButton from '../../../common/components/StyledButtons/NavbarButton';
import { homePageConst } from '../../../utils/constants';
import headerImg from '../../../assets/SIDE IMAGE.png';
import Search from '../../../common/components/SearchComponent/Search';

function HomePage() {
  const themeState = useSelector((state) => state.navbar);
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: themeState.isDark
        ? theme.palette.dark.bgc
        : theme.palette.light.bgc,
      padding: `${theme.typography.pxToRem(44)} ${theme.typography.pxToRem(
        44
      )}`,
      overflow: 'hidden',
    },
    mainHeader: {
      color: themeState.isDark
        ? theme.palette.dark.text
        : theme.palette.light.text,
      fontSize: theme.typography.pxToRem(60),
      fontWeight: 'bold',
    },
    innerHeader: {
      color: theme.palette.primaryBlue,
    },
    descriptionText: {
      minWidth: theme.typography.pxToVw(430),
      maxWidth: theme.typography.pxToVw(430),
      margin: ` ${theme.typography.pxToRem(44)} 0 `,
      fontSize: theme.typography.pxToRem(22),
      color: themeState.isDark
        ? theme.palette.dark.text
        : theme.palette.light.text,
    },
    headerImageContainer: {
      overflow: 'hidden',
      marginRight: theme.typography.pxToRem(-50),
    },

    headerImg: {
      objectFit: 'cover',
      objectPosition: `${theme.typography.pxToRem(80)} 0`,
      minWidth: theme.typography.pxToVw(440),
      maxWidth: theme.typography.pxToVw(440),
      marginLeft: theme.spacing(20),
      overflow: 'hidden',
    },
    searchContainer: {
      margin: `${theme.typography.pxToRem(40)} 0 0 0`,
      padding: `0 0 ${theme.typography.pxToRem(35)} 0`,
    },
  }));

  const handleLearnMore = () => {
    history.push('/contact');
  };

  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.container}
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'>
        <Grid item xs={6} direction='column' justifyContent='space-Between'>
          <p className={classes.mainHeader}>
            EASY TO FIND YOUR NEXT <br />{' '}
            <span className={classes.innerHeader}>PERFECT PLACE</span>
          </p>

          <p className={classes.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            bibendum sodales nisi, sed consequat nulla. Pellentesque sodales at
            lectus et tristique. Suspendisse vitae vulputate odio. Quisque
            iaculis quam sapien, non vehicula mauris convallis ut.
          </p>

          <NavbarButton
            borderRadius={20}
            width={180}
            height={60}
            fontSize={18}
            paddingLeftAndRight={50}
            text={homePageConst.LEARN_MORE}
            onClick={handleLearnMore}
          />
          <div className={classes.searchContainer}>
            <Search />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.headerImageContainer}>
            <img className={classes.headerImg} src={headerImg} alt='' />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
