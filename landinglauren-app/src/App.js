import React from "react";
import "./App.css";
import profileImage from "./profile.jpg"; // Asegúrate de tener esta imagen en la carpeta src
import { Mail, Phone, Github,Globe, TentTree, Youtube } from "lucide-react";
function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <img
            src={profileImage}
            alt="Juan Pérez"
            className="profile-image"
          />
          <h1>Lauren I Mejía García</h1>
          <p>Ingeniero en Sistemas | Analista - Desarrollador</p>
          <button className="btn-primary">
            <a href="#contact" className="button-link">
              Contáctame
            </a>
          </button>
        </div>
      </header>

      <main className="main-content">
        <section className="about">
          <h2>Sobre mí</h2>
          <p>
          Soy ingeniero en sistemas con más de 6 años de experiencia en el desarrollo e implementación de aplicaciones web y software empresarial.
          He trabajado en proyectos para organismos, agencias de turismo, corredores de seguros y comercios de diversos sectores. También he sido 
          analista en la implementación de sistemas de gestión empresarial como Odoo, SAP Business y otras soluciones.
          Mi pasión es construir soluciones innovadoras que impacten positivamente a las personas, aprovechando recursos y 
          herramientas Open Source para crear soluciones robustas y confiables. Siempre busco aprender y adaptarme a nuevas tecnologías
          para ofrecer los mejores resultados.
          </p>
        </section>

        <section className="skills">
          <h2>Habilidades</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
                Boopstrap 5, CSS 3 Pure, JQuery, HTML              
            </div>
            <div className="skill-card">
              <h3>Backend</h3>
              <p>Python, PHP, C#, Visual Basic</p>
            </div>
            <div className="skill-card">
              <h3>Bases de Datos</h3>
              <p>PostgreSQL,MSQL server, MySQL</p>
            </div>
            <div className="skill-card">
              <h3>Servicios</h3>
              <p>Dominos, Certificados SSL, Azure, Cloud VPS</p>
            </div>
          </div>
        </section>

        {/* Sección Experiencia */}
        <section className="experience" id="experience">
          <h2>Experiencia</h2>
          <div className="experience-card">
            <h3>Desarrollador Full Stack (Polygonline)</h3>
            <p className="date">Enero 2023 - Presente</p>
            <p>
              Trabajo en el desarrollo de aplicaciones web con Django, integrando tecnologías modernas y garantizando soluciones escalables.
            </p>
            <ul>
              <li>Diseño e implementación de sistema de contabilidad para multiempresa</li>
              <li>Diseño y desarrollo de sistema de activos fijos.</li>
              <li>Desarrollo de sistema de Planillas</li>
            </ul>
          </div>
          <br></br>
          <div className="experience-card">
            <h3>Analista de sistema y soporte a usuarios(Plan International) </h3>
            <p className="date">Septiembre 2018 - Diciembre 2022</p>
            <p>
              Administración de servidores AD, SLQ y respaldos de usuarios, desarrollo de sitios web e implementación de soluciones para procesos internos.
            </p>
            <ul>
              <li>Soporte en la implementación de SAP Business y Microsoft Dinamics a nivel regional</li>
              <li>Gestión de mantenimiento de equipos de usuarios y servidores a nivel de Pais</li>
              <li>Migración de servicios locales a la nube de Azure </li>
            </ul>
          </div>
          <br></br>
          <div className="experience-card">
            <h3>Analista - Programador (ASODENIC) </h3>
            <p className="date">2015 - 2018</p>
            <p>
              Analista de sistema de cartera y contabilidad a nivel de bases de datos (DBA Fox Pro y SQL server)
            </p>
            <ul>
              <li>Desarrollo de sistemas de analisis de datos de cartera con .NET</li>
              <li>Gestión y mantemiento de servidores (Zimbra, GitLab, AD)</li>
              <li>Desarrollo de sitio web y simulador de creditos con Javascript</li>
            </ul>
          </div>
          <br></br>
          <div className="experience-card">
            <h3>Desarrollador (Save the Children) </h3>
            <p className="date">2014 - 2015</p>
            <p>
              Desarrollado e implementación de módulos de biblioteca y gestión de archivos con lenguaje Visual Basic .Net
            </p>
            <ul>
              <li>Implementación y desarrollo colaborativo</li>
              <li>Documentación de software basado en lenguaje UML</li>
              <li>Soporte de usuarios en uso de aplicaciones</li>
            </ul>
          </div>
        </section>
        


        <section className="portfolio">
          <h2>Proyectos</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <h3>Polygonline Sys</h3>
              <p>Sistema completo para gestionar contabilidades multiempresas, se han integrado los módulos de activos fijos y planilla salarial.</p>
            </div>
            <div className="portfolio-item">
              <h3>Aplicación de E-commerce</h3>
              <p>Implementación de soluciones CRM/ERP de código abierto para diferentes tipos de comercio, gestión de inventarios, facturación, terminal de ventas</p>
            </div>
            <div className="portfolio-item">
              <h3>Diseño de sitios Web</h3>
              <p>Rediseño de sitio web CVSeguro.com</p>
              <p>Administración de sitio web lexsolutions.com</p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Contacto</h2>
          <p>
              <Phone size={18} className="icon" /> +505 8405 0372
          </p>
          <p>
              <Mail size={18} className="icon" /> lauren.mejia@polygonline.com
          </p>
        </section>

        <section>
        <h3>My links</h3>
          <div className="social-media">
            <a href="https://github.com/mejialauren29" target="_blank" rel="noopener noreferrer">
              <Github size={24} className="icon social-icon" />
            </a>
            <a href="https://polygonline.com" target="_blank" rel="noopener noreferrer">
              <Globe size={24} className="icon social-icon" />
            </a>
            <a href="https://ycualeslaruta.com" target="_blank" rel="noopener noreferrer">
              <TentTree size={24} className="icon social-icon" />
            </a>
            <a href="https://www.youtube.com/@cualeslaruta298" target="_blank" rel="noopener noreferrer">
              <Youtube size={24} className="icon social-icon" />
            </a>
            
          </div>
        </section>
        
      </main>

      <footer className="footer">
        <p>© 2025 Lauren Mejía. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;


