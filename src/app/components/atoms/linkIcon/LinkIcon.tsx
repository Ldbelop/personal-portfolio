'use client'

const LinkIcon = ({ svg, clickHandler}: { svg: any, clickHandler: () => void}) => {
  return (
    <button onClick={clickHandler}>
      {svg}
    </button>
  )
}

export default LinkIcon