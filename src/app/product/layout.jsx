import React from 'react'

export const metadata = {
    title: "Product",
    description: "product page"
}

const layout = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout