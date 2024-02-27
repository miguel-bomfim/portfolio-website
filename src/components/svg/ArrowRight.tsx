import React from 'react'

type Props = {
  className?: string
}

function ArrowRight(props: Props) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
    >
      <path d="M10 20A10 10 0 100 10a10 10 0 0010 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"></path>
    </svg>
  )
}

export default ArrowRight
