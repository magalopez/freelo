import React from 'react';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Categories from './Categories';
import Content from './Content.js'


export default function (){
    return (
        <>
            <Header/>
            <Categories/>
            <NavBar/>
            <Content/>
            <Footer/>
        </>
    )
}
