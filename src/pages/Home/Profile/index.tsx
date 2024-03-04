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
import { api } from '../../../lib/axios'
import { useEffect, useState } from 'react'

interface ProfileProps {
  avatar_url: string
  bio: string
  followers: string
  login: string
  company: string
  name: string
}

const Profile = () => {
  const [user, setUser] = useState<ProfileProps | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/users/gomes-leonardo`)
        setUser(response.data)
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  console.log(user)

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
                <FontAwesomeIcon icon={faUser} /> {user?.followers}
              </a>
            </footer>
          </FooterContainer>
        </div>
      </ProfileContainer>
      <SearchFormContainer>
        <SearchForm />
      </SearchFormContainer>
      <CardContainer>
        <StyledLink to={'/post/'}>
          <Card>
            <div>
              <h1>JavaScript data types and </h1>
              <span>Há 1 dia</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              libero ducimus molestias?
            </p>
          </Card>
        </StyledLink>
      </CardContainer>
    </div>
  )
}

export default Profile
