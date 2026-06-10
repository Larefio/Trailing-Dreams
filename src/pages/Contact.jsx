export default function Contact() {
  return (
    <main className="contact-page-premium">
      <div className="contact-split-wrapper">
        <div className="contact-image-side">
          <img src="/img/contact_desk.png" alt="Contact Us Desk" className="contact-hero-img" />
          <div className="contact-image-overlay">
            <h2>Let's Talk Plants.</h2>
            <p>We are here to help your indoor jungle thrive. Reach out with any questions, requests, or just to say hello.</p>
            
            <div className="contact-info-list">
              <div className="contact-info-row">
                <span className="info-icon">✉️</span>
                <div className="info-text">
                  <strong>Email</strong>
                  <a href="mailto:info@trailingdreams.com">info@trailingdreams.com</a>
                </div>
              </div>
              <div className="contact-info-row">
                <span className="info-icon">💬</span>
                <div className="info-text">
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">+51 999 999 999</a>
                </div>
              </div>
              <div className="contact-info-row">
                <span className="info-icon">📍</span>
                <div className="info-text">
                  <strong>Location</strong>
                  <p>Tyler, Tx</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-side">
          <div className="form-side-header">
            <h1>Get in Touch</h1>
            <p>Send us a message and we'll get back to you as soon as possible.</p>
          </div>

          <form className="premium-form" action="#" method="POST" aria-label="Contact Form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" placeholder="e.g. John Doe" autoComplete="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input id="email" name="email" type="email" placeholder="john@example.com" autoComplete="email" required />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject (Optional)</label>
              <input id="subject" name="subject" type="text" placeholder="What is this regarding?" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-submit-premium" aria-label="Send contact message">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
