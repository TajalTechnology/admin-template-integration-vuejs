<template>
    <div>
        <!-- Page Wrapper -->
        <div id="wrapper">
            <Sidebar>

            </Sidebar>


            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">

                <!-- Main Content -->
                <div id="content">
                    <Topbar>

                    </Topbar>


                    <!-- Begin Page Content -->
                    <div class="container-fluid">

                        <!-- Page Heading -->
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                        </div>
                        <slot></slot>
                       <slot name="para"> </slot>


                    </div>
                    <!-- /.container-fluid -->

                </div>
                <!-- End of Main Content -->
                <Footer></Footer>


            </div>
            <!-- End of Content Wrapper -->

        </div>
        <!-- End of Page Wrapper -->


    </div>
</template>

<script>

        import Sidebar from "./Partial/Sidebar";
    import Topbar from "./Partial/Topbar";
    import Footer from "./Partial/Footer";
    import "@/assets/vendor/fontawesome-free/css/all.min.css"
    // import "@/assets/vendor/fontawesome-free/css/brands.min.css"
    // import "@/assets/vendor/fontawesome-free/css/fontawesome.min.css"
    // import "@/assets/vendor/fontawesome-free/css/regular.min.css"
    // import "@/assets/vendor/fontawesome-free/css/solid.min.css"
    // import "@/assets/vendor/fontawesome-free/css/svg-with-js.min.css"
    // import "@/assets/vendor/fontawesome-free/css/v4-shims.min.css"
    import '@/assets/css/sb-admin-2.min.css'

    import '@/assets/vendor/jquery/jquery.min.js'
    import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
    import '@/assets/vendor/jquery-easing/jquery.easing.min.js'
    // import '@/assets/js/sb-admin-2.min.js'
    // import '@/assets/vendor/chart.js/Chart.min.js'
    // import '@/assets/js/demo/chart-area-demo.js'
    // import '@/assets/js/demo/chart-pie-demo.js'

    export default {
        name: "Index_layout",
        components:{
            Sidebar,
            Topbar,
            Footer

        }
    }
</script>

<style scoped>

</style>