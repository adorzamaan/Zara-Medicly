import React from 'react';
import useTitle from '../../CustomHook/useTitle';

const Profile = () => {
    useTitle('Profile')
    return (
        <div>
            <h3 className='text-center py-6 font-bold'>Personal Info </h3>
        </div>
    );
};

export default Profile;