<template>
    <mdb-navbar class="fixed-top mt-0 mb-10" expand="large" dark color="info">
        <mdb-navbar-brand to="/">
            IDE-EDC 120
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav left>
                <mdb-nav-item to="/" active>Home</mdb-nav-item>
                <mdb-nav-item to="/overview">Overview</mdb-nav-item>
                <mdb-nav-item to="/unit1">Unit 1</mdb-nav-item>
                <mdb-nav-item to="/unit2">Unit 2</mdb-nav-item>
                <mdb-nav-item to="/unit3">Unit 3</mdb-nav-item>
                <mdb-nav-item to="/unit4">Unit 4</mdb-nav-item>
                <mdb-nav-item to="/unit5">Unit 5</mdb-nav-item>
                <mdb-nav-item to="/unit6">Unit 6</mdb-nav-item>
            </mdb-navbar-nav>
            <form class="form-inline my-1 text-right">
                <div class="md-form form-sm mr-sm-2 my-0">
                    <input class="form-control form-control-sm mr-sm-2 mb-0" type="text" placeholder="Search"
                           aria-label="Search">
                </div>
                <button class="btn btn-outline-white btn-sm my-0" type="submit">Search</button>
            </form>
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script>
    import { /*mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer,*/ mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
    export default {
        name: 'Navbar',
        components: {
            mdbNavbar,
            mdbNavbarBrand,
            mdbNavbarToggler,
            mdbNavbarNav,
            mdbNavItem,
            //mdbContainer,
            //mdbDropdown,
            //mdbDropdownToggle,
            //mdbDropdownMenu,
            //mdbDropdownItem
        }
    }
</script>
<style>
</style>
