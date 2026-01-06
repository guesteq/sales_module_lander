import { useState } from 'react'
import emailjs from '@emailjs/browser'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zpz89bk'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_b0w525d'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'iDxH8L_oOfxK9KbIX'

      const templateParams = {
        to_email: 'ryan@guesteq.com',
        from_name: formData.name,
        from_email: formData.email,
        role: formData.role,
        company: formData.company,
        message: formData.message || 'No message provided',
        reply_to: formData.email,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        role: '',
        company: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                The Sales Operating System Built for Hotels
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Manage group leads, sales activity, follow-ups, and revenue performance across every property — in one system your team actually uses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-6">
                <a
                  href="#demo-form"
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  Request a Demo
                </a>
                <a
                  href="#screenshots"
                  className="px-8 py-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  See How It Works
                </a>
              </div>
              <p className="text-sm text-gray-500">
                Trusted by hotel sales teams across North America
              </p>
            </div>
            <div className="order-first md:order-last">
              <div className="rounded-lg shadow-2xl overflow-hidden border border-gray-200">
                <img
                  src="/sales-activity-feed.png"
                  alt="Sales Activity Feed - GuestEQ Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-16 md:py-20 bg-white">
        <div className="max-w-container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hotel Sales Breaks Down When Information Is Everywhere
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Critical sales data scattered across multiple tools creates chaos and missed opportunities
              </p>
            </div>

            {/* Pain Points List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Scattered Leads</h3>
                  <p className="text-gray-600">Group leads scattered across inboxes and spreadsheets</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Memory-Dependent Follow-ups</h3>
                  <p className="text-gray-600">Follow-ups dependent on memory</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Limited Visibility</h3>
                  <p className="text-gray-600">Little visibility for leadership and owners</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Ignored Tools</h3>
                  <p className="text-gray-600">Generic CRMs ignored by property teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              One Platform Instead of Five Tabs
            </h2>
            <p className="text-lg text-gray-600">
              GuestEQ unifies email, spreadsheets, brand portals, generic CRMs, and manual owner reports into a single system designed for hotel group sales.
            </p>
          </div>
          
          {/* Visual Transformation: 5 to 1 */}
          <div className="max-w-5xl mx-auto">
            {/* Five Separate Tools */}
            <div className="mb-8">
              <div className="text-center mb-6">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Before: Five Fragmented Tools</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { 
                    name: 'Email', 
                    icon: (
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  { 
                    name: 'Spreadsheets', 
                    icon: (
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                      </svg>
                    )
                  },
                  { 
                    name: 'Brand Portals', 
                    icon: (
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )
                  },
                  { 
                    name: 'Generic CRMs', 
                    icon: (
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )
                  },
                  { 
                    name: 'Manual Reports', 
                    icon: (
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-75">
                    <div className="mb-2 flex items-center justify-center">{item.icon}</div>
                    <div className="text-xs font-medium text-gray-600 text-center">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow/Transition */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="h-px bg-gray-300 w-16 md:w-24"></div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <div className="h-px bg-gray-300 w-16 md:w-24"></div>
              </div>
            </div>

            {/* Unified Platform */}
            <div>
              <div className="text-center mb-6">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">After: One Unified Platform</span>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 shadow-lg max-w-xs w-full">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">GuestEQ</div>
                  <div className="text-sm text-gray-600 text-center">All-in-one sales platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshots Section */}
      <section id="screenshots" className="px-4 py-16 md:py-20 bg-gray-50">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Everything Your Sales Team Does — Captured Automatically
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Sales Activity Feed',
                description: 'Every email, call, and meeting automatically logged',
                image: '/sales-activity-feed.png'
              },
              {
                title: 'Group Lead Pipeline',
                description: 'See all group opportunities across properties in one view',
                image: '/group-lead-pipeline.png'
              },
              {
                title: 'Built-in CRM',
                description: 'All contact and opportunity details in one place',
                image: '/crm.png'
              },
              {
                title: 'Sales Analytics Dashboard',
                description: 'Real-time pipeline visibility for leadership',
                image: '/dashboard.png'
              }
            ].map((screenshot, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-gray-600">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              What Changes in the First 30–60 Days
            </h2>
            <ul className="space-y-5">
              {[
                'Faster response times',
                'Fewer dropped follow-ups',
                'Clear accountability',
                'Real pipeline visibility',
                'Cleaner owner reporting'
              ].map((outcome, index) => (
                <li key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-800 font-medium">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="px-4 py-16 md:py-20 bg-gray-50">
        <div className="max-w-container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Built for Hotels — Not Retro-Fitted for Them
            </h2>
            <ul className="space-y-5">
              {[
                'Designed for hotel group sales workflows',
                'Multi-property visibility by default',
                'Simple for property teams',
                'Powerful for ownership'
              ].map((point, index) => (
                <li key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Risk Reduction Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Easy to Roll Out. Easy to Prove Value.
            </h2>
            <ul className="space-y-5">
              {[
                'No long implementation',
                'Works alongside existing tools',
                'Simple onboarding',
                'Clear success metrics'
              ].map((point, index) => (
                <li key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <svg className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-lg text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Form */}
      <section id="demo-form" className="px-4 py-16 md:py-24 bg-blue-600">
        <div className="max-w-container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See Your Entire Group Sales Operation in One View
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Get clarity and control over your sales pipeline
            </p>
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="e.g., Director of Sales"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <p className="font-medium">Thank you! We've received your request and will be in touch shortly.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <p className="font-medium">Something went wrong. Please try again or contact us directly at ryan@guesteq.com</p>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Request a Demo'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-900 text-gray-400">
        <div className="max-w-container mx-auto text-center">
          <p className="text-sm">© 2025 GuestEQ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

