import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/profile';
import { cardReveal, fadeInUp, stagger } from './animation';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const socialLinks = [
  { icon: Github, href: profile.githubUrl, label: 'GitHub' },
  { icon: Linkedin, href: profile.linkedinUrl, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
];

export function ContactSection() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/manqynno', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      console.error('Contact form error', error);
      setStatus('error');
      setErrorMessage('Oops! There was an error submitting your form.');
    }
  };

  return (
    <section id="contact" className="portfolio-section bg-slate-950">
      <div className="section-shell">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-head"
        >
          <h2>Get In Touch</h2>
          <div className="section-divider section-divider-purple" />
          <p>I am open to internships, full-time roles, and collaborative software projects.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <Card className="accent-panel h-full" data-tone="purple">
              <h3 className="text-xl font-semibold text-white">Send me a message</h3>
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input id="firstName" name="firstName" type="text" required placeholder="First name" />
                  <Input id="lastName" name="lastName" type="text" required placeholder="Last name" />
                </div>
                <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
                <Input id="subject" name="subject" type="text" required placeholder="Project discussion" />
                <Textarea id="message" name="message" rows={6} required placeholder="Tell me about your project..." />

                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                  {status === 'success' && (
                    <p className="text-sm text-emerald-300">Thank you. Your message has been received.</p>
                  )}
                  {status === 'error' && errorMessage && (
                    <p className="text-sm text-rose-300">{errorMessage}</p>
                  )}
                </div>
              </form>
            </Card>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            <motion.div variants={cardReveal}>
              <Card className="accent-panel" data-tone="emerald">
                <h3 className="text-xl font-semibold text-white">Let&apos;s connect</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  I&apos;m interested in opportunities where I can ship production software, work with strong engineering teams, and keep building impactful tools.
                </p>
              </Card>
            </motion.div>

            <motion.a variants={cardReveal} href={`mailto:${profile.email}`} className="contact-row">
              <Mail className="h-5 w-5" />
              <span>{profile.email}</span>
            </motion.a>
            <motion.a variants={cardReveal} href={`tel:+1${profile.phone.replace(/[^\d]/g, '')}`} className="contact-row">
              <Phone className="h-5 w-5" />
              <span>{profile.phone}</span>
            </motion.a>
            <motion.p variants={cardReveal} className="contact-row">
              <MapPin className="h-5 w-5" />
              <span>{profile.location}</span>
            </motion.p>

            <motion.div variants={cardReveal}>
              <Card className="accent-panel space-y-3" data-tone="cyan">
                <p className="text-sm text-slate-300">Follow me</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="media-overlay-button"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
