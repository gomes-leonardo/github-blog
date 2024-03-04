import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  CardInfo,
  CodeExample,
  FirstTopic,
  FooterContainer,
  PostInfoContainer,
  SecondTopic,
} from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons/faArrowCircleLeft'
import { Link } from 'react-router-dom'

const PostInfo = () => {
  return (
    <div>
      <PostInfoContainer>
        <div>
          <header>
            <Link to={'/'}>
              <FontAwesomeIcon icon={faArrowCircleLeft} /> VOLTAR
            </Link>
            <a href="">
              GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>
          <main>
            <h1>JavaScript data types and data structures</h1>
          </main>
          <FooterContainer>
            <footer>
              <a href="#">
                {' '}
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
            </footer>
            <footer>
              <a href="#">
                <FontAwesomeIcon icon={faCalendarDay} /> Há 1 dia
              </a>
            </footer>
            <footer>
              <a href="#">
                <FontAwesomeIcon icon={faComment} /> 5 Comentários
              </a>
            </footer>
          </FooterContainer>
        </div>
      </PostInfoContainer>
      <CardInfo>
        <FirstTopic>
          {' '}
          <p>
            <span>
              Programming languages all have built-in data structures, but these
              often differ from one language to another
            </span>
            . This article attempts to list the built-in data structures
            available in JavaScript and what properties they have. These can be
            used to build other data structures. Wherever possible, comparisons
            with other languages are drawn.
          </p>
        </FirstTopic>
        <SecondTopic>
          {' '}
          <span>Dynamic typing</span> <br /> JavaScript is a loosely typed and
          dynamic language. Variables in JavaScript are not directly associated
          with any particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </SecondTopic>
        <CodeExample>
          {' '}
          <pre>
            <code>
              {`
             let foo = 42;   // foo is now a number
             foo = ‘bar’;    // foo is now a string
             foo = true;     // foo is now a boolean
              `}
            </code>
          </pre>
        </CodeExample>
      </CardInfo>
    </div>
  )
}

export default PostInfo
