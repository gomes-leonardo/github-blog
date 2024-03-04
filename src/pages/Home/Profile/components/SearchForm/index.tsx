// import { SearchFormProps } from './type'

import { SearchFormContainer, TitleSearchForm } from './styles'

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <TitleSearchForm>
        <p>Publicações</p>
        <span>7 Publicações</span>
      </TitleSearchForm>
      <input placeholder="Buscar conteúdo"></input>
    </SearchFormContainer>
  )
}

export default SearchForm
