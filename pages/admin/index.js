
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { getProducts, addProduct } from '../../lib/firebase'

export default function Admin(){
  const [products,setProducts]=useState([])
  const [form,setForm]=useState({title:'',price:0,description:''})
  useEffect(()=>{ getProducts().then(setProducts) },[])

  const handleAdd=async ()=>{
    await addProduct({...form,images:[form.image||''], createdAt: new Date()})
    alert('Added')
    getProducts().then(setProducts)
  }

  return (
    <div>
      <Header />
      <div className="container py-8">
        <h2 className="text-2xl">Admin</h2>
        <div className="mt-6 max-w-xl">
          <input placeholder="Title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} className="w-full p-3 rounded mb-3 bg-black border" />
          <input placeholder="Price" type="number" value={form.price} onChange={(e)=>setForm({...form,price:parseFloat(e.target.value)})} className="w-full p-3 rounded mb-3 bg-black border" />
          <input placeholder="Image URL" value={form.image} onChange={(e)=>setForm({...form,image:e.target.value})} className="w-full p-3 rounded mb-3 bg-black border" />
          <textarea placeholder="Description" value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})} className="w-full p-3 rounded mb-3 bg-black border" />
          <button onClick={handleAdd} className="px-5 py-3 rounded-full bg-accent">Add Product</button>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          {products.map(p=> (
            <div key={p.id} className="p-4 bg-gray-900 rounded">
              <img src={p.images?.[0]} className="h-36 w-full object-cover rounded" />
              <h4 className="mt-2">{p.title}</h4>
              <div className="mt-2">₹{p.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
