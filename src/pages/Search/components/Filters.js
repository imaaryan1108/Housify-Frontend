import {
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Popover,
  TextField,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveTab,
  setSearchQuery,
  setSelectedLocation,
  setSelectedMaxPrice,
} from '../../../actions/generalActions';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { searchConst } from '../../../utils/constants';
import { MenuItem } from '@material-ui/core';

function Filters() {
  const [locationPopoverIsOpen, setLocationPopoverIsOpen] = useState(false);
  const [pricePopoverIsOpen, setPricePopoverIsOpen] = useState(false);
  const [locationAnchor, setLocationAnchor] = useState(null);
  const [priceAnchor, setPriceAnchor] = useState(null);

  const generalState = useSelector((state) => state.general);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    if (newValue !== null) setActiveTab(newValue, dispatch);
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value, dispatch);
  };

  const handleLocationDropdown = (e) => {
    if (locationAnchor !== null) {
      setLocationAnchor(null);
      setLocationPopoverIsOpen(!locationPopoverIsOpen);
    } else {
      setLocationAnchor(e.currentTarget);
      setLocationPopoverIsOpen(!locationPopoverIsOpen);
    }
  };

  const handleLocationSelect = (e) => {
    setSelectedLocation(e.target.innerText, dispatch);
    setLocationAnchor(null);
    setLocationPopoverIsOpen(false);
  };

  const handlePriceDropdown = (e) => {
    if (priceAnchor !== null) {
      setPriceAnchor(null);
      setPricePopoverIsOpen(!pricePopoverIsOpen);
    } else {
      setPriceAnchor(e.currentTarget);
      setPricePopoverIsOpen(!pricePopoverIsOpen);
    }
  };

  const handlePriceSelect = (e) => {
    setSelectedMaxPrice(e.target.innerText, dispatch);
    setPriceAnchor(null);
    setPricePopoverIsOpen(false);
  };

  useEffect(() => {
    if (locationAnchor === null) setLocationPopoverIsOpen((prev) => !prev);
  }, [locationAnchor]);

  useEffect(() => {
    if (priceAnchor === null) setPricePopoverIsOpen((prev) => !prev);
  }, [priceAnchor]);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    toggleButtonRoot: {
      background: `${theme.palette.light.bgc} !important`,
      color: theme.palette.primaryBlue,
      borderRadius: `${theme.typography.pxToRem(40)} ${theme.typography.pxToRem(
        40
      )} 0 0`,
      minWidth: theme.typography.pxToRem(100),
    },
    toggleButtonSelected: {
      backgroundColor: `${theme.palette.primaryBlue} !important`,
      color: `${theme.palette.common.white} !important`,
    },
    searchboxContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      boxShadow: '15px, 21px, 50px #00000069',
      minWidth: theme.typography.pxToRem(700),
      padding: theme.typography.pxToRem(10),
      maxHeight: theme.typography.pxToRem(50),
    },
    filter: {
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    buttons: {
      color: theme.palette.common.white,
      margin: `0 ${theme.typography.pxToRem(5)}`,
    },
    divider: {
      background: theme.palette.common.white,
      height: 25,
      width: 2,
      opacity: 0.8,
    },
    placeholder: {
      fontWeight: 100,
      letterSpacing: theme.spacing(0.4),
      color: theme.palette.common.white,
      fontSize: theme.typography.pxToRem(12),
    },
    searchBox: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.light.bgc,
      borderRadius: theme.typography.pxToRem(20),
      padding: `${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(10)}`,
    },
    popover: {
      backgroundColor: theme.palette.primaryBlue,
      color: theme.palette.common.white,
    },
    popoverHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minWidth: theme.typography.pxToRem(250),
      padding: theme.typography.pxToRem(10),
      borderBottom: `1px solid ${theme.palette.light.bgc}`,
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.searchboxContainer}>
        <div className={classes.filter}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3> {searchConst.LOCATION} </h3>
            <p className={classes.placeholder}>
              {generalState.selectedLocation === ''
                ? searchConst.LOCATION_PLACEHOLDER
                : generalState.selectedLocation.toUpperCase()}
            </p>
          </div>
          {locationPopoverIsOpen ? (
            <IconButton
              className={classes.buttons}
              onClick={handleLocationDropdown}
            >
              <ArrowDownIcon />
            </IconButton>
          ) : (
            <IconButton
              className={classes.buttons}
              onClick={handleLocationDropdown}
            >
              <ArrowUpIcon />
            </IconButton>
          )}
        </div>
        <Divider
          className={classes.divider}
          component="ol"
          orientation="vertical"
        />
        <div className={classes.filter}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3> {searchConst.MAX_PRICE} </h3>
            <p className={classes.placeholder}>
              {generalState.selectedMaxPrice === ''
                ? searchConst.PRICE_PLACEHOLDER
                : generalState.selectedMaxPrice}
            </p>
          </div>
          {pricePopoverIsOpen ? (
            <IconButton
              className={classes.buttons}
              onClick={handlePriceDropdown}
            >
              <ArrowDownIcon />
            </IconButton>
          ) : (
            <IconButton
              className={classes.buttons}
              onClick={handlePriceDropdown}
            >
              <ArrowUpIcon />
            </IconButton>
          )}
        </div>
        <Divider
          className={classes.divider}
          component="ol"
          orientation="vertical"
        />
        <div className={classes.filter}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3> {searchConst.TYPE} </h3>
            <p className={classes.placeholder}>
              {generalState.selectedMaxPrice === ''
                ? searchConst.PRICE_PLACEHOLDER
                : generalState.selectedMaxPrice}
            </p>
          </div>
          {pricePopoverIsOpen ? (
            <IconButton
              className={classes.buttons}
              onClick={handlePriceDropdown}
            >
              <ArrowDownIcon />
            </IconButton>
          ) : (
            <IconButton
              className={classes.buttons}
              onClick={handlePriceDropdown}
            >
              <ArrowUpIcon />
            </IconButton>
          )}
        </div>
      </div>
      <Popover
        open={Boolean(locationAnchor)}
        anchorEl={locationAnchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={() => setLocationAnchor(null)}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div className={classes.popover}>
          <div className={classes.popoverHeader}>
            <h3>Location</h3>
            <IconButton
              size="small"
              onClick={handleLocationDropdown}
              className={classes.buttons}
            >
              <CloseIcon size="small" />
            </IconButton>
          </div>
          <MenuItem onClick={handleLocationSelect}>Raipur</MenuItem>
          <MenuItem onClick={handleLocationSelect}>Ranchi</MenuItem>
          <MenuItem onClick={handleLocationSelect}>Bhubaneswar</MenuItem>
          <MenuItem onClick={handleLocationSelect}>Bhopal</MenuItem>
          <MenuItem onClick={handleLocationSelect}>Mumbai</MenuItem>
          <MenuItem onClick={handleLocationSelect}>Delhi</MenuItem>
        </div>
      </Popover>
      <Popover
        open={Boolean(priceAnchor)}
        anchorEl={priceAnchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={() => setPriceAnchor(null)}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div className={classes.popover}>
          <div className={classes.popoverHeader}>
            <h3>Price</h3>
            <IconButton
              size="small"
              onClick={handlePriceDropdown}
              className={classes.buttons}
            >
              <CloseIcon size="small" />
            </IconButton>
          </div>
          <MenuItem onClick={handlePriceSelect}>Less Than 10L</MenuItem>
          <MenuItem onClick={handlePriceSelect}>Between 10L & 50L</MenuItem>
          <MenuItem onClick={handlePriceSelect}>Between 50L & 1Cr</MenuItem>
          <MenuItem onClick={handlePriceSelect}>Above 1Cr</MenuItem>
        </div>
      </Popover>
    </div>
  );
}

export default Filters;
