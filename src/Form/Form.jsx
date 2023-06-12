import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './form.sass'
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function Form() {

   const { t } = useTranslation();

   const [loader, setLoader] = useState(false);
   const [thanks, setThanks] = useState(false);
   const [value1, setValue1] = useState('');
   const [value2, setValue2] = useState('');
   const [value3, setValue3] = useState('');
   const [valid, setValid] = useState(false);

   async function sendEmail(e) {
      e.preventDefault();
   
      const nameField = e.target.elements.from_name;
      const emailField = e.target.elements.from_email;
   
      const name = nameField.value.trim();
      const email = emailField.value.trim();
   
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
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
         <a href='https://wa.me/+971521063357' className='form__whatsapp-btn'><img src='img/form/wa.png' alt='WhatsApp'/></a>
         <p className="form__sub-title">{t('form-sub-title2')}</p>
         <select defaultValue='' name='question' className="form__input">
            <option disabled value=''>{t('form-select1')}</option>
            <option>{t('form-select2')}</option>
            <option>{t('form-select3')}</option>
            <option>{t('form-select4')}</option>
         </select>
         <input value={value1} onChange={(e) => setValue1(e.target.value)} placeholder={t('name')} className={valid ? "form__input valid" : "form__input"} type="text" name="from_name" id="nameFrom"/>
         <input value={value2} onChange={(e) => setValue2(e.target.value)} placeholder='*E-mail' className={valid ? "form__input valid" : "form__input"} type="text" name="from_email" id="nameFrom"/>
         <PhoneInput placeholder={t('enter-phone')} value={value3} onChange={() => setValue3(value3)} type="tel" name="from_phone" id="phoneFrom"/>
         <p className="form__sub-title">{t('form-sub-title3')}</p>
         <div class="request__checkboxes">
                        <input value="whatsapp" id="message1" class="request__checkbox1 request__checkbox" type="radio" name="from_messanger"/>
                        <label class="request__label1" for="message1"></label>
                        <input value="telegram" id="message2" class="request__checkbox2 request__checkbox" type="radio" name="from_messanger"/>
                        <label class="request__label2" for="message2"></label>
                        <input value="phone" id="message3" class="request__checkbox3 request__checkbox" type="radio" name="from_messanger"/>
                        <label class="request__label3" for="message3"></label>
                     </div>
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