import React from 'react'
import { CFooter } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      {/* <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a>
        <span className="ml-1">&copy; 2020 creativeLabs.</span>
      </div> */}
      <div className="mfs-auto">
      <CIcon content={freeSet["cilMove"]} size={"xl"} alt="Logo" />
      <CIcon content={freeSet["cilPlus"]} size={"xl"} alt="Logo" />
      <CIcon content={freeSet["cilMinus"]} size={"xl"}alt="Logo" />
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
