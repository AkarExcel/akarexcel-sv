<script>
  import {browser} from '$app/environment'
  import {goto} from '$app/navigation'

  let st;
  let show = false
  let navbar;
  let logo;

  if(browser){
    window.addEventListener('scroll', handleScroll);

  }

  function handleScroll() {
    st = window.scrollY;
    navbar = document.querySelector('.nilsbrown-header')
    logo = document.querySelector(".nilsbrown-header .logo> img")
    if(st > 150){
      if (!navbar?.classList.contains('scrolled')) {
             navbar?.classList.add('scrolled');
             logo?.setAttribute('src', '/images/logo-dark.png');
         }
    }
    if (st < 150) {
         if (navbar?.classList.contains('scrolled')) {
             navbar?.classList.remove('scrolled','sleep');
             logo?.setAttribute('src', '/images/logo-dark.png');
         }
     }
     if (st > 350) {
         if (!navbar?.classList.contains('awake')) {
             navbar?.classList.add('awake');
         }
     }
     if (st < 350) {
         if (navbar?.classList.contains('awake')) {
             navbar?.classList.remove('awake');
             navbar?.classList.add('sleep');
         }
     }
  }

  const handleShow = () => {
      show = !show
      if(browser){
      document.body.classList.toggle("menu-open")
    }
  }

  const navMenu = () => {
    show = false
  }

  const Links = [
      {
      name: 'Home',
      link: '/',
      },
      {
        name: 'About',
        link: '/about'
      },
      {
        name: 'Portfolio',
        link: '/portfolios'
      },
      // {
      //   name: "Resume",
      //   link: "/resume"
      // },
      {
        name: "Services",
        link: "/services"
      },
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'Contact',
        link: '/contact'
      }
  ]

</script>

<nav class={`nilsbrown-menu ${show?"nilsbrown-menu-show": ""}`} id="nilsbrown-navbar-spy">
    <div class="nilsbrown-menu-inner" id="nilsbrown-navbar">
      <ul class="list-unstyled">

        {#each Links as link, index}
 
          <li key={index} class={`${show?"is-show":""}`}>
              <a href={link.link} on:click={navMenu}>
              {link.name}
              </a>
            
            </li>
        {/each}
      </ul>
    </div>
  </nav>
  <!-- Header -->
  <header class="nilsbrown-header">
    <div class="container">
      <div class="row align-items-center">
        <!-- Logo -->
        <div class="col-8 col-md-8">
          <div class="logo-wrap">
            <a href="/">
            
              <div class="logo" style="padding-down:200px"
              >
                <img 
                src="/images/logo-dark.png"
                alt=""
                width={300}
                height={75} />
              </div>
            
            </a>
          </div>
        </div>
       <!-- Menu Burger -->
        <div class="col-4 col-md-4 text-right nilsbrown-menu-burger-wrap">
          {" "}
          <a href="/#" class={`nilsbrown-nav-toggle nilsbrown-js-nav-toggle ${show?" active": ""}`} on:click|preventDefault={handleShow}>
            <i />
          </a>{" "}
        </div>
      </div>
    </div>
  </header>
