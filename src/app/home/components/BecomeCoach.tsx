import classNames from 'classnames/bind';
import styles from '../Section.module.scss';
const cx = classNames.bind(styles);

function BecomeCoach() {
    return (
        <div className={cx('homepage-becomecoach-content')}>
            <div className={cx('left-becomecoach-content')}>
                <div className={cx('image-becomecoach')}></div>
            </div>
            <div className={cx('right-becomecoach-content')}>
                <h1 className={cx('homepage-becomecoach-title lg-text')}>Become a coach</h1>
                <p className={cx('homepage-becomecoach-subtitle sm-text')}>
                    Instructors from around the world teach millions of students on Udemy. We provide the tools and
                    skills to teach what you love.
                </p>
                <button className={cx('btnBecomecoach')}>Become Our Coach</button>
            </div>
        </div>
    );
}

export default BecomeCoach;
