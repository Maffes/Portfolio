import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/hero/Hero'
import { WorkList } from '../components/workList/WorkList';
import { TextSpan } from '../components/textSpan/TextSpan'
import { IconList } from '../components/iconList/IconList'
import portfolioContent from '../portfolioContent.json'
import { Container } from '../components/container/Container';
import { useEffect } from 'react'
import Header from 'next/head'

const Index = () => {
  const data = portfolioContent.data[0]
  const content = data.content[0]


  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
  })})

  return (
    
    <Layout>
    <Header>
<title>Maff - Digital Solutions</title>
</Header>
      <Hero prop={content}/>
      <Container>
        <TextSpan prop={content.Paragraph1}/>
        <IconList prop={content}/>
      </Container>
      <WorkList prop={data}/>
    </Layout>
  )
}

export default Index;


