import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/056dd7d78bb48879c8d057fe948e2f48~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=d667df8b&x-expires=1754550000&x-signature=x3Hyw0yCaY%2BeeROKfQC5%2BEza7pY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt="Linh"></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn Linh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}></FontAwesomeIcon>
                </h4>
                <span className={cx('userName')}>nguyenlinh</span>
            </div>
        </div>
    );
}

export default AccountItem;
