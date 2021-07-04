import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader'
import Table from '../../components/Table'

function Home() {
    return (
        <>
        <Header />
        <section>
            <SectionHeader />
            <Table />
        </section>
        <Footer />
        </>
    )
}

export default Home
