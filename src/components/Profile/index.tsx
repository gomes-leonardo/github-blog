import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FooterContainer, ProfileContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Profile = () => {
  return (
    <ProfileContainer>
      <img src="/src/assets/profile.jpg" alt="" />
      <div>
        <header>
          <h1>Leonardo Gomes</h1>
          <a href="">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            minima obcaecati adipisci dolores voluptas ex, id laboriosam quasi
            et debitis earum nostrum. Excepturi id dolor quaerat, reprehenderit
            placeat earum laudantium?
          </p>
        </main>
        <FooterContainer>
          <footer>
            <span>
              {' '}
              <FontAwesomeIcon icon={faGithub} /> Github
            </span>
          </footer>
          <footer>
            <span>
              <FontAwesomeIcon icon={faBuilding} /> Empresa
            </span>
          </footer>
          <footer>
            <span>
              <FontAwesomeIcon icon={faUser} /> Seguidores
            </span>
          </footer>
        </FooterContainer>
      </div>
    </ProfileContainer>
  )
}

export default Profile
