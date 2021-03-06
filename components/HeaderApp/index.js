
import { HeaderAppStyle } from './styles';
import { Wrapper } from 'owenmerry-designsystem';
import Link from 'next/link';

const HeaderApp = props => {
    const hasBackButton = !!props.showBack;  
    return (
        <HeaderAppStyle>
        <Wrapper>
        <div className='content'>
            <div className='back'>
                {hasBackButton && (
                <Link href={props.backUrl}>
                    <svg width="19px" height="29px" viewBox="0 0 19 29" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>Path 2</title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                            <g id="Password-Chat" transform="translate(-89.000000, -27.000000)" stroke="#FFFFFF" strokeWidth="5">
                                <polyline id="Path-2" points="105.5 53.5 91.5 41.02 105.5 29.5"></polyline>
                            </g>
                        </g>
                    </svg>
                </Link>
                )}
            </div>
            <div className='center'>{props.title}</div>
            <div className='buttons'>
            <Link href='/room'>
                <div className='button'>
                <span className='svg-box'>
                <svg width="18px" height="24px" viewBox="0 0 18 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <title>lock-alt-1-lock</title>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Password-Chat" transform="translate(-789.000000, -29.000000)" fill="#FFFFFF" fillRule="nonzero">
                            <g id="lock-alt-1-lock" transform="translate(789.000000, 29.000000)">
                                <g id="Group">
                                    <path d="M15,24 L3,24 C1.34314575,24 0,22.6568542 0,21 L0,15 C0,13.3431458 1.34314575,12 3,12 L15,12 C16.6568542,12 18,13.3431458 18,15 L18,21 C18,22.6568542 16.6568542,24 15,24 Z M3,14 C2.44771525,14 2,14.4477153 2,15 L2,21 C2,21.5522847 2.44771525,22 3,22 L15,22 C15.5522847,22 16,21.5522847 16,21 L16,15 C16,14.4477153 15.5522847,14 15,14 L3,14 Z" id="Shape"></path>
                                    <path d="M14,14 C13.4477153,14 13,13.5522847 13,13 L13,6 C13,3.790861 11.209139,2 9,2 C6.790861,2 5,3.790861 5,6 L5,13 C5,13.5522847 4.55228475,14 4,14 C3.44771525,14 3,13.5522847 3,13 L3,6 C3,2.6862915 5.6862915,0 9,0 C12.3137085,0 15,2.6862915 15,6 L15,13 C15,13.2652165 14.8946432,13.5195704 14.7071068,13.7071068 C14.5195704,13.8946432 14.2652165,14 14,14 Z" id="Path"></path>
                                    <path d="M9,19 C7.8954305,19 7,18.1045695 7,17 C7,15.8954305 7.8954305,15 9,15 C10.1045695,15 11,15.8954305 11,17 C11,18.1045695 10.1045695,19 9,19 Z" id="Path"></path>
                                    <path d="M9,21 C8.44771525,21 8,20.5522847 8,20 L8,18 C8,17.4477153 8.44771525,17 9,17 C9.55228475,17 10,17.4477153 10,18 L10,20 C10,20.5522847 9.55228475,21 9,21 Z" id="Path"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg> 
                </span>
                <span className='text-box'>Join Room</span>
                </div>
                </Link>
            </div>
            </div>
            </Wrapper>
        </HeaderAppStyle>
    );
}


export default HeaderApp; 