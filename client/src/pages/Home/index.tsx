import React from 'react';
import { HomeContainer } from './home.styles';
import Banner from '../../components/Banner';
import PeopleList from '../../components/PeopleList'
import { Nav } from '../../components/Header/Nav';
// import { SearchBar } from '../../components/SearchBar/SearchBar';

const HomePage = () => {
    console.log(process.env.REACT_APP_API_URL)
    return (
        <HomeContainer>
            <Nav/>
            <Banner title={"Star Wars Characters"} requireBack={false} />
            {/* <SearchBar/> */}
            <PeopleList />
        </HomeContainer>
    );
}

export default HomePage