import classNames from 'classnames/bind';
import styles from '../Section.module.scss';
const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('banner-content')}>
            <div className={cx('left-content')}>
                <h1 className={cx('head-title')}>Coach, Mentor and more</h1>
                <p className={cx('sub-title')}>
                    Start, switch, or advance your career with more than 5,800 courses, Professional Certificates, and
                    degrees from world-class universities and companies.
                </p>
                <div className={cx('homepage-button')}>
                    <button className={cx('btnJoin')}>Join for free</button>
                    <button className={cx('btnTry')}>Get Free Trial</button>
                </div>
            </div>
            <div className={cx('right-content')}>
                <div className={cx('image-background')}></div>
            </div>
        </div>
    );
}

export default Banner;
