
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../lib/firebase'

export default function Home(){
  const [products,setProducts]=useState([])
  useEffect(()=>{ getProducts().then(setProducts) },[])

  const handleAdd = (p)=>{
    const cart = JSON.parse(localStorage.getItem('cart')||'[]')
    const found = cart.find(i=>i.id===p.id)
    if(found) found.qty++
    else cart.push({...p,qty:1})
    localStorage.setItem('cart',JSON.stringify(cart))
    alert('Added to cart')
  }

  return (
    <div>
      <Header />
      <main className="container">
        <h1 className="text-4xl font-serif">AHAM Fashion</h1>
        <p className="mt-2 text-gray-400">Elegant accessories for girls — earrings, chains, necklace sets, bracelets, rings.</p>
        <div className="grid grid-cols-3 gap-6 mt-8">
          {products.map(p=> <ProductCard key={p.id} p={p} onAdd={handleAdd} />)}
        </div>
      </main>
    </div>
  )
}
// redeploy trigger
