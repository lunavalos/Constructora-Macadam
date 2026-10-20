import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Aviso de Privacidad – Constructora MACADAM",
  description:
    "Aviso de Privacidad y Tratamiento de Datos Personales de Constructora MACADAM S.A. de C.V., conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
};

export default function AvisoDePrivacidadPage() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
          Legal · Ley Federal de Protección de Datos Personales en Posesión de
          los Particulares
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-ink-950 sm:text-4xl">
          Aviso de Privacidad y Tratamiento de Datos Personales
        </h1>

        <div className="mt-10 space-y-10 text-base leading-relaxed text-ink-700">
          {/* Información sobre tratamiento */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-ink-950">
              Información sobre tratamiento de datos personales
            </h2>
            <p>
              De conformidad con lo establecido por la Ley Federal de Protección
              de Datos Personales en Posesión de Particulares,{" "}
              <strong className="text-ink-900">
                Constructora MACADAM S.A. de C.V.
              </strong>{" "}
              hace de su conocimiento que, en cumplimiento a la política de
              privacidad y manejo de datos personales, en todo momento buscará
              que el tratamiento de los mismos sea legítimo y controlado, a
              efecto de garantizar la privacidad y el derecho a la
              autodeterminación informativa de sus datos.
            </p>
          </section>

          {/* Identidad y domicilio */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-ink-950">
              Identidad y domicilio responsable
            </h2>
            <p>
              <strong className="text-ink-900">
                Constructora MACADAM S.A. de C.V.
              </strong>{" "}
              (en lo sucesivo “MACADAM”) con domicilio en{" "}
              <strong className="text-ink-900">
                Mariano Abasolo #2300 COL. Guanajuato, C.P. 25280 Saltillo,
                Coahuila
              </strong>
              , de acuerdo a lo establecido por la Ley Federal de Protección de
              Datos Personales en Posesión de Particulares, es responsable del
              tratamiento de sus datos personales y hace de su conocimiento que
              de conformidad con la Política de Privacidad buscará en todo
              momento que el tratamiento y uso que se le da a los mismos sea
              legítimo y controlado. Constructora MACADAM en todo momento
              buscará darle un tratamiento legítimo y controlado garantizando la
              privacidad de sus datos.
            </p>
            <p>
              De conformidad con lo anterior, la persona responsable del manejo
              de sus datos personales, será quien ostenta el cargo de Socio
              director de la Firma.
            </p>
          </section>

          {/* Finalidades primarias */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-ink-950">
              Finalidades primarias del tratamiento
            </h2>
            <p>
              Sus datos personales serán utilizados para las siguientes
              finalidades:
            </p>
            <ul className="space-y-2.5 pl-1">
              {[
                "Verificar y confirmar su identidad;",
                "Proveer servicios y productos requeridos;",
                "Identificarle como cliente o proveedor de Constructora MACADAM;",
                "Atenderle en sus solicitudes, quejas, dudas y/o comentarios relacionados con nuestros servicios;",
                "Dar cumplimiento a obligaciones contraídas con nuestros clientes;",
                "Y las demás finalidades que resulten necesarias para la prestación de los servicios requeridos por nuestros clientes.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Finalidades secundarias */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-ink-950">
              Finalidades secundarias
            </h2>
            <p>
              De manera adicional, si usted no se opone, Constructora MACADAM
              utilizará su información personal para enviarle información sobre
              cambios en nuestros productos y servicios, enviarle información
              promocional sobre nuestros productos y servicios y publicidad
              relacionada con los mismos, así como para la aplicación de
              encuestas y evaluaciones sobre nuestros sitios web, sobre el uso
              de nuestros productos y servicios, así como la atención que les
              brindamos en Constructora MACADAM.
            </p>
            <p>
              En caso de que no desee que sus datos personales sean tratados
              para alguna o todas las finalidades adicionales, usted nos puede
              comunicar lo anterior mediante un escrito el cual se enviará al
              correo electrónico{" "}
              <a
                href={`mailto:${siteConfig.contact.postVentasEmail}`}
                className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-900"
              >
                {siteConfig.contact.postVentasEmail}
              </a>{" "}
              con los siguientes requisitos:
            </p>
            <ul className="space-y-2.5 pl-1">
              {[
                "Fecha del escrito;",
                "Nombre y denominación o razón social;",
                "RFC;",
                "Limitación de tratamiento, uso o divulgación de sus datos personales.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Una vez que se recibe el escrito, se hará llegar un correo de
              lectura y entrega de su carta en un plazo máximo de 3 días
              hábiles.
            </p>
          </section>

          {/* Transferencias */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-ink-950">
              Transferencias
            </h2>
            <p>
              Para cumplir con las finalidades anteriormente descritas nosotros
              no realizamos transferencias, no vendemos, ni intercambiamos sus
              datos personales a terceros, salvo que estos sean requeridos por
              mandato de alguna autoridad competente judicial o administrativa o
              por cuando la ley así lo determine.
            </p>
          </section>

          {/* Derechos ARCO */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-ink-950">
              Derechos ARCO
            </h2>
            <p>
              Usted o su representante legal podrán ejercer cualquiera de los
              derechos de Acceso, Rectificación, Cancelación u Oposición (en lo
              sucesivo “Derechos ARCO”) ya sea para acceder a sus datos
              personales que poseemos y a los detalles del tratamiento de los
              mismos, así como rectificarlos en caso de ser inexactos o
              instruirnos cancelarlos cuando considere que resulten ser
              excesivos o innecesarios para las finalidades que justificaron su
              obtención así como oponerse en caso de que no desee que sus datos
              personales sean tratados para alguna de las finalidades referidas
              en el presente aviso.
            </p>
            <p>
              En cualquier momento usted podrá revocar el consentimiento que nos
              ha otorgado para el tratamiento de sus datos personales, a fin de
              que dejemos de hacer uso de los mismos.
            </p>
            <p>
              Le solicitamos que para el ejercicio de dichos derechos nos envíe
              su petición mediante un escrito a la cuenta de correo electrónico{" "}
              <a
                href={`mailto:${siteConfig.contact.postVentasEmail}`}
                className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-900"
              >
                {siteConfig.contact.postVentasEmail}
              </a>
              . El documento debe contener las siguientes características:
            </p>
            <ul className="space-y-2.5 pl-1">
              {[
                "Fecha del escrito;",
                "Nombre y denominación o razón social;",
                "RFC;",
                "Limitación de tratamiento, uso o divulgación de sus datos personales.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Una vez que se recibe el escrito, se hará llegar un correo de
              lectura y entrega de su carta en un plazo máximo de 3 días
              hábiles.
            </p>
            <p>
              Para las finalidades señaladas en el presente aviso de privacidad
              podemos recabar sus datos ya sea de forma directa, mediante
              nuestros servicios en línea y cuando obtenemos información a
              través de otras fuentes que están permitidas por la ley. Los datos
              que obtenemos entre otros pueden ser:
            </p>
            <ul className="space-y-2.5 pl-1">
              {[
                "Datos Fiscales",
                "Datos Patronales",
                "Datos generales de empleados o representantes legales.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Cambios al aviso */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-ink-950">
              Cambios al Aviso de Privacidad
            </h2>
            <p>
              Nos reservamos el derecho de efectuar en cualquier momento
              modificaciones o actualizaciones al presente aviso de privacidad,
              para la atención de novedades legislativas o jurisprudenciales,
              políticas internas, nuevos requerimientos para la prestación u
              ofrecimiento de nuestros servicios.
            </p>
            <p>
              En caso de existir cambios sustanciales o totales en el presente
              Aviso de Privacidad o en el que en su momento se le proporcione,
              se pondrá a su disposición la versión actualizada del mismo en
              nuestro sitio web{" "}
              <strong className="text-ink-900">cmacadam.com</strong>. Puede
              consultar la actualización en la sección de Aviso de Privacidad.
            </p>
          </section>
        </div>

        <p className="mt-12 border-t border-ink-200 pt-6 text-sm text-ink-600">
          ¿Dudas sobre este aviso?{" "}
          <Link
            href="/contacto"
            className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-900"
          >
            Contáctanos
          </Link>{" "}
          y te atendemos.
        </p>
      </div>
    </section>
  );
}
