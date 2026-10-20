import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, interes, mensaje } = body;

    // Validaciones básicas
    if (!nombre || !nombre.trim()) {
      return NextResponse.json(
        { error: "Por favor, ingresa tu nombre." },
        { status: 400 }
      );
    }

    if (!email || !email.trim() || !email.includes("@")) {
      return NextResponse.json(
        { error: "Por favor, ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (!mensaje || !mensaje.trim()) {
      return NextResponse.json(
        { error: "Por favor, escribe un mensaje." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "mail.cmacadam.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const isSecure =
      process.env.SMTP_SECURE === "true" ||
      port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailFrom = process.env.MAIL_FROM || `"Constructora Macadam" <${process.env.SMTP_USER}>`;
    const mailTo = process.env.MAIL_TO || "contacto@cmacadam.com";

    // Formatear fecha y hora
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("es-MX", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/Mexico_City",
    }).format(now);

    const safeNombre = String(nombre).trim();
    const safeEmail = String(email).trim();
    const safeTelefono = telefono ? String(telefono).trim() : "No proporcionado";
    const safeInteres = interes ? String(interes).trim() : "General";
    const safeMensaje = String(mensaje).trim();

    // Plantilla HTML elegante
    const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Nuevo mensaje desde el sitio web</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6fb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #141821;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f6fb; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(5, 17, 66, 0.08); border: 1px solid #e1e5ef;">
          <!-- Header -->
          <tr>
            <td style="background-color: #051142; padding: 32px; text-align: center; border-bottom: 3px solid #1248FF;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: 0.05em;">
                CONSTRUCTORA MACADAM
              </h1>
              <p style="margin: 6px 0 0 0; color: #8eabff; font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em;">
                Nuevo Prospecto desde el Sitio Web
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 32px;">
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.5; color: #4c5566;">
                Has recibido un nuevo mensaje a través del formulario de contacto del sitio web oficial:
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f7f8fb; border-radius: 12px; border: 1px solid #e1e5ef; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e1e5ef; width: 35%; font-size: 13px; font-weight: 600; color: #5d677a; text-transform: uppercase; letter-spacing: 0.05em;">
                    Nombre
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e1e5ef; font-size: 15px; font-weight: 600; color: #141821;">
                    ${safeNombre}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e1e5ef; font-size: 13px; font-weight: 600; color: #5d677a; text-transform: uppercase; letter-spacing: 0.05em;">
                    Correo electrónico
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e1e5ef; font-size: 15px; color: #1248FF;">
                    <a href="mailto:${safeEmail}" style="color: #1248FF; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e1e5ef; font-size: 13px; font-weight: 600; color: #5d677a; text-transform: uppercase; letter-spacing: 0.05em;">
                    Teléfono
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e1e5ef; font-size: 15px; color: #141821;">
                    <a href="tel:${safeTelefono.replace(/\s+/g, '')}" style="color: #141821; text-decoration: none;">${safeTelefono}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; font-size: 13px; font-weight: 600; color: #5d677a; text-transform: uppercase; letter-spacing: 0.05em;">
                    Interés / Proyecto
                  </td>
                  <td style="padding: 14px 18px; font-size: 15px; font-weight: 600; color: #0e38cc;">
                    ${safeInteres}
                  </td>
                </tr>
              </table>

              <!-- Mensaje -->
              <div style="background-color: #ffffff; border: 1px solid #c5ccdc; border-left: 4px solid #1248FF; border-radius: 8px; padding: 18px 20px; margin-bottom: 24px;">
                <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #1248FF;">
                  Mensaje del cliente:
                </p>
                <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #232833; white-space: pre-wrap;">
${safeMensaje}
                </p>
              </div>

              <!-- Botones de Acción Directa -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-top: 10px;">
                    <a href="mailto:${safeEmail}?subject=Re:%20Contacto%20Constructora%20Macadam" style="display: inline-block; background-color: #1248FF; color: #ffffff; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 14px; margin-right: 8px;">
                      Responder por Correo
                    </a>
                    ${
                      safeTelefono !== "No proporcionado"
                        ? `<a href="https://wa.me/${safeTelefono.replace(/[^0-9]/g, '')}" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 14px;">
                            Contactar por WhatsApp
                          </a>`
                        : ""
                    }
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f7f8fb; padding: 20px 32px; border-top: 1px solid #e1e5ef; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #919bb0;">
                Fecha: ${formattedDate} · Constructora MACADAM, S.A. de C.V.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const textContent = `
Nuevo mensaje desde el sitio web - Constructora Macadam
Fecha: ${formattedDate}

Nombre: ${safeNombre}
Correo: ${safeEmail}
Teléfono: ${safeTelefono}
Interés: ${safeInteres}

Mensaje:
${safeMensaje}
    `.trim();

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: safeEmail,
      subject: `Nuevo prospecto web: ${safeNombre} (${safeInteres})`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Tu mensaje ha sido enviado exitosamente. Nos comunicaremos contigo a la brevedad.",
    });
  } catch (error: unknown) {
    console.error("Error al enviar correo por SMTP:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Ocurrió un error inesperado al enviar el mensaje.";

    return NextResponse.json(
      {
        error:
          "No se pudo enviar el mensaje en este momento. Por favor intenta de nuevo o comunícate vía WhatsApp.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
