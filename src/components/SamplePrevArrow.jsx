import React from 'react'

export default function SamplePrevArrow(props) {
    const {className,style,onClick} = props
  return (
    <div
    className={className}
    style={{...style,display:"block",right:'-25px',left:"auto"}}
    onClick={onClick}
    />
  )
}
