import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Cart } from './pages/Cart'
import { Catalog } from './pages/Catalog'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ProductDetail } from './pages/ProductDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
