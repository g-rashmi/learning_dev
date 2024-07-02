import React from "react"
function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <div className="border-b text-center">
      20% discount
      {children}
    </div>
  )
}

export default layout
