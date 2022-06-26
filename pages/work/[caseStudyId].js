import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import { Layout } from '../../components/layout/Layout';
import { Hero } from '../../components/hero/Hero'
import { TextSpan } from '../../components/textSpan/TextSpan'
import { ImgSpan } from '../../components/imgSpan/ImgSpan'
import { IconList } from '../../components/iconList/IconList'
import portfolioContent from '../../portfolioContent.json'
import { Container } from '../../components/container/Container';
import AOS from 'aos'
import Header from 'next/head'

const CaseStudy = () => {
  const router = useRouter();
  const caseStudyId = router.query.caseStudyId
  const data = portfolioContent.data[0]
  const [content, setContent] = useState(portfolioContent.data[0].content[2])

useEffect(() => {

  // AOS fix for links in lower positions
  window.scrollTo({
    top: 0,
    behavior: 'instant'
})

  data.content.map(props => {
    if (caseStudyId === props.slug) {
      setContent(portfolioContent.data[0].content[props.id])
      }
    })


  var aosAnimate = document.getElementsByClassName("aos-animate");
  while (aosAnimate.length)
  aosAnimate[0].classList.remove("aos-animate");
  AOS.init()
})

  return (
    <Layout>
            <Header>
    <title>Maff - {content.hero.mainHeading}</title>
    </Header>
      <Hero prop={content}/>
      <Container>
        <TextSpan prop={content.Paragraph1}/>
        <TextSpan prop={content.Paragraph2}/>
        <ImgSpan prop={content}/>
        <TextSpan prop={content.Paragraph3}/>
        <IconList prop={content} />
        <TextSpan prop={content.Year}/>
      </Container>
    </Layout>
  )
}
export default CaseStudy