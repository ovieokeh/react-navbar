import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const NavigationBrand = ({ route, brand, color }) => (
  <Brand>
    <BrandLink href={route} color={color}>
      {brand}
    </BrandLink>
  </Brand>
)

NavigationBrand.propTypes = {
  route: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

const Brand = styled.section`
  display: inline-flex;
  align-items: center;
`

const BrandLink = styled.a`
  font-size: 1.5em;
  text-decoration: none;
  color: ${props => props.color};
`

export default NavigationBrand
