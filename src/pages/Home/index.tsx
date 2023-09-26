import { Container, Content } from './styles';
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom"

function Home() {
  const [name, setName] = useState('')
  const [searchParams] = useSearchParams()
  

  useEffect(() => {
    const params = searchParams.get('name')
    setName(params?.split('-').join(' ') ?? '')
    window.localStorage.setItem('name', name)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Content>
        <h1>Home</h1>
      </Content>
    </Container>
  );
}

export default Home;
