
import Header from '../components/Header'
export default function Success(){
  return (
    <div>
      <Header />
      <div className="container text-center py-20">
        <h2 className="text-3xl">Thank you — Order placed!</h2>
        <p className="mt-4 text-gray-400">We received your order. You will receive an email confirmation shortly.</p>
      </div>
    </div>
  )
}
