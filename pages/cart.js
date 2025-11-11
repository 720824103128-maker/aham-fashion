
import { useEffect, useState } from 'react'
import Header from '../components/Header'

export default function Cart(){
  const [cart,setCart]=useState([])
  useEffect(()=>{ setCart(JSON.parse(localStorage.getItem('cart')||'[]')) },[])

  const checkout = async ()=>{
    const res = await fetch('/api/create-checkout-session',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({items:cart})
    })
    const data = await res.json()
    window.location = data.url
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="text-2xl">Cart</h2>
        <div className="mt-6">
          {cart.map(item=> (
            <div key={item.id} className="flex items-center justify-between py-3 border-b">
              <div>{item.title} x {item.qty}</div>
              <div>₹{item.price*item.qty}</div>
            </div>
          ))}
          <button onClick={checkout} className="mt-6 px-6 py-3 rounded-full bg-accent">Checkout</button>
        </div>
      </div>
    </div>
  )
}
