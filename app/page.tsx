export default function Home() {
  const faqs = [
    {
      q: "Which protocols does ProxyShift support?",
      a: "ProxyShift rotates across OpenVPN, WireGuard, SOCKS5, and HTTP proxies. When one protocol is blocked, the system automatically switches to the next available endpoint within seconds."
    },
    {
      q: "How fast is the automatic failover?",
      a: "Our detection engine identifies a blocked connection in under 3 seconds and switches protocols automatically — no manual intervention required."
    },
    {
      q: "Is my data and identity protected?",
      a: "Yes. All traffic is encrypted end-to-end. We operate a strict no-logs policy and our servers are hosted in privacy-friendly jurisdictions outside restrictive regimes."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Auto Protocol Switching
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Bypass Government VPN Blocks{" "}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          ProxyShift rotates across OpenVPN, WireGuard, SOCKS5, and HTTP proxies in real time. When your government blocks one protocol, we switch to another — instantly.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $19/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No logs. No tracking.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "⚡", label: "Sub-3s Failover", desc: "Switches protocols before you notice a drop" },
          { icon: "🔒", label: "No-Logs Policy", desc: "Zero activity records, ever" },
          { icon: "🌐", label: "50+ Exit Nodes", desc: "Spread across 20 countries" }
        ].map((f) => (
          <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.label}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-xs text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-sm text-[#8b949e] mb-6">per month</div>
          <ul className="text-sm text-left space-y-2 mb-8">
            {[
              "Unlimited bandwidth",
              "Auto protocol switching",
              "OpenVPN + WireGuard + SOCKS5 + HTTP",
              "50+ rotating exit nodes",
              "Config files + API access",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} ProxyShift. For lawful use only.
      </footer>
    </main>
  );
}
