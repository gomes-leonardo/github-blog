import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  max-width: 864px;
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  gap: 2rem;
  margin: 0 auto;
  margin-top: -5.8rem;
  z-index: 999;
  position: absolute;
  left: 0;
  right: 0;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    font-size: 0.775rem;
  }

  a:hover {
    text-decoration: underline;
  }

  h1 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.8rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-span']};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`

export const CardInfo = styled.section`
  width: 800px;
  margin: 6rem auto;

  z-index: 999;
  position: absolute;
  left: 0;
  right: 0;
`

export const FirstTopic = styled.div`
  margin-bottom: 1.25rem;

  span {
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
  p {
    color: ${(props) => props.theme['base-text']};
  }
`

export const SecondTopic = styled.div`
  margin-bottom: 1.25rem;

  p {
    color: ${(props) => props.theme['base-text']};
  }
  span {
    color: ${(props) => props.theme.blue};
    cursor: pointer;
  }

  span:hover {
    text-decoration: underline;
  }
`
export const CodeExample = styled.div`
  width: 800px;
  background-color: ${(props) => props.theme['base-post']};
  padding: 20px;
  border-radius: 1px;
  margin-bottom: 0.5rem;
  border: 2.5px solid transparent;
  cursor: pointer;
`
