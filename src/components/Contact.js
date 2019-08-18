import React,{Fragment} from 'react'

const Contact = () => {
    return (
        <Fragment>
            <section class="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: "url('images/bg_3.jpg')"}} data-stellar-background-ratio="0.5">
<div class="overlay"></div>
<div class="container">
<div class="row no-gutters slider-text js-fullheight align-items-end">
<div class="col-md-9 ftco-animate pb-5">
<h2 class="mb-3 bread">Contact Me</h2>
<p class="breadcrumbs"><span class="mr-2"><a href="/home">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>About me <i class="ion-ios-arrow-forward"></i></span></p>
</div>
</div>
</div>
</section>
<section class="contact-section bg-primary">
<div class="container">
<div class="row no-gutters d-flex contact-info">
<div class="col-md-3 d-flex">
<div class="align-self-stretch box p-4 py-md-5 text-center">
<div class="icon d-flex align-items-center justify-content-center">
<span class="icon-map-signs"></span>
</div>
<h3 class="mb-4">Address</h3>
<p>J-7/137<br/>Rajouri Garden,<br/>New Delhi-110027,<br/>India</p>
</div>
</div>
<div class="col-md-3 d-flex">
<div class="align-self-stretch box p-4 py-md-5 text-center">
<div class="icon d-flex align-items-center justify-content-center">
<span class="icon-phone2"></span>
</div>
<h3 class="mb-4">Contact Number</h3>
<p><a href="tel://1234567920">+91 9818533500</a></p>
</div>
</div>
<div class="col-md-3 d-flex">
<div class="align-self-stretch box p-4 py-md-5 text-center">
<div class="icon d-flex align-items-center justify-content-center">
<span class="icon-paper-plane"></span>
</div>
<h3 class="mb-4">Email Address</h3>
<p><a href="https://colorlib.com/cdn-cgi/l/email-protection#b9d0d7dfd6f9c0d6cccbcad0cddc97dad6d4"><span class="__cf_email__" data-cfemail="761f181019360f190304051f02135815191b">kanishkgupta2000@gmail.com</span></a></p>
</div>
</div>
<div class="col-md-3 d-flex">
<div class="align-self-stretch box p-4 py-md-5 text-center">
<div class="icon d-flex align-items-center justify-content-center">
<span class="icon-globe"></span>
</div>
<h3 class="mb-4">Website</h3>
<p><a href="#">yoursite.com</a></p>
</div>
</div>
</div>
</div>
</section>
<section class="ftco-section ftco-no-pt ftco-no-pb contact-section">
<div class="container-fluid px-0">
<div class="row no-gutters block-9">
<div class="col-md-6 order-md-last d-flex">
<form action="#" class="bg-light p-5 contact-form">
<div class="form-group">
<input type="text" class="form-control" placeholder="Your Name"/>
</div>
<div class="form-group">
<input type="text" class="form-control" placeholder="Your Email"/>
</div>
<div class="form-group">
<input type="text" class="form-control" placeholder="Subject"/>
</div>
<div class="form-group">
<textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
</div>
<div class="form-group">
<input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
</div>
</form>
</div>
<div class="col-md-6 d-flex">
<div id="map" class="bg-white"></div>
</div>
</div>
</div>
</section>
        </Fragment>
    )
}

export default Contact
