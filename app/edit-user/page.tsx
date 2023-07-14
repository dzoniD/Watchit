import styles from './page.module.css'
import Image from 'next/image';
import img from './edit.jpeg'

export default async function EditUser() {

  

  return (
    <div className={styles.container}>
     <h2 className={styles.username}>User name</h2>
     <div className={styles.profile__icon}>
      <Image alt='profile-icon' src={img} className={styles.img}>
        </Image> 
      </div>

      <div className={styles.inputField}>
            <label htmlFor="username" className={styles.label}>Username</label>
            <input type="text"  name="username" id={styles.input} />
      </div>
      <div className={styles.inputField}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="text" value={'test@test.com'} name="email" id={styles.input} />
      </div>
      <div className={styles.inputField}>
            <label htmlFor="phone"  className={styles.label}>Phone</label>
            <input type="tel" name="phone" id={styles.input} />
      </div>
      <div className={styles.inputField}>
            <label htmlFor="gender" className={styles.label}>Gender</label>
            <input type="text" name="gender" id={styles.input} />
      </div>
      <div className={styles.inputField}>
            <label htmlFor="dob" className={styles.label}>Date of Birth</label>
            <input type="date" name="dob" id={styles.input} />
      </div>
      

      <button className={styles.button}>Save</button>

    </div>
  )
}
