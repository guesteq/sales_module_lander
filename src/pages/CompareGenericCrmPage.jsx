function CompareGenericCrmPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="px-4 py-16 md:py-24 lg:py-28">
        <div className="max-w-container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
              GuestEQ Sales vs Generic CRM
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The better workflow for hotel group business
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Generic CRM tools are built for broad sales pipelines. GuestEQ Sales is built for hotel
              teams that need one practical system for lead intake, follow-up consistency, and
              multi-property visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/#demo-form"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Book a demo
              </a>
              <a
                href="/"
                className="px-8 py-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Back to main page
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Who this comparison is for</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'Hotel owners who need clear group pipeline visibility',
              'Management companies operating multiple properties',
              'Regional operators driving process consistency',
              'Directors of Sales improving follow-up discipline',
              'General Managers reducing missed opportunities'
            ].map((item) => (
              <li key={item} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why hotel group sales breaks in generic CRM workflows
          </h2>
          <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
            <p>
              Hotel group business starts in too many places at once: inboxes, spreadsheets, brand portals,
              and disconnected notes. Generic CRMs usually assume clean, linear stage progression, so hotel
              teams end up forcing real work into software that was not built for their process.
            </p>
            <p>
              That creates practical execution problems: duplicate entry, follow-up that depends on individual
              memory, weak portfolio-level visibility, and parallel "shadow workflows" outside the CRM.
              Operationally, that means slower response and less confidence in what is moving, stalled, or at risk.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why GuestEQ Sales is different</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Built for hotel group business',
                body: 'The workflow is designed around hotel group lead management, not generic stage templates.'
              },
              {
                title: 'One workflow, not disconnected tools',
                body: 'Leads, activity, follow-up, and visibility live together so teams do not reconcile data across systems.'
              },
              {
                title: 'Easier adoption for property teams',
                body: 'The system mirrors day-to-day hotel sales operations, making it easier for teams to use consistently.'
              },
              {
                title: 'Clear visibility for leadership',
                body: 'Management companies and owners get practical insight across properties without waiting for manual reporting.'
              }
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Side-by-side comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">Category</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">GuestEQ Sales</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-900">Generic CRM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {[
                  ['Built for hotel group business', 'Purpose-built for hotel group workflows', 'Built for broad, cross-industry use'],
                  ['Handles scattered leads well', 'Designed to consolidate fragmented intake', 'Often relies on manual cleanup and re-entry'],
                  ['Supports consistent follow-up', 'Workflow supports team-wide follow-up discipline', 'Execution often depends on rep habits'],
                  ['Multi-property visibility', 'Built for cross-property oversight', 'Usually requires extra customization'],
                  ['Ease of adoption for hotel teams', 'Aligned to real hotel sales tasks', 'Can feel heavy and misaligned'],
                  ['Reporting for leaders and owners', 'Focused on operational visibility', 'Reports exist but may be less actionable'],
                  ['Reduces spreadsheet / inbox dependence', 'Replaces fragmented workflows with one system', 'Frequently coexists with side spreadsheets']
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-6 py-4">{row[1]}</td>
                    <td className="px-6 py-4">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Key differentiators</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Workflow fit, not workflow compromise</h3>
              <p className="text-gray-600">
                GuestEQ matches hotel group sales execution directly, so teams spend less time forcing work into
                generic process fields and more time advancing opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consistency across properties and teams</h3>
              <p className="text-gray-600">
                Standardized follow-up and activity tracking reduce "hero-based" performance and make sales process
                quality more predictable across locations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Operational visibility for decision makers</h3>
              <p className="text-gray-600">
                Leaders get faster signal on what is moving, stalled, or slipping, helping management companies and
                owners make better decisions sooner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">When GuestEQ Sales is the better fit</h2>
            <ul className="space-y-3 text-gray-700">
              {[
                'You run hotel group business across one or multiple properties',
                'Leads are spread across inboxes, spreadsheets, and portals',
                'Follow-up consistency is a recurring issue',
                'Property teams struggle with generic CRM adoption',
                'Leadership needs clear, cross-property pipeline visibility'
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">When a generic CRM may still be considered</h2>
            <ul className="space-y-3 text-gray-700">
              {[
                'You need one broad CRM standard across many non-hotel teams',
                'You have CRM admins and budget for deep customization',
                'Hotel group sales is a small part of your broader GTM motion',
                'Platform standardization matters more than workflow fit'
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Buyer checklist</h2>
          <ul className="space-y-4">
            {[
              'Can this system reflect our hotel group sales flow without heavy customization?',
              'Will property teams actually use this daily, or revert to inboxes and spreadsheets?',
              'Does it improve follow-up consistency at a team level?',
              'Can leadership quickly see what is moving, stalled, and at risk across properties?',
              'Will this reduce operating friction in the next 60-90 days?'
            ].map((item) => (
              <li key={item} className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop managing hotel group business across disconnected tools
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            See how GuestEQ Sales gives your team one clear operating workflow for leads,
            activity, follow-up, and visibility across every property.
          </p>
          <a
            href="/#demo-form"
            className="inline-block px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-md"
          >
            Book a demo
          </a>
        </div>
      </section>

      <footer className="px-4 py-8 bg-gray-900 text-gray-400">
        <div className="max-w-container mx-auto text-center">
          <p className="text-sm">© 2025 GuestEQ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default CompareGenericCrmPage
