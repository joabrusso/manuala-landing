"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/nav";

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-paper-0 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: todavía no hay backend conectado. Cuando se defina el proveedor
    // de envío de mail (ej. Resend desde un app/api/contacto/route.ts),
    // reemplazar esto por un fetch real al endpoint y manejar sus errores.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ink/10 bg-paper-0 p-8 text-center">
        <h3 className="font-heading text-lg font-bold">Todavía no podemos recibir mensajes por acá</h3>
        <p className="mt-2 text-sm text-ink-muted">
          Estamos conectando este formulario. Mientras tanto, escribinos directo a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-ink underline">
            {CONTACT_EMAIL}
          </a>{" "}
          y te contestamos igual.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-ink/10 bg-paper-0 p-8">
      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold text-ink">
          Nombre
        </label>
        <input id="nombre" name="nombre" type="text" required className={inputClass} placeholder="Tu nombre" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClass} placeholder="vos@empresa.com" />
      </div>
      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-semibold text-ink">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          className={inputClass}
          placeholder="Contanos qué necesitás"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white hover:bg-ink-muted"
      >
        Enviar
      </button>
      <p className="text-center text-xs text-ink-faint">
        ¿Preferís mandarlo directo? Escribinos a{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </form>
  );
}
