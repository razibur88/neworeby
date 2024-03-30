import React from 'react'

const Container = (props) => {
  return (
    <div className='lg:container mx-auto'>
        {props.children}
    </div>
  )
}

export default Container