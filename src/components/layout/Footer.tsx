import Link from "next/link";
import { mainNav, quoteCta } from "@/content/navigation";
import { allServices } from "@/content/services";
import { company, whatsappHref } from "@/content/company";
import { brand } from "@/config/brand";
import { Logo } from "@/components/ui/Logo";
import { TechnicalGrid } from "@/components/graphics/TechnicalGrid";
import { Pending } from "@/components/ui/Pending";
import { ClientLogos } from "@/components/sections/ClientLogos";

export function Footer() {
  const wa = whatsappHref();
  const serviceLinks = allServices.map((s) => ({ label: s.title, href: s.href }));

  return (
    <footer className="on-dark relative overflow-hidden bg-ink text-white">
      <TechnicalGrid className="text-white/[0.035]" minor={16} major={96} />
      {/* Isotipo oficial como marca de agua */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={brand.logos.isotipoBlanco}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-20 w-[520px] max-w-none opacity-[0.035] select-none md:w-[720px]"
      />

      <div className="wrap relative pt-16 pb-10 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="rojo-blanco" height={64} className="max-w-[300px] md:h-[76px]!" />
            <p className="display mt-10 text-3xl text-white md:text-4xl">
              La precisión
              <br />
              <span className="text-red">no es opcional.</span>
            </p>
            <p className="mt-5 max-w-sm text-sm text-steel-light">
              Fabricación, adaptación y rectificación de herramientas de corte industrial para empresas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-7">
            <FooterCol title="Navegación">
              {mainNav.map((i) => (
                <FooterLink key={i.href} href={i.href}>
                  {i.label}
                </FooterLink>
              ))}
            </FooterCol>
            <FooterCol title="Servicios">
              {serviceLinks.map((i) => (
                <FooterLink key={i.label} href={i.href}>
                  {i.label}
                </FooterLink>
              ))}
            </FooterCol>
            <FooterCol title="Contacto" className="col-span-2 sm:col-span-1">
              <li className="text-sm text-white/80">
                {company.city}, {company.country}
              </li>
              <li className="text-sm text-white/80">
                {wa ? (
                  <a href={wa} className="hover:text-white">
                    WhatsApp
                  </a>
                ) : (
                  <>
                    WhatsApp <Pending />
                  </>
                )}
              </li>
              <li className="text-sm text-white/80">
                {company.contact.email ? (
                  <a href={`mailto:${company.contact.email}`} className="hover:text-white">
                    {company.contact.email}
                  </a>
                ) : (
                  <>
                    Correo <Pending />
                  </>
                )}
              </li>
              <li className="pt-2">
                <Link href={quoteCta.href} className="text-sm font-semibold text-red-light underline-offset-4 hover:underline">
                  {quoteCta.label} →
                </Link>
              </li>
            </FooterCol>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <ClientLogos variant="footer" />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-steel-light md:flex-row md:items-center md:justify-between">
          <p className="font-mono tracking-[0.04em]">
            © {company.copyrightYear} FERKOR · {company.descriptor} · {company.coverage}
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono tracking-[0.04em]">
            <Link href="/privacidad" className="hover:text-white">
              Privacidad y cookies
            </Link>
            <span>Sitio por UPZITES</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h2 className="eyebrow text-steel-light">{title}</h2>
      <ul className="mt-5 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-white/80 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
