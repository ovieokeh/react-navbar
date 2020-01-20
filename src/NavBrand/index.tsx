import * as React from 'react'

import { NavBrandProps } from '../interfaces'

import styles from './navbrand.css'

const NavigationBrand: React.FC<NavBrandProps> = ({ route, brand }) => (
  <a className={styles.navBrand} href={route}>
    {brand}
  </a>
)

export default NavigationBrand
