import { useEffect, useState } from 'react'
import { PrimaryImageButton } from './button/button';
import { useRouter } from 'next/router';
import { AiOutlineLogout, AiFillPlaySquare } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import Profile from '../../public/Profile.png';
import Logo from '../../public/logo.png';
import Link from 'next/link';
import Image from 'next/image';

const Topnav = () => {

    const [user, setUser] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    // const router = useRouter();
    // const { userProfile, addUser, removeUser } = useAuthStore();

    // useEffect(() => {
    //     setUser(userProfile);
    // }, [userProfile]);

    // const handleSearch = (e: { preventDefault: () => void }) => {
    //     e.preventDefault();

    //     if (searchValue) {
    //         router.push(`/search/${searchValue}`);
    //     }
    // };

    return (
        <header>
            <div className=''>
                <Link href='/'>
                    <Image
                        className='logo'
                        src={Logo}
                        alt='Naija Reports logo'
                    />
                </Link>
                <form
                // onSubmit={handleSearch}
                >
                    <input
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder='Search accounts and videos'
                    />
                    <button
                    // onClick={handleSearch}
                    >
                        <BiSearch />
                    </button>
                </form>
            </div>

            <div>
                <PrimaryImageButton> <AiFillPlaySquare /><span>ADD POST</span> </PrimaryImageButton>
                {user ? (
                    <div>
                        <Link href='/upload'>
                            <button >
                                <IoMdAdd />{' '}
                                <span>Upload </span>
                            </button>
                        </Link>
                        {user.image && (
                            <Link href={`/profile/${user._id}`}>
                                <div>
                                    <Image
                                        src={Profile}
                                        alt='user'
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            </Link>
                        )}
                        <button
                            type='button'
                            onClick={() => {
                                googleLogout();
                                removeUser();
                            }}
                        >
                            <AiOutlineLogout />
                        </button>
                    </div>
                ) : (
                    <button>
                        Sign out
                    </button>
                    // <GoogleLogin
                    //     onSuccess={(response) => createOrGetUser(response, addUser)}
                    //     onError={() => console.log('Login Failed')}
                    // />
                )}
            </div>
        </header>
    )
}

export default Topnav