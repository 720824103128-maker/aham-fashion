
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end('Method Not Allowed')
  const { items } = req.body || { items: [] }
  const line_items = items.map(i=>({
    price_data: {
      currency: 'inr',
      product_data: { name: i.title },
      unit_amount: Math.round(i.price * 100)
    },
    quantity: i.qty
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items,
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`
  })

  res.json({ url: session.url })
}
