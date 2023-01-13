import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import { Header } from '../shared/Header'

const root = createRoot(document.getElementById('react_root'));

window.addEventListener('load', () => {
    root.render(<Header />)
})
