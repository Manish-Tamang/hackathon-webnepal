import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Footer } from "@/components/layout/footer"
export default function PricingPage() {
  return (
    <>
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50 border border-emerald-100 ">
            <div className="px-6 py-12 sm:py-16 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Simple, transparent pricing</h1>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Choose a plan that grows with your learning goals.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[{
              name: "Starter",
              price: "Free",
              features: ["Basics courses", "Community access", "Limited labs"],
              cta: "Get Started",
              href: "/signup",
            },{
              name: "Pro",
              price: "रु 999/month",
              features: ["All courses", "AI feedback", "Unlimited labs", "Certificates"],
              cta: "Upgrade to Pro",
              href: "/signup",
            },{
              name: "Team",
              price: "रु 1,599/month",
              features: ["Pro features", "Team analytics", "Priority support"],
              cta: "Contact Sales",
              href: "/about",
            }].map((tier) => (
              <article key={tier.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                <div className="mt-2 text-3xl font-extrabold text-gray-900">{tier.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {tier.features.map((f) => (<li key={f}>• {f}</li>))}
                </ul>
                <div className="mt-6">
                  <Button asChild className="w-full bg-emerald-600 text-white hover:bg-emerald-700">
                    <Link href={tier.href}>{tier.cta}</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
    <Footer/>
    </>
  )
}
