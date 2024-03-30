import React from 'react'

const Flex = (props) => {
  return (
    <div className={`${props.className} flex flex-wrap`}>
        {props.children}
    </div>
  )
}

export default Flex