import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"

import Home from './Home'
import Html from './Html'
import Css from './Css'
import Notfoundpage from './Notfoundpage'
import Share from './Share'
import Javascipt from './Javascipt'

const Rou = () => {
  return (
    <div>

        <BrowserRouter>
                <Routes>
                        <Route path='/' element={<Share/>}>
                            <Route path="/" element={<Home/>} />
                            <Route path="html" element={<Html/>} />
                            <Route path="css" element={<Css/>} />
                            <Route path="javascript" element={<Javascipt/>} />
                            <Route path="*" element={<Notfoundpage/>} />
                        </Route>
                </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Rou