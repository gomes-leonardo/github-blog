import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  input {
    width: 100%;
    height: 2.625rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    padding: 0 0.75rem;
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const TitleSearchForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  align-items: center;
  p {
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-title']};
  }
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const Button = styled.button`
  cursor: pointer;
  background-color: unset;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
