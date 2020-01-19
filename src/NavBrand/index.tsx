import * as React from 'react'

import { NavigationBrandProps } from '../interfaces'

import styles from './navbrand.css'

const NavigationBrand: React.FC<NavigationBrandProps> = ({ route, brand }) => (
  <a className={styles.navBrand} href={route}>
    {brand}
  </a>
)

export default NavigationBrand
