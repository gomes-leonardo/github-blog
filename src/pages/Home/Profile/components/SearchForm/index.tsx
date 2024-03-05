// import { SearchFormProps } from './type'

import { useContext, useState } from 'react'
import { Button, SearchFormContainer, TitleSearchForm } from './styles'
import { ApiContext } from '../../../../../contexts/ApiContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const SearchForm = () => {
  const { repo, searchProfile } = useContext(ApiContext)
  const [errorMessage, setErrorMessage] = useState('')
  const publications = () => {
    if (repo?.length) {
      return `${repo.length} Publicações`
    } else {
      return 'Nenhuma publicação disponível'
    }
  }

  const searchFormSchema = z.object({
    query: z.string(),
  })

  type SearchFormProps = z.infer<typeof searchFormSchema>
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormProps>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearch = async (data: SearchFormProps) => {
    const result = await searchProfile(data.query)

    if (result != null) {
      setErrorMessage('Nenhum resultado encontrado')
    } else {
      setErrorMessage('')
    }
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <TitleSearchForm>
        <p>Publicações</p>
        <span>{publications()}</span>
      </TitleSearchForm>
      <input placeholder="Buscar conteúdo" type="text" {...register('query')} />
      <Button type="submit" disabled={isSubmitting}>
        <FontAwesomeIcon
          style={{ position: 'absolute', right: '1rem', top: '2.7rem' }}
          size="lg"
          icon={faSearch}
          color="#112131"
        />
      </Button>
      {errorMessage && <p color="red">{errorMessage}</p>}
    </SearchFormContainer>
  )
}

export default SearchForm
