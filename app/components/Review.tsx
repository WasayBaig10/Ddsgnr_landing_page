'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function ProductReview({ productId }: { productId: string }) {
  const [reviews, setReviews] = useState<any[]>([])
  const [form, setForm] = useState({ name: '', message: '', rating: 5 })
  const [hasSubmitted, setHasSubmitted] = useState(false)

  useEffect(() => {
    fetchReviews()
    const reviewed = localStorage.getItem(`reviewed-${productId}`)
    if (reviewed === 'true') setHasSubmitted(true)
  }, [productId])

  async function fetchReviews() {
    const { data, error } = await supabase
      .from('Review')
      .select('*')
      .eq('product_id', productId)
      .order('created_at', { ascending: false })

    if (error) console.error(error)
    else setReviews(data || [])
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { error } = await supabase.from('Review').insert([
      {
        name: form.name,  
        message: form.message,
        rating: form.rating,
        product_id: productId,
        user_id: 'guest',
      },
    ])

    if (error) {
      console.error('Insert error:', error.message)
    } else {
      localStorage.setItem(`reviewed-${productId}`, 'true')
      setHasSubmitted(true)
      setForm({ name: '', message: '', rating: 5 })
      fetchReviews()
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4" data-aos="fade-up" >
      <h2 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h2>

      {!hasSubmitted && (
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <input
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <textarea
            required
            placeholder="Write a review"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            min={1}
            max={5}
            required
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      )}

      <div className="space-y-4 mb-20">
        {reviews.map((r) => (
          <div key={r.id} className="border p-3 rounded shadow-sm">
            <strong>{r.name}</strong>
            <div className="text-yellow-500">{'⭐'.repeat(r.rating)}</div>
            <p>{r.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
