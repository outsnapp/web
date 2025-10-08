import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      const mailtoLink = `mailto:ssggn77@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-40 pb-20">
        <section className="container mx-auto px-4">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">CONTACT</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For enquiries about originals, commissions, or prints, please get in touch.
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <form onSubmit={onSubmit} className="bg-secondary/50 rounded-2xl p-8">
              <div className="grid grid-cols-1 gap-4">
                <label className="text-sm font-medium text-foreground">Name
                  <input
                    className="mt-1 w-full px-3 py-2 bg-background border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm font-medium text-foreground">Email
                  <input
                    type="email"
                    className="mt-1 w-full px-3 py-2 bg-background border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                  />
                </label>
                <label className="text-sm font-medium text-foreground">Message
                  <textarea
                    className="mt-1 w-full min-h-[140px] px-3 py-2 bg-background border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Tell me about your enquiry"
                  />
                </label>
                <button type="submit" className="mt-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">Send</button>
                {submitted && (
                  <div className="text-sm text-green-600">Thanks! Your email client should open with the message ready to send.</div>
                )}
              </div>
            </form>

            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-secondary/30">
                <h2 className="text-2xl font-bold mb-2 text-foreground">Email</h2>
                <a href="mailto:ssggn77@gmail.com" className="text-primary underline">ssggn77@gmail.com</a>
                <p className="text-sm text-muted-foreground mt-2">Emails from embedded forms can be routed later to your preferred provider.</p>
              </div>
              <div className="p-8 rounded-2xl bg-secondary/30">
                <h2 className="text-2xl font-bold mb-2 text-foreground">Social</h2>
                <div className="flex gap-4 text-sm">
                  <a href="https://www.instagram.com/sarakhalid.art" target="_blank" rel="noreferrer" className="underline hover:text-primary">Instagram</a>
                  <a href="https://www.facebook.com/sarakhalid.art/" target="_blank" rel="noreferrer" className="underline hover:text-primary">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;


