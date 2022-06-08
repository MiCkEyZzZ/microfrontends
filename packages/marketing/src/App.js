import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Landing, Pricing } from './components/index';

function App () {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<Landing />} />
                    <Route path="pricing" element={<Pricing />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
