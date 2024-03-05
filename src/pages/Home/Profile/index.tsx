/* eslint-disable react-hooks/rules-of-hooks */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  Card,
  CardContainer,
  FooterContainer,
  ProfileContainer,
  SearchFormContainer,
  StyledLink,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import SearchForm from './components/SearchForm'
import { useContext } from 'react'
import { ApiContext } from '../../../contexts/ApiContext'
import { useFormatFollowers } from '../../../hooks/useFormatFollowers'
import { useFormatLastUpdated } from '../../../hooks/useFormatLastUpdate'

const Profile = () => {
  const { repo, user } = useContext(ApiContext)

  return (
    <div>
      <ProfileContainer>
        <img src={user?.avatar_url} alt="" />
        <div>
          <header>
            <h1>{user?.name}</h1>
            <a
              href={`https://github.com/${user?.login}`}
              target="_blank"
              rel="noreferrer"
            >
              GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>
          <main>
            <p>{user?.bio}</p>
          </main>
          <FooterContainer>
            <footer>
              <a
                href={`https://github.com/${user?.login}`}
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <FontAwesomeIcon icon={faGithub} /> {user?.login}
              </a>
            </footer>
            <footer>
              <a style={{ cursor: 'auto' }}>
                <FontAwesomeIcon icon={faBuilding} /> {user?.company}
              </a>
            </footer>
            <footer>
              <a style={{ cursor: 'auto' }}>
                <FontAwesomeIcon icon={faUser} />{' '}
                {useFormatFollowers(Number(user?.followers))}
              </a>
            </footer>
          </FooterContainer>
        </div>
      </ProfileContainer>
      <SearchFormContainer>
        <SearchForm />
      </SearchFormContainer>

      <CardContainer>
        {repo?.map((repo, index) => (
          <StyledLink key={index} to={'/post/'}>
            <Card>
              <div>
                <h1>{repo.name}</h1>
                <span>{useFormatLastUpdated(repo.updated_at)}</span>
              </div>
              <p>{repo.description}</p>
            </Card>
          </StyledLink>
        ))}
      </CardContainer>
    </div>
  )
}

export default Profile
