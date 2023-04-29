<script>
    export let data
    const {testimonial} = data
    import { toasts, ToastContainer, FlatToast, BootstrapToast }  from "svelte-toasts";
	import Testimonial from "../../component/Testimonial.svelte";
	import Client from "../../component/Client.svelte";

  

	const showToast = () => {
    const toast = toasts.add({
      title: 'Success',
      description: 'Form submitted successfully',
      duration: 3000, // 0 or negative to avoid auto-remove
      placement: 'top-right',
	  showProgress: true,
      type: 'success',
      theme: 'light',
      onClick: () => {},
      onRemove: () => {},
      // component: BootstrapToast, // allows to override toast component/template per toast
    });

  };

  // toast.remove()
    const handleSubmit = async () => {
        showToast()
    }
</script>
<svelte:head>
    <title>Contact</title>
</svelte:head>
<section class="contact section-padding">
    <div class="container">
      <div class="row mb-45">
        <div class="col-md-12">
          <h6 class="wow" data-splitting="">
            Get in touch
          </h6>
          <h1 class="wow" data-splitting="">
            Contact Details
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-45">
          <div class="item">
            <div class="wrap-block">
              {" "}
              <span class="icon et-phone" />
              <div class="text-block">
                <h5>Phone</h5>
                <p>+234 902 066 9843</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="wrap-block">
              {" "}
              <span class="icon et-map-pin" />
              <div class="text-block">
                <h5>Address</h5>
                <p>Port Harcourt Rivers State, Nigeria</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="wrap-block">
              {" "}
              <span class="icon et-notebook" />
              <div class="text-block">
                <h5>E-Mail</h5>
                <p>developerexcela@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5 offset-md-1">
          <h5>Get in touch!</h5>
          <form
            on:submit={handleSubmit}
            class="contact__form"
            action="https://duruthemes.com/demo/html/nils/nils-light/mail.php"
          >
            <!-- Form message -->
            <div class="row">
              <div class="col-12">
                <div
                  class="alert alert-success contact__msg"
                  style='display:none'
                  role="alert"
                >
                  {" "}
                  Your message was sent successfully.{" "}
                </div>
              </div>
            </div>
            <!-- Form elements -->
            <div class="row ">
              <div class="col-md-12 form-group border">
                <input
                  name="name"
                  type="text"
                  placeholder="Name *"
                />
              </div>
              <div class="col-md-6 form-group border">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                />
              </div>
              <div class="col-md-6 form-group border">
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone *"
                />
              </div>
              <div class="col-md-12 form-group border">
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject *"
                />
              </div>
              <div class="col-md-12 form-group border">
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={4}
                  placeholder="How can we help you? Feel free to get in touch! *"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <div class="btn-wrap">
                  <div class="btn-link">
                    <input type="submit" value="Get in touch" />{" "}
                    <span class="btn-block color1 animation-bounce" />        
                  </div>
                </div>
              </div>
            </div>
          </form>
          <ToastContainer let:data={data}>
            <FlatToast {data}  />
        </ToastContainer>
        </div>
      </div>
    </div>
  </section>

   <!-- Maps  -->
  <section id="map">
    <div class="full-width">
      <div class="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2734843657886!2d7.000347514090398!3d4.893814541317066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d18148d471df%3A0x583a0128b91480a9!2s24%20Airport%20Rd%2C%20Rukpokwu%20500102%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1664984566729!5m2!1sen!2sng"
          width="100%"
          height={500}
          style='border: 0'
          loading="lazy"
          title="map"
        />
      </div>
    </div>
  </section>
  <!-- Testiominals -->
  <Testimonial testimonial={testimonial}/>

  <Client/>