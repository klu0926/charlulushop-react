import style from './footer.module.scss'
import igIcon from '../../images/ig.png'
import youtubeIcon from '../../images/youtube.png'

function Footer() {
  return (
    <div className={style.footer}>
      <div className='RWD-container'>
        <span>CharluluStory 斷。捨。離</span>
        <div className={style.mediaContainer}>
          <p className={style.linkP}>
            <img
              className={style.mediaIcon}
              src={igIcon}
              alt='ig'
            />
            <a
              className={style.footerLink}
              href='https://instagram.com/charlotte_journalday'
              target='_blank'>
              charlotte_journalday
            </a>
          </p>
          <p className={style.linkP}>
            <img
              className={style.mediaIcon}
              src={youtubeIcon}
              alt='youtube'
            />
            <span>Charlulu Story</span>
            <a
              className={style.footerLink}
              href='https://www.youtube.com/@CharluluStory'
              target='_black'>
              web
            </a>
            <span>|</span>
            <a
              className={style.footerLink}
              href='https://m.youtube.com/@CharluluStory'
              target='_black'>
              mobile
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
