
export default function ProductCard({p, onAdd}){
  return (
    <div className="product-card shadow-md rounded-2xl">
      <img src={p.images?.[0]} alt={p.title} className="w-full h-56 object-cover rounded-lg" />
      <h3 className="mt-4 text-xl font-medium">{p.title}</h3>
      <p className="mt-2 text-gray-300">{p.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg">₹{p.price}</div>
        <button onClick={()=>onAdd(p)} className="px-4 py-2 rounded-full bg-accent text-white">Add</button>
      </div>
    </div>
  )
}
