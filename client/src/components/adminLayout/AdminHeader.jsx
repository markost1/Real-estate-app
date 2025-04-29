import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminHeader() {
  return (
    <>
   <h1>Ovo je admin header</h1>
<Outlet />
</>
  )
}
