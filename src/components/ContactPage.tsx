import React from 'react'
import styled from '@emotion/styled'
import Socials_Icons from './Socials_Icons'

const SectionContact = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    font-family: Colus, serif;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    width: 32rem;

    > p {
      display: hidden;
    }

    > input,
    textarea {
      background: none;
      border: solid thin var(--main-text-color);
      padding: 1em;
      margin-bottom: 1rem;
    }

    > button {
      font-family: Colus, serif;
      color: var(--main-bg-color);
      background-color: var(--main-text-color);
      border: none;
      margin: 0 auto;
      padding: 1em 4em;
      cursor: pointer;
    }
  }

  > div {
    margin-top: 4rem;
    border: 2px solid;
    padding: 2rem 4rem;
    color: var(--main-accent-color);

    > nav {
      > ul {
        > li {
          + li {
            margin-left: 2rem;
          }
        }
      }
    }
  }
`

const ContactPage: React.FC = () => {
  return (
    <SectionContact id="contact">
      <h2>Contact</h2>
      <form
        name="contact"
        action="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <p hidden>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <input type="text" name="name" placeholder="name: " />
        <input type="email" name="email" placeholder="email: " />
        <textarea name="message" cols={30} rows={10} placeholder="message: " />
        <button type="submit">Send</button>
      </form>
      <div>
        <Socials_Icons fontsize="2em" />
      </div>
    </SectionContact>
  )
}

export default ContactPage
