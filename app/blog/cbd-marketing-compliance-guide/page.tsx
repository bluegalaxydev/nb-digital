import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Tag, Clock } from "lucide-react";
import Reveal from "../../components/reveal";

const articleDate = "2026-04-22";
const articleTitle =
  "CBD Marketing Compliance: FTC, FDA, and Platform Policies Explained";
const articleDescription =
  "Navigate CBD advertising rules with a comprehensive guide to FTC regulations, FDA stance on CBD claims, and platform-specific policies. Learn compliant messaging frameworks and avoid costly mistakes.";

export const metadata: Metadata = {
  title: `${articleTitle} — Harbor Point Marketing`,
  description: articleDescription,
  alternates: {
    canonical:
      "https://www.harborpointmarketingservices.com/blog/cbd-marketing-compliance-guide",
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    type: "article",
    publishedTime: articleDate,
    authors: ["Harbor Point Marketing"],
  },
};

export default function CBDComplianceGuideArticle() {
  return (
    <main className="min-h-screen bg-[#f0f4fa] text-[#0c1222]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-blue-50 to-transparent px-6 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal delay={0.1} variant="strong">
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-blue-600" />
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Compliance
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0c1222] md:text-5xl">
              CBD Marketing Compliance:{" "}
              <span className="text-gradient">FTC, FDA, and Platform Policies</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              The regulatory landscape for CBD is complex, fragmented, and
              constantly evolving. One wrong claim can result in platform bans,
              FTC enforcement, or FDA warning letters. This guide walks you
              through every rule you need to know.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock size={16} />
                10 min read
              </span>
              <span>Published {articleDate}</span>
              <span>By Harbor Point Marketing</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Reveal delay={0.15} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              The CBD Regulatory Reality
            </h2>
            <p className="mt-6 leading-8 text-slate-700">
              CBD exists in a regulatory gray zone. It's federally legal (hemp
              with less than 0.3% THC is legal under the 2018 Farm Bill), but
              the FDA hasn't established a regulatory framework for CBD as a food
              additive or dietary supplement. This creates a contradiction:
              you're legally allowed to sell it, but federal regulators haven't
              officially approved claims you can make about it.
            </p>
            <p className="mt-6 leading-8 text-slate-700">
              This legal limbo is where CBD marketers get into trouble. They
              make claims based on what they believe CBD does, and then face
              enforcement from the FTC, FDA, or platform bans. The cost of
              non-compliance ranges from account suspension to regulatory
              penalties to litigation.
            </p>
            <p className="mt-6 leading-8 text-slate-700">
              Here's the framework that governs your CBD marketing:
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.2} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              The FTC Rules: What You Can and Cannot Say
            </h2>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              The Core Rule: Substantiation Required
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              The Federal Trade Commission's Endorsement Guides and Green Guides
              require that any health or efficacy claim you make must be
              substantiated by competent and reliable scientific evidence. This
              is true for all products, but it's especially strict for CBD
              because the scientific evidence is still emerging.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              What does "competent and reliable scientific evidence" mean? The
              FTC has been clear: clinical human studies. A study on mice doesn't
              cut it. A third-party lab report on CBD purity doesn't count. You
              need human clinical evidence.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              What You CAN'T Claim
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> CBD treats, cures, or
                mitigates any disease or medical condition
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> CBD reduces anxiety,
                depression, or any mental health condition
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> CBD improves sleep
                quality or treats insomnia
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> CBD reduces pain,
                inflammation, or joint stiffness
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> CBD improves cognitive
                function or memory
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> Any claim that requires
                human clinical evidence you don't have
              </li>
            </ul>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              What You CAN Claim (With Caution)
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> "Contains CBD" or "CBD
                isolate" (factual statements only)
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> "Supports wellness" or
                "supports general health" (broad, non-disease claims)
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> "Made with natural
                ingredients" (if true)
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> Testimonials, BUT only
                with clear disclaimers that results vary and not representative
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> Structure-function
                claims IF you have substantiation (e.g., "supports healthy joint
                function" is riskier than "supports joint comfort")
              </li>
            </ul>
            <p className="mt-6 leading-8 text-slate-700">
              The distinction between disease claims and structure-function
              claims matters enormously. A disease claim requires the FDA's
              approval (which CBD hasn't gotten). A structure-function claim is
              legal for supplements but still requires substantiation.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.25} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              The FDA Position: What They've Actually Said
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              The FDA has issued multiple warning letters to CBD companies. The
              most common violations:
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Disease Claims
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              When a company claims CBD treats, prevents, or cures a disease, the
              FDA considers it a drug claim. Drugs require FDA approval. CBD
              products haven't been approved as drugs (except for Epidiolex, a
              specific pharmaceutical for seizures). Making unapproved drug claims
              violates federal law.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Unsubstantiated Health Claims
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              Even if your claim isn't technically a "disease claim," the FDA
              expects substantiation. The warning letters the agency issued cited
              lack of adequate scientific evidence for common CBD marketing claims
              like "reduces pain," "treats anxiety," or "improves sleep."
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              The FDA's Clear Statement on CBD
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              From the FDA website: "FDA has not approved CBD for OTC use as a
              dietary supplement ingredient. Adding CBD to foods or dietary
              supplements is currently not permitted under the law." This is a
              critical statement. The FDA is saying that while hemp-derived CBD
              is technically legal, they haven't approved it as a food or
              supplement ingredient.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              What this means for your marketing: Be extremely conservative. The
              FDA could change its enforcement posture at any time. Companies
              that make aggressive claims are highest-risk.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.3} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              Platform-Specific Rules
            </h2>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Google Ads & Search
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              Google prohibits CBD ads in most categories. They allow:
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> CBD products in
                approved jurisdictions with proper licensing
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> CBD information sites
                (educational, not sales-focused)
              </li>
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              They prohibit:
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> Most health and wellness
                claims about CBD
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> CBD ads targeting
                specific health conditions
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> CBD delivery methods
                (edibles, oils, topicals) unless in approved regions
              </li>
            </ul>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Meta (Facebook & Instagram)
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              Meta's policy is strict: they prohibit all ads for cannabis,
              cannabis products, and most CBD products.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              What's allowed:
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> Ads for hemp-derived CBD
                products ONLY if the business is licensed and located in
                jurisdictions where it's legal
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> Educational content
                about CBD (not promotional)
              </li>
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              What's prohibited:
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> Any health or wellness
                claims
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> References to THC, even
                to say "THC-free"
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> Testimonials about
                health outcomes
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> Any implication that CBD
                is medical or therapeutic
              </li>
            </ul>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">TikTok</h3>
            <p className="mt-4 leading-8 text-slate-700">
              TikTok explicitly prohibits CBD ads. Period. They also remove
              organic content that promotes CBD. If you're selling CBD, TikTok
              ads are off the table.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">Pinterest</h3>
            <p className="mt-4 leading-8 text-slate-700">
              Pinterest prohibits CBD product ads but allows informational pins
              about CBD (without health claims or links to product pages).
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Email & Your Own Website
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              Email service providers vary. Klaviyo, Mailchimp, and ConvertKit
              have different policies. Always check your provider's terms before
              sending CBD promotional emails. Your own website has the most
              freedom—but FTC rules still apply.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.35} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              Compliant CBD Messaging Frameworks
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Here's how to talk about CBD while staying compliant:
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Framework 1: The Wellness Approach
            </h3>
            <p className="mt-4 leading-8 text-slate-700 italic">
              "Supports your wellness routine" or "Supports a healthy lifestyle"
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              This frames CBD as part of a broader wellness practice, not as a
              cure or treatment. It's safe because it's vague. It's also boring
              and doesn't sell well, so pair it with lifestyle imagery and
              testimonials (with disclaimers).
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Framework 2: The Benefit-Focused Approach (If You Have Data)
            </h3>
            <p className="mt-4 leading-8 text-slate-700 italic">
              "Our customers report feeling more calm and relaxed" or "Users
              describe improved sleep quality"
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              This relies on customer testimonials, not your claims. Critical:
              you must include a disclaimer that results are not typical, may
              vary, and are based on individual experiences. This approach works
              if your customers are genuinely having those experiences.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Framework 3: The Scientific Positioning Approach
            </h3>
            <p className="mt-4 leading-8 text-slate-700 italic">
              "Research into CBD continues. Here's what early studies suggest..."
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Position yourself as a company tracking emerging research. Link to
              peer-reviewed studies (not blogs, not vendor testimonials). Say
              "preliminary research suggests" not "CBD does." This positions you
              as trustworthy and gives you marketing credibility without making
              unsupported claims.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Framework 4: The Lifestyle/Community Approach
            </h3>
            <p className="mt-4 leading-8 text-slate-700 italic">
              Focus on product quality, sourcing, and community—not health
              outcomes
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              "Organic, full-spectrum hemp from Oregon" or "Third-party tested
              for purity" or "Join 50,000+ customers who trust our CBD." This
              removes you from the regulatory crosshairs entirely by not making
              health claims. You're selling quality and community, not cures.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.4} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              Common CBD Marketing Mistakes That Get You Banned or Fined
            </h2>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Mistake 1: Medical Device Claims
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              Saying CBD "diagnoses, treats, cures, mitigates, or prevents" any
              disease makes it a drug. This triggers FDA enforcement. Even saying
              "for anxiety" or "for pain" crosses into drug claim territory if
              those are medical conditions.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Mistake 2: Health Claims Without Substantiation
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              Saying "CBD reduces anxiety" without clinical human evidence will
              get you an FTC complaint. Companies have paid six-figure settlements
              for this. The safe claim is "our customers report feeling calmer"
              paired with a disclaimer.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Mistake 3: Using Words That Signal Disease Treatment
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              Words like "treats," "cures," "therapy," "medicinal," "healing,"
              and "remedy" trigger regulatory scrutiny. Even "benefits" is
              borderline. Stick to "supports," "promotes," and "complements."
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Mistake 4: Fake Testimonials or Unverified Reviews
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              If your testimonials are fabricated or paid-for without clear
              disclosure, the FTC will fine you. If they make disease claims
              (even honestly), you're liable. Only use real customer testimonials
              with clear disclaimers.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Mistake 5: Targeting Sick People or Patients
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              Running ads targeting "anxiety sufferers" or "chronic pain patients"
              signals a drug claim. Target wellness audiences, not patients.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Mistake 6: Ignoring Local Regulations
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              Some states regulate CBD differently. Some require special licensing
              to sell it. Some prohibit certain marketing claims even if federal
              law allows them. Check your state's regulations before launching
              any campaign.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.45} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              Your CBD Compliance Checklist
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Before publishing any CBD marketing:
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">□</span>
                <span>
                  Read through your copy for disease claims (treats, cures,
                  prevents, diagnoses, mitigates)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">□</span>
                <span>
                  Ensure any health claim has substantiation (human clinical
                  studies)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">□</span>
                <span>
                  If using testimonials, verify they're real and add a disclaimer
                  that results vary
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">□</span>
                <span>
                  Check that platform policies allow CBD ads in your jurisdiction
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">□</span>
                <span>
                  Verify local/state regulations don't conflict with your
                  messaging
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">□</span>
                <span>
                  Use language like "supports," "promotes," or "complements"
                  instead of medical terms
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">□</span>
                <span>
                  Include clear disclaimers on website: "These statements have
                  not been evaluated by the FDA. This product is not intended to
                  diagnose, treat, cure, or prevent any disease."
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">□</span>
                <span>
                  Ensure you're targeting wellness audiences, not specific
                  disease or patient demographics
                </span>
              </li>
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.5} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              The Bottom Line
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              CBD marketing is possible. It's legal. But it requires discipline.
              You can't say what supplement companies selling glucosamine can say.
              You can't make the claims that emerging research suggests might be
              true someday.
            </p>

            <p className="mt-6 leading-8 text-slate-700">
              The safest approach: focus on product quality, purity, and
              sourcing. Let customer testimonials (with disclaimers) tell the
              story. Position yourself as a trustworthy, compliant player in an
              industry where many competitors cut corners.
            </p>

            <p className="mt-6 leading-8 text-slate-700">
              Compliance isn't a barrier to growth. It's a competitive
              advantage. Companies that follow the rules don't get banned from
              platforms, don't face FTC enforcement, and build long-term trust
              with customers.
            </p>
          </section>
        </Reveal>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-slate-900">Related Articles</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Link href="/blog/how-to-advertise-peptides-without-getting-banned" className="group rounded-xl bg-white/60 p-5 ring-1 ring-blue-100/40 transition hover:bg-white hover:shadow-md">
              <p className="font-semibold text-slate-900 group-hover:text-blue-600">How to Advertise Peptides Without Getting Banned</p>
              <p className="mt-1 text-sm text-slate-500">A platform-by-platform compliance guide for peptide advertising.</p>
            </Link>
            <Link href="/blog/complete-seo-framework-supplement-brands" className="group rounded-xl bg-white/60 p-5 ring-1 ring-blue-100/40 transition hover:bg-white hover:shadow-md">
              <p className="font-semibold text-slate-900 group-hover:text-blue-600">The Complete SEO Framework for Supplement Brands</p>
              <p className="mt-1 text-sm text-slate-500">From 0 to 10K organic visitors — a step-by-step guide.</p>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <Reveal delay={0.55} variant="soft">
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#0c1222]">
              Need Help with Your CBD Marketing Strategy?
            </h3>
            <p className="mt-3 text-lg text-slate-600">
              We help CBD brands grow through compliant messaging, platform
              strategy, and organic growth channels. Let's build a roadmap that
              works within regulatory constraints.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Get a Compliance Review
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>

        {/* Article Meta Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: articleTitle,
              description: articleDescription,
              image:
                "https://www.harborpointmarketingservices.com/og-image.jpg",
              datePublished: articleDate,
              author: {
                "@type": "Organization",
                name: "Harbor Point Marketing",
                url: "https://www.harborpointmarketingservices.com",
              },
              publisher: {
                "@type": "Organization",
                name: "Harbor Point Marketing",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.harborpointmarketingservices.com/logo.png",
                },
              },
            }),
          }}
        />
      </article>
    </main>
  );
}
