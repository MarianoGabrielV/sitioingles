const benefits = [
  {
    title: "Ingles para todos los niveles",
    text: "Programas para ninos, adolescentes y adultos con acompanamiento docente en cada etapa."
  },
  {
    title: "Ingles para empresas",
    text: "Capacitacion orientada a equipos de trabajo con foco en comunicacion profesional."
  },
  {
    title: "Cursos de conversacion",
    text: "Clases dinamicas para mejorar fluidez, pronunciacion y seguridad al hablar."
  },
  {
    title: "Ingles creativo para ninos",
    text: "Aprendizaje ludico con actividades pensadas para estimular el idioma desde edades tempranas."
  }
];

const highlights = [
  "Instituto virtual de ingles con modalidad flexible.",
  "Convenio institucional con la Universidad Tecnologica Nacional (UTN).",
  "Certificados con validez nacional."
];

export default function App() {
  return (
    <div className="page" id="top">
      <header className="hero">
        <nav className="nav container">
          <a className="brand" href="#top" aria-label="TKE Instituto Virtual de Ingles">
            <svg
              className="brand-logo"
              viewBox="0 0 120 120"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="60" cy="60" r="57" fill="none" stroke="#ffffff" strokeWidth="4" />
              <circle cx="60" cy="60" r="52" fill="none" stroke="#d4dde2" strokeWidth="1.5" />
              <path
                d="M24 38 C42 20, 66 20, 84 36"
                fill="none"
                stroke="#2ab4bc"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M22 52 C42 34, 70 34, 90 50"
                fill="none"
                stroke="#2ab4bc"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M22 66 C44 50, 72 50, 92 64"
                fill="none"
                stroke="#2ab4bc"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <text x="67" y="59" textAnchor="middle" fill="#1b6b75" fontWeight="800" fontSize="18">
                TKE
              </text>
              <text x="60" y="89" textAnchor="middle" fill="#111827" fontWeight="800" fontSize="16">
                INGLES
              </text>
            </svg>
            <span className="brand-text">TKE Instituto Virtual de Ingles</span>
          </a>
          <a className="nav-cta" href="#contacto">
            Solicitar Informacion
          </a>
        </nav>

        <div className="hero-content container">
          <p className="badge">Inscripciones Abiertas</p>
          <h1>Formacion en ingles para estudiar, trabajar y crecer</h1>
          <p className="subtitle">
            Propuesta academica para todas las edades y objetivos, con clases virtuales y
            acompanamiento docente.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#propuesta">
              Ver Propuesta
            </a>
            <a className="btn btn-secondary" href="#contacto">
              Contactar Ahora
            </a>
          </div>
        </div>
        <div className="hero-images container">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80"
            alt="Estudiantes en clase de ingles"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80"
            alt="Clase virtual de ingles"
            loading="lazy"
          />
        </div>
      </header>

      <main>
        <section className="section container" id="propuesta">
          <h2>Propuesta Academica</h2>
          <div className="cards">
            {benefits.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="instituto" className="section section-accent">
          <div className="container">
            <h2>Informacion Institucional</h2>
            <p className="section-text">
              TKE impulsa una formacion de calidad con respaldo academico y certificacion valida
              en todo el pais.
            </p>
            <div className="pricing">
              {highlights.map((item) => (
                <article className="price-card" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section container">
          <h2>Recibi asesoramiento personalizado</h2>
          <p className="section-text">
            Escribinos por WhatsApp o Instagram para conocer niveles, horarios y modalidad de
            cursada.
          </p>
          <div className="contact-box">
            <a
              className="contact-whatsapp"
              href="https://wa.me/5491154565382"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 3.5A11 11 0 0 0 3.2 16.9L2 22l5.2-1.2a11 11 0 1 0 13.3-17.3Zm-8.6 17.3a9 9 0 0 1-4.6-1.3l-.3-.2-3.1.7.7-3-.2-.3A9 9 0 1 1 12 21Z" />
                <path d="M16.9 13.8c-.3-.2-1.9-.9-2.1-1-.3-.1-.5-.1-.7.1l-.6.8c-.2.2-.4.2-.7.1-1.8-.9-3-2.6-3.2-2.9-.2-.3 0-.5.1-.7l.5-.6c.1-.2.2-.4.1-.6-.1-.2-.7-1.8-1-2.4-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.4s1.1 2.8 1.3 3c.2.2 2.2 3.4 5.3 4.6.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.4Z" />
              </svg>
              <span>WhatsApp: +54 9 11 5456-5382</span>
            </a>
            <a
              className="contact-instagram"
              href="https://www.instagram.com/tke.ingles/"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Z" />
                <circle cx="17.3" cy="6.7" r="1.2" />
                <path d="M16.8 2.5H7.2A4.7 4.7 0 0 0 2.5 7.2v9.6a4.7 4.7 0 0 0 4.7 4.7h9.6a4.7 4.7 0 0 0 4.7-4.7V7.2a4.7 4.7 0 0 0-4.7-4.7Zm2.9 14.3a2.9 2.9 0 0 1-2.9 2.9H7.2a2.9 2.9 0 0 1-2.9-2.9V7.2a2.9 2.9 0 0 1 2.9-2.9h9.6a2.9 2.9 0 0 1 2.9 2.9v9.6Z" />
              </svg>
              <span>Instagram: @tke.ingles</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
