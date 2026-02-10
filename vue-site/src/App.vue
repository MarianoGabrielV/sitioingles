<script setup>
const benefits = [
  {
    title: "Clases Presenciales",
    text: "Aprende con sesiones uno a uno en un entorno dinamico, con enfoque en conversacion real."
  },
  {
    title: "Clases Virtuales",
    text: "Conecta desde cualquier lugar con clases en vivo, material digital y seguimiento semanal."
  },
  {
    title: "Plan Personalizado",
    text: "Objetivos adaptados a tu nivel: examenes, entrevistas laborales, viajes o ingles academico."
  }
];

const plans = [
  { name: "Starter", hours: "4 clases/mes", price: "$80 USD" },
  { name: "Intensive", hours: "8 clases/mes", price: "$145 USD" },
  { name: "Premium", hours: "12 clases/mes", price: "$210 USD" }
];
</script>

<template>
  <div class="page">
    <header class="hero">
      <nav class="nav container">
        <span class="logo">English Flow</span>
        <a class="nav-cta" href="#contacto">Reservar Clase</a>
      </nav>

      <div class="hero-content container">
        <p class="badge">Presencial + Virtual</p>
        <h1>Domina el ingles con clases particulares practicas</h1>
        <p class="subtitle">
          Clases dinamicas para adolescentes, universitarios y profesionales.
          Mejora tu speaking, listening y confianza desde la primera semana.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#planes">Ver Planes</a>
          <a class="btn btn-secondary" href="#contacto">Agendar Llamada</a>
        </div>
      </div>
      <div class="hero-images container">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80"
          alt="Clase de ingles presencial"
          loading="lazy"
        />
        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80"
          alt="Clase de ingles virtual"
          loading="lazy"
        />
      </div>
    </header>

    <main>
      <section class="section container">
        <h2>Por que elegir estas clases</h2>
        <div class="cards">
          <article class="card" v-for="item in benefits" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section id="planes" class="section section-accent">
        <div class="container">
          <h2>Planes Mensuales</h2>
          <p class="section-text">
            Elige el ritmo que mejor se adapte a tu objetivo.
          </p>
          <div class="pricing">
            <article class="price-card" v-for="plan in plans" :key="plan.name">
              <h3>{{ plan.name }}</h3>
              <p>{{ plan.hours }}</p>
              <strong>{{ plan.price }}</strong>
            </article>
          </div>
        </div>
      </section>

      <section id="contacto" class="section container">
        <h2>Reserva tu clase de prueba</h2>
        <p class="section-text">
          Escribeme por WhatsApp o correo y recibe una propuesta personalizada.
        </p>
        <div class="contact-box">
          <a href="https://wa.me/10000000000" target="_blank" rel="noreferrer">
            WhatsApp: +1 000 000 0000
          </a>
          <a href="mailto:hello@englishflow.com">hello@englishflow.com</a>
        </div>
      </section>
    </main>
  </div>
</template>
