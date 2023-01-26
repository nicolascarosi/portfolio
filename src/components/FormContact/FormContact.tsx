import { Button } from 'components/Button'
import { ChangeEvent, FormEvent, useState } from 'react';
import { Wrapper } from 'utils'
import { StyledFormContact, StyledFormContactContainer } from './FormContact.styles'

const FormContact = () => {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [disabledSubmit, setDisabledSubmit] = useState(true);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = e.target.value;
    if (message && value) setDisabledSubmit(false);
    else setDisabledSubmit(true);

    setName(value);
  };

  const handleChangeMessage = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = e.target.value;
    if (name && value) setDisabledSubmit(false);
    else setDisabledSubmit(true);

    setMessage(value);
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!name || !message) return;

      window.open(`mailto:carosinicolas@gmail.com?subject=${name}&body=${message}`, '_blank')
  }

  return (
    <StyledFormContact id="contact">
      <Wrapper>
        <div className="form-header">
          <h3>I occasionally take on freelance opportunities.</h3>
          <p>Have an exciting project where you need some help?</p>
          <p>Send me over a message</p>
        </div>
        <StyledFormContactContainer id="contactForm" onSubmit={handleOnSubmit}>
          <input name="name" placeholder='Enter your name...' onChange={handleChangeName}/>
          <textarea name="message" placeholder='Message' rows={10} onChange={handleChangeMessage}/>
          <Button color="primary" label="Send email" formId="contactForm" disabled={disabledSubmit}></Button>
        </StyledFormContactContainer>
      </Wrapper>
    </StyledFormContact>
  )
}

export { FormContact }
