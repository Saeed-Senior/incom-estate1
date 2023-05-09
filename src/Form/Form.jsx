import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './form.sass'
import { useState } from 'react';
import InputMask from 'react-input-mask';


function Form() {

   const [loader, setLoader] = useState(false);
   const [thanks, setThanks] = useState(false);
   const [value1, setValue1] = useState('');
   const [value2, setValue2] = useState('');
   const [value3, setValue3] = useState('');
   const [valid, setValid] = useState(false);

   const { t } = useTranslation();

   async function sendEmail(e) {
      e.preventDefault();
   
      const nameField = e.target.elements.from_name;
      const emailField = e.target.elements.from_email;
      const phoneField = e.target.elements.from_phone;
   
      const name = nameField.value.trim();
      const email = emailField.value.trim();
      const phone = phoneField.value.trim();
   
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\+?\d{1,3}\s*\(\d{3}\)\s*\d{3}(\s|-)*\d{2}(\s|-)*\d{2}$/;
   
      if (!name) {
         setValid(true);
         nameField.focus();
         return;
      }
   
      if (!emailRegex.test(email)) {
         setValid(true);
         emailField.focus();
         return;
      }
   
      if (!phoneRegex.test(phone)) {
         setValid(true);
         phoneField.focus();
         return;
      }
   
      setLoader(true);
      await emailjs.sendForm('service_sj6hphq', 'template_sjvecjg', e.target, 'G8IN3sNszxc3Rb4Kf');
      setValue1('');
      setValue2('');
      setValue3('');
      setLoader(false);
      setThanks(true);
   }

   function clickHandler() {
      setThanks(false);
      setValid(false);
   }

   return(
      <>
      {thanks && <>
         <div onClick={clickHandler} className='draft'></div>
         <div className='thanks'>{t('thanks')}</div>
      </>}
      {valid && <>
         <div onClick={clickHandler} className='draft2'></div>
         <div className='thanks'>{t('not-valid')}</div>
      </>}
      <div className='wrap'>
         <form className="form" onSubmit={sendEmail}>
         <h3 className="form__title">{t('form-title')}</h3>
         <p className="form__sub-title">{t('form-sub-title')}</p>
         <select defaultValue='' name='question' className="form__input">
            <option disabled value=''>{t('form-select1')}</option>
            <option>{t('form-select2')}</option>
            <option>{t('form-select3')}</option>
            <option>{t('form-select4')}</option>
         </select>
         <input value={value1} onChange={(e) => setValue1(e.target.value)} placeholder={t('name')} className={valid ? "form__input valid" : "form__input"} type="text" name="from_name" id="nameFrom"/>
         <input value={value2} onChange={(e) => setValue2(e.target.value)} placeholder='*E-mail' className={valid ? "form__input valid" : "form__input"} type="text" name="from_email" id="nameFrom"/>
         <InputMask value={value3} onChange={(e) => setValue3(e.target.value)} mask="+9 (999) 999-99-99" maskChar=" " placeholder="+7 (___) ___-__-__" className={valid ? "form__input valid" : "form__input"} type="tel" name="from_phone" id="phoneFrom" />
         <button className='form__button'>
            {loader ? <span className='loader'></span> : (
            t('form-button'))}
         </button>
      </form>
      </div>
      </>
   )
}

export default Form;