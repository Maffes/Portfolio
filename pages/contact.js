import { ContactForm } from '../components/contactForm/ContactForm';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/container/Container';
import classes from '../components/contactForm/ContactForm.module.scss'
import { useEffect } from 'react'
import Header from 'next/head'

const Contect = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
  })})

  return (
    <Layout>
        <Header>
    <title>Maff - Contact</title>
    <meta name="description" content="Sunshine Coast based UX/UI Design, App Development and Web Devlopment." />
    </Header>
      <Container>
        <div className={`col-12 col-lg-8 ${classes.contactForm}`}>
          <h1 data-aos="fade-up" data-aos-duration="700" data-aos-offset="200" data-aos-delay="100">Let&apos;s build something amazing together</h1>
          <h2 data-aos="fade-up" data-aos-duration="700" data-aos-offset="200" data-aos-delay="150">Get in touch</h2>
        </div>
        <ContactForm />
        </Container>
    </Layout>
  )
}

export default Contect

