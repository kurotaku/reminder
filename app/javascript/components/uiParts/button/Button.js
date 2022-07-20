import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreUlid } from '../../Main'

const style = {
  display: "inline-block",
  color: "white",
  textDecoration: "none",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.2rem",
  borderRadius: "100px",
  minWidth: "96px",
  padding: "8px",
  whiteSpace: "nowrap",
  borderWidth: "1px",
  borderStyle: "solid",
  cursor: "pointer",
  borderColor: "#32ABD6",
  backgroundColor: "#32ABD6"
}

const Button = ({path, text}) => {
  const storeUlid = useContext(StoreUlid)
  return (
    <Link to={'/' + storeUlid + path} style={style}>
      {text}
    </Link>
  )
}

export default Button
