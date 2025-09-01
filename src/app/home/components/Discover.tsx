import classNames from 'classnames/bind';
import styles from '../Section.module.scss';
const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('homepage-discover-content')}>
            <div className={cx('left-discover-content')}>
                <h1 className={cx('homepage-discover-title lg-text')}>The ideal solution for your business</h1>
                <p className={cx('homepage-discover-subtitle sm-text')}>
                    Get the world-class learning and development chosen by top organizations across the globe. All on
                    Coursera for Business.
                </p>
                <button className={cx('btnDiscover')}>Discover more courses for your business</button>
            </div>
            <div className={cx('right-discover-content')}>
                <div className={cx('homepage-discover-brand-logo')}>
                    <a className={cx('brand-href')}>
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/13nB6DdjBJdV5aWWWB5DbH/115574ebbc6de3dffd98daed665dc736/loreal.svg?auto=format%2Ccompress&dpr=1&w=60%25&h=18"></img>{' '}
                    </a>
                </div>
                <div className={cx('homepage-discover-brand-logo')}>
                    <a className={cx('brand-href')}>
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2aaUOe2Jitm1Z6OPdylXsL/37974ceb0982ccf2c6fabf3fa6bdb5bc/pandg.svg?auto=format%2Ccompress&dpr=1&w=60%25&h=40"></img>{' '}
                    </a>
                </div>
                <div className={cx('homepage-discover-brand-logo')}>
                    <a className={cx('brand-href')}>
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2gSh2ySvHF7nLxtb9dlQEt/764bae06b9276de25caa4ed11bf14000/tata.svg?auto=format%2Ccompress&dpr=1&w=60%25&h=37"></img>{' '}
                    </a>
                </div>
                <div className={cx('homepage-discover-brand-logo')}>
                    <a className={cx('brand-href')}>
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6cQLsEIdYwjlG4whpJ0bau/5cb01b12278ee726314800c15f08c5e2/DANONE_LOGO.png?auto=format%2Ccompress&dpr=1&w=60%25&h=36"></img>{' '}
                    </a>
                </div>
                <div className={cx('homepage-discover-brand-logo')}>
                    <a className={cx('brand-href')}>
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/46IDJ7jA1jOzKUcuJEdv9x/bccbe406253ab481290052d1580d7eae/Emirates_NBD_logo.png?auto=format%2Ccompress&dpr=1&w=60%25&h=30"></img>{' '}
                    </a>
                </div>
                <div className={cx('homepage-discover-brand-logo')}>
                    <a className={cx('brand-href')}>
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2jYSxpX0am6lmzOXiF01eb/b2dad4d9e4844a15e828990aa09b6377/Reliance_logo-2.svg?auto=format%2Ccompress&dpr=1&w=60%25&h=30"></img>{' '}
                    </a>
                </div>
                <div className={cx('homepage-discover-brand-logo')}>
                    <a className={cx('brand-href')}>
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1GFMf2tN2JubXPXodUfEhU/f60a309a58fd4a5e750f0497e24a52ab/logo-capgemini.svg?auto=format%2Ccompress&dpr=1&w=60%25&h=30"></img>{' '}
                    </a>
                </div>
                <div className={cx('homepage-discover-brand-logo')}>
                    <a className={cx('brand-href')}>
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1Td6rChmrhf755FaNcHMkw/7f172851005dc6275667c667ffa2678a/logo-petrobras.svg?auto=format%2Ccompress&dpr=1&w=60%25&h=30"></img>{' '}
                    </a>
                </div>
                <div className={cx('homepage-discover-brand-logo')}>
                    <a className={cx('brand-href')}>
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7ynjohQJbi7h24Qk5uUyPW/399503cb97a2775554f28921721d6fd1/General_Electric_logo.svg?auto=format%2Ccompress&dpr=1&w=60%25&h=30"></img>{' '}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Discover;
