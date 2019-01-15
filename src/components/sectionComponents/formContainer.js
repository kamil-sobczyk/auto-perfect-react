import React from 'react';
import Input from './formComponents/input';
import Button from './formComponents/button';
import Header from './header';
import TextArea from './formComponents/textArea';

const FormContainer = () => (
  <div className='container'>
    <Header title='Napisz do nas' />
    <div className='row row-flex'>
      <form
        className='form-group'
        action='https://formspree.io/kamil.sobczyk@wp.pl'
        method='POST'
      >
        <Input type='hidden' name='_language' value='pl' />
        <Input type='hidden' name='_subject' value='New submission!' />
        <Input
          type={'text'}
          title={'Imię'}
          name={'imie'}
          placeholder={'Wpisz imię'}
        />
        <Input
          type={'text'}
          title={'Nazwisko'}
          name={'nazwisko'}
          placeholder={'Wpisz nazwisko'}
        />
        <Input
          type={'text'}
          title={'Numer telefonu'}
          name={'mobile'}
          placeholder={'Wpisz swój numer telefonu'}
        />
        <Input
          type={'email'}
          title={'E-mail'}
          name={'_replyto'}
          placeholder={'Wpisz swój email'}
        />
        <TextArea
          title={'Twoja wiadomość'}
          rows={6}
          name={'message'}
          placeholder={'Tu wpisz swoją wiadomość'}
        />
        <Button title='Wyślij wiadomość'>
          <input type='submit' value='Send' />
        </Button>
      </form>
    </div>
  </div>
);

export default FormContainer;
