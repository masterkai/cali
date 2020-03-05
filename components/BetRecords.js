import React, {Fragment, useState} from 'react';
import css from '../styles/main.scss'
import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from "react-modal";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import BetItem from "./BetItem";

const modalStyles = {
  content: {
    maxWidth: '600px',
    maxHeight: '800px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none'
  }
};

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButtonGroup: {
      root: {
        width: '100%',
      }
    },
    MuiButtonBase: {
      root: {
        flex: '1 1 25%',
      }
    },
    MuiButton: {
      outlinedPrimary: {
        color: 'white',
        border: '1px solid rgba(255,255,255, 0.68)'
      }
    },
    MuiFormLabel: {
      root: {
        color: 'white',
        '&$focused': {
          color: 'rgba(157, 1, 255, 1)'
        }
      }
    },
    MuiInputBase: {
      // Name of the rule
      root: {
        // Some CSS
        color: 'white',
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `1px solid rgba(255, 255, 255, 0.42)`
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `1px solid rgba(255, 255, 255, 0.42)`
        },
        '&:after': {
          borderBottom: `1px solid rgba(157, 1, 255, 0.85)`
        }
      }
    }
  }
});

const style = {
  borderRadius: 3,
  border: 0,
  color: 'white',
  width: '100%',
  marginBottom: 30
};

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 200
  }
}));

Modal.setAppElement('#__next');

function BetRecords(props) {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };


  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    Modal.subtitle.style.color = 'white';
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Fragment>
      <span onClick={openModal} className="iconfont icon_coins-light" data-tip="投注記錄" style={{marginLeft: 20}}/>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="wallet"
      >
        <div className={css.modalHeader}>
          <div ref={subtitle => (Modal.subtitle = subtitle)}>
            投注記錄
          </div>
          <span className="iconfont icon_times-light" onClick={closeModal} />
        </div>

        <div className={`${css.modalBody} ${css.modalBody__BetRecordsLayout}`}>
          <ThemeProvider theme={theme}>
            <form style={{marginBottom: 30}} className={classes.container} noValidate>
              <TextField
                style={style}
                id="datetime-local"
                label="開始時間"
                type="datetime-local"
                defaultValue="2020-02-01T00:00"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                style={style}
                id="datetime-local"
                label="結束時間"
                type="datetime-local"
                defaultValue="2020-02-29T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <ButtonGroup style={{marginBottom: 20}} color="primary"
                           aria-label="large outlined primary button group">
                <Button>明日</Button>
                <Button>今日</Button>
                <Button>昨日</Button>
                <Button>本週</Button>
              </ButtonGroup>
              <ButtonGroup style={{margin: '0 0 20px'}} color="primary"
                           aria-label="large outlined primary button group">
                <Button>上週</Button>
                <Button>本月</Button>
                <Button>上月</Button>
                <Button>近一個月</Button>
              </ButtonGroup>
              <Button variant="contained">清除時間</Button>
              <Button variant="contained" color="primary">搜尋</Button>
            </form>
            <div className={`${css.itemContainer} ${css.itemContainer__norecords}`} style={{height: 48}}>
              尚無任何記錄
            </div>
            <BetItem status={1000}/>
            <BetItem status={1000}/>
            <BetItem status={1000}/>
            <BetItem status={1000}/>
            <BetItem status={1000}/>
            <BetItem status={1000}/>
            <BetItem status={1000}/>
            <BetItem status={1000}/>
            <BetItem status={-1000}/>
          </ThemeProvider>

        </div>


      </Modal>

    </Fragment>
  );
}

export default BetRecords;