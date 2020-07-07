<template>
    <div>
        <mdb-navbar position="top" :toggler="false" color="info">
            <mdb-navbar-nav left>
                <mdb-icon icon="bars"
                          class="dark-grey-text"
                          size="2x"
                          @click.native="show = !show" />
            </mdb-navbar-nav>


            <form class="form-inline">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search">
            </form>
        </mdb-navbar>
        <!--/.Navbar-->
        <mdb-side-nav-2 v-model="show"
                        over
                        :data="navigation"
                        color="info">
            <div slot="header">
                <div class="p-5">
                    <h2 class="h2-responsive blue-text">IDE-EDC 120</h2><br/>
                    <img src="../assets/uniswa.gif"
                         class="img-fluid" />
                </div>
            </div>

        </mdb-side-nav-2>
     
        
    </div>
</template>

<script>
    import {
        mdbNavbar,
        //mdbNavItem,
        mdbNavbarNav,
        mdbSideNav2,
       // mdbBtn,
        mdbIcon
    } from "mdbvue";

    export default {
        components: {
            mdbNavbar,
            //mdbNavItem,
            mdbNavbarNav,
            mdbSideNav2,
            //mdbBtn,
            mdbIcon
        },
        data() {
            return {
                show: false,
               
            
                navigation: [
                    {
                        name: "Home",
                        icon: "home",
                        to: "/"
                    },

                    {                       
                        name: "Course Overview",
                        icon: "clipboard",
                        to:"/overview"
                    },

                    {
                        name: "UNITS",
                        icon: "bars",
                        children: [
                            {
                                name: "UNIT 1",
                                to: "/unit1"
                            },
                            {
                                name: "UNIT 2",
                                to: "/unit2"
                            },
                            {
                                name: "UNIT 3",
                                to: "/unit3"
                            },
                            {
                                name: "UNIT 4",
                                to: "/unit4"
                            },
                            {
                                name: "UNIT 5",
                                to: "/unit5"
                            },
                            {
                                name: "UNIT 6",
                                to: "/unit6"
                            }
                        ]
                    
                    }
 
                   
                ]
            };
        }
    };
</script>

<style scoped>
    .view {
        background: url("https://mdbootstrap.com/img/Photos/Others/img (52).jpg") no-repeat center center;
        background-size: cover;
        height: 100%;
        
    }

    .navbar i {
        cursor: pointer;
        color: white;
    }
    
</style>