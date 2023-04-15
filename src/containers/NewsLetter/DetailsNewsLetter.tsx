import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  DetailsNewsLetterContainer,
  EmailInput,
  FormDetailsNewsLetter,
  HeaderDetails,
  InnerContainer,
  SubHeaderDetails,
  SubscribeButton,
  TextDetails,
} from './DetailsNewsLetterStyle';

const DetailsNewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  return (
    <DetailsNewsLetterContainer>
      <InnerContainer>
        <HeaderDetails>Hey, wait...</HeaderDetails>
        <SubHeaderDetails>Subscribe to our newsletter!</SubHeaderDetails>
        <TextDetails>
          You will never miss our podcasts, latest news, etc. Our newsletter is
          once a weel, every wednesday.
        </TextDetails>
      </InnerContainer>
      <AnimatePresence>
        <FormDetailsNewsLetter>
          <EmailInput
            type="text"
            placeholder="your email"
            onChange={handleEmailChange}
            value={email}
            animate={email.length ? { width: 300 } : { width: 135 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <SubscribeButton>
            <span>Subscribe</span>
          </SubscribeButton>
        </FormDetailsNewsLetter>
      </AnimatePresence>
    </DetailsNewsLetterContainer>
  );
};

export default DetailsNewsLetter;
