import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import App from './App'

// Mount ф-я для запуска приложения
const mount = (el) => {
    const root = createRoot(el)

    const app = (
        <StylesProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StylesProvider>
    )

    root.render(app)
}

// Если мы в режиме development и isolation, тогда вызываем ф-ю mount немедленно
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')

    if (devRoot) mount(devRoot)
}

// Находясь в container мы должны экспортировать и запустить ф-ю mount
export { mount }
