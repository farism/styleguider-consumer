import React from 'react'
import PropTypes from 'prop-types'

import styles from './partials.scss'

const introduction = () => (
  <svg width="16px" height="15px" viewBox="0 0 16 15" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-20.000000, -139.000000)" fill="#808080">
        <g transform="translate(20.000000, 139.000000)">
          <path d="M12.994759,0.0810841252 C13.3845182,0.160124113 13.7814111,0.233031688 14.1549574,0.370670287 C14.83201,0.619373696 15.1672938,1.19445774 15.3093192,1.89627832 C15.3910324,2.29897343 15.4435624,2.71325199 15.4571812,3.12412365 C15.4811764,3.81776768 15.4636664,4.51277446 15.4636664,5.23776194 L15.284027,5.23776194 C14.2094329,5.23776194 13.1354873,5.23503642 12.0608933,5.24116883 C11.9266501,5.24185021 11.8566101,5.19347229 11.7924069,5.07423093 C11.3851377,4.32198829 10.9687892,3.57587806 10.5621685,2.82295404 C10.5031534,2.71393337 10.4408957,2.67441337 10.3215684,2.67509475 C8.71324415,2.67918303 7.10491989,2.67918303 5.49659563,2.67577613 C5.38115945,2.67509475 5.31306508,2.70371268 5.2521044,2.81614025 C4.45053634,4.28383105 3.64442866,5.74879634 2.83637542,7.21308025 C2.77865734,7.31733126 2.77346919,7.39500849 2.83442987,7.50471055 C3.64702273,8.97308273 4.45507597,10.4448618 5.26053513,11.9173223 C5.31176804,12.012034 5.36624354,12.051554 5.47260047,12.051554 C7.09324657,12.0481471 8.71324415,12.0481471 10.3338902,12.0522353 C10.4499749,12.0522353 10.505099,12.003176 10.5576289,11.9057388 C10.978517,11.131692 11.4052417,10.3624149 11.8235357,9.58836815 C11.8916301,9.462313 11.9655611,9.41325369 12.1075866,9.41461645 C13.1575369,9.42143024 14.2074873,9.41802335 15.2574377,9.41802335 L15.4500475,9.41802335 C15.4565327,9.47662196 15.466909,9.5243185 15.466909,9.57269643 C15.4662605,10.3569639 15.4876616,11.1419127 15.4539386,11.9248174 C15.4344831,12.3649884 15.3495273,12.8078849 15.2483585,13.2371538 C15.0713131,13.9893964 14.5894644,14.443195 13.8890651,14.6564667 C13.3488497,14.8206791 12.7976095,14.888817 12.2372901,14.888817 C9.23919212,14.8901797 6.24109412,14.8976749 3.24299611,14.8820032 C2.75660773,14.8792777 2.26567972,14.8002377 1.78577651,14.7048446 C0.8259701,14.513377 0.290294359,13.8585716 0.139838219,12.8678463 C0.0587734882,12.3356891 0.0127287212,11.7926299 0.00948613193,11.2543403 C-0.003484225,8.72914897 -0.00283570715,6.20395765 0.00948613193,3.67876632 C0.0120802033,3.15274157 0.0483972027,2.61990304 0.134650076,2.10273622 C0.333745055,0.912366753 0.87136635,0.35908684 2.00302999,0.160124113 C2.46736877,0.0783586084 2.94208383,0.0279365473 3.41225927,0.0258924097 C6.26508928,0.0136275841 9.11727077,0.0204413761 11.9694523,0.0190786177 C12.0537596,0.0190786177 12.1380669,0.00681379203 12.2223742,0 C12.5044795,0.0252110305 12.7535103,0.0320248226 12.994759,0.0810841252 Z" />
          <path d="M7.83994103,5.00426434 C8.26472021,5.00426434 8.68885089,5.00767124 9.11363008,5.00153883 C9.21739293,5.00017607 9.27705657,5.03492641 9.32828948,5.1303195 C9.75825682,5.92071937 10.1940608,6.70703097 10.6207856,7.49879361 C10.6512659,7.55534808 10.6519144,7.66164324 10.6214341,7.71819771 C10.200546,8.4983769 9.7686331,9.27310505 9.34644798,10.0526029 C9.28354175,10.1698001 9.20831368,10.2079573 9.08574381,10.2072759 C8.24267061,10.2031877 7.39959741,10.203869 6.55652421,10.2072759 C6.44043951,10.2079573 6.37039959,10.1704815 6.31073594,10.0607794 C5.89373897,9.29218367 5.47285089,8.52631345 5.04742318,7.76316874 C4.98451695,7.65074117 4.98386843,7.56693153 5.04742318,7.4531412 C5.47025682,6.69544753 5.88855083,5.93502834 6.30035966,5.17052087 C6.36910255,5.04242158 6.44497914,4.99676917 6.58441048,5.00017607 C7.00270449,5.01107814 7.42164701,5.00426434 7.83994103,5.00426434" />
        </g>
      </g>
    </g>
  </svg>
)

const elements = () => (
  <svg width="16px" height="10px" viewBox="0 0 16 10" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-20.000000, -385.000000)" fill="#808080">
        <path d="M23.2,386.108383 C23.2,385.49624 23.6760655,385 24.2640476,385 C24.2640476,385 24.7073395,385 25.5466665,385 C25.8382222,385 25.8666667,385.360758 25.8666667,385.555556 C25.8666667,386.47603 26.8217925,387.222222 28,387.222222 C29.1782075,387.222222 30.1333333,386.47603 30.1333333,385.555556 C30.1333333,385.360758 30.0332238,385 30.3466665,385 C30.9446197,385 31.7359524,385 31.7359524,385 C32.3236097,385 32.8,385.495902 32.8,386.108383 C32.8,386.108383 32.5496013,387.763408 32.8,387.972586 C33.0503987,388.181763 33.6110165,387.222222 34.1333333,387.222222 C35.1642649,387.222222 36,388.34151 36,389.722222 C36,391.102934 35.1642649,392.222222 34.1333333,392.222222 C33.6110165,392.222222 33.2555521,390.901487 32.8,391.471859 C32.3444479,392.042231 32.8,393.891617 32.8,393.891617 C32.8,394.50376 32.3239345,395 31.7359524,395 C31.7359524,395 30.6698303,395 30.3466665,395 C30.0235026,395 30.1333333,394.639242 30.1333333,394.444444 C30.1333333,393.52397 29.1782075,392.777778 28,392.777778 C26.8217925,392.777778 25.8666667,393.52397 25.8666667,394.444444 C25.8666667,394.639242 25.8400716,395 25.6533335,395 C25.4665955,395 24.2640476,395 24.2640476,395 C23.6763903,395 23.2,394.504098 23.2,393.891617 C23.2,393.891617 23.4111146,391.736184 23.2,391.471859 C22.9888854,391.207534 22.3889835,392.222222 21.8666667,392.222222 C20.8357351,392.222222 20,391.102934 20,389.722222 C20,388.34151 20.8357351,387.222222 21.8666667,387.222222 C22.3889835,387.222222 22.783732,388.320327 23.2,387.972586 C23.616268,387.624844 23.2,386.108383 23.2,386.108383 Z" />
      </g>
    </g>
  </svg>
)

const layouts = () => (
  <svg width="17px" height="13px" viewBox="0 0 17 13" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-20.000000, -328.000000)" fill="#808080">
        <g transform="translate(20.000000, 328.000000)">
          <rect x="0" y="0" width="16" height="3.5" />
          <rect x="0" y="5" width="4.5" height="8" />
          <rect x="6" y="5" width="10" height="8" />
        </g>
      </g>
    </g>
  </svg>
)

const icons = {
  elements,
  introduction,
  layouts,
}

const MenuIcon = ({ section: { icon } }) => (
  <span className={styles['menu-icon']}>
    {icons[icon] ? icons[icon]() : null}
  </span>
)

MenuIcon.propTypes = {}

MenuIcon.defaultProps = {}

export default MenuIcon