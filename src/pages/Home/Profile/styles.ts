import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProfileContainer = styled.div`
  max-width: 864px;
  width: 100%;
  height: 212px;
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

  img {
    border-radius: 10px;
    width: 148px;
    height: 148px;
  }

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
    text-decoration: none;
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
  a:nth-child(1) {
    cursor: pointer;
  }
`

export const SearchFormContainer = styled.div`
  width: 864px;
  margin: 0 auto;
  margin-top: 12rem;
  z-index: 999;
  position: absolute;
  left: 0;
  right: 0;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  width: 864px;
  margin: 18rem auto;
  z-index: 999;
  position: absolute;
  left: 0;
  right: 0;
`
export const Card = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  border: 2.5px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-height: 160px;

  &:hover {
    border: 2.5px solid ${(props) => props.theme['base-border']};
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    align-items: center;
  }
  h1 {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    max-width: 250px;
  }
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    margin-bottom: 5.5%;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
