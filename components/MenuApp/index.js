
import { MenuAppStyle } from './styles';

const MenuApp = props => {
    const hasBackButton = !!props.showBack;  
    return (
        <MenuAppStyle>
        <div className='holder'>
            <div className='overlay'></div>
            <div className='menu'>
                <div className='button'>Copy</div>
            </div>
        </div>
        </MenuAppStyle>
    );
}


export default MenuApp; 