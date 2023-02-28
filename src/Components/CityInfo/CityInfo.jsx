import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

const CityInfo = ({ city, country }) => {
  return (
    <>
      <Typography>{city}</Typography>
      <Typography>{country}</Typography>
    </>
  )
}

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}

export default CityInfo