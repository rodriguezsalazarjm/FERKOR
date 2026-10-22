import { differentials } from "@/content/home";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FerkorIcon } from "@/components/graphics/FerkorIcon";
import { CutGeometry } from "@/components/graphics/CutGeometry";

export function Differentials() {
  return (
    <section aria-labelledby="dif-title" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionLabel index="08">Por qué FERKOR</SectionLabel>
            <h2 id="dif-title" className="display mt-6 text-[clamp(2.6rem,4.4vw,3.9rem)] text-ink">
              Tus requerimientos técnicos,{" "}
              <span className="block text-red">nuestra prioridad.</span>
            </h2>
            <CutGeometry variant="stack" className="mt-10 h-10 w-20 text-ink" />
          </div>
        </div>

        <ul className="border-t-2 border-ink lg:col-span-7">
          {differentials.map((d, i) => (
            <li key={d.title} className="group grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-b border-line py-7 sm:grid-cols-[3rem_auto_1fr] sm:items-start md:py-8">
              <span className="hidden pt-1 font-mono text-xs text-steel sm:block">{String(i + 1).padStart(2, "0")}</span>
              <FerkorIcon name={d.icon} size={40} className="text-ink transition-colors group-hover:text-red" />
              <div>
                <h3 className="font-display text-[1.75rem] leading-none font-extrabold text-ink uppercase">{d.title}</h3>
                <p className="mt-2 max-w-md text-ink/70">{d.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
