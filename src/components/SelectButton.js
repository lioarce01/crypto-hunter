import { makeStyles } from '@material-ui/styles'
import React from 'react'

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: '1px solid #42caff',
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: 'Montserrat',
      cursor: 'pointer',
      backgroundColor: selected ? '#42caff' : '',
      color: selected ? 'black' : '',
      fontWeight: selected ? 700 : 500,
      '&:hover': {
        backgroundColor: '#42caff',
        color: 'black',
      },
      width: '22%',
      //margin: 5,
    },
  })

  const classes = useStyles()

  return (
    <div>
      <span
        onClick={onClick}
        className={classes.selectbutton}
      >
        {children}
      </span>
    </div>
  )
}

export default SelectButton