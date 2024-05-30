import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const UserInfo: React.FC = () => {
    const phoneNumber = useSelector((state: RootState) => state.user.phoneNumber);
    const loggedIn = useSelector((state: RootState) => state.user.loggedIn);

    return (
        <div>
            {loggedIn ? <p>User Phone Number: {phoneNumber}</p> : <p>Please login {loggedIn}</p>}
        </div>
    );
};

export default UserInfo;
