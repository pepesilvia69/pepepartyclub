import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ActiveUsers from '../components/active-users'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pepe Party Club</title>
        <meta property="og:title" content="Pepe Party Club" />
        <meta property="og:description" content="Pepe lovers &amp; investors" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2877cb5c-97b1-4b3f-be57-b64fae779415/bbe1b7d7-f1fb-4a5c-aeb1-9c5724685d37?org_if_sml=1&amp;q=80"
        />
      </Helmet>
      <section className="home-hero">
        <div className="home-menu">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-logo"
            />
            <div className="home-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <img
                  alt="pastedImage"
                  src="/playground_assets/ppc%20%5B3%5D-200h.png"
                  className="home-logo1"
                />
                <div className="home-links1">
                  <span className="Link">Ribbit</span>
                  <span className="Link">Team</span>
                  <span className="Link">FAQs</span>
                </div>
              </div>
              <div className="home-right">
                <div className="home-get-started">
                  <span className="home-text06">MInt</span>
                </div>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/playground_assets/options-200h.png"
                    className="home-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <DangerousHTML
              html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
            ></DangerousHTML>
          </div>
        </div>
        <header className="home-header">
          <h1 className="home-text07">Pepe Party Club</h1>
          <p className="home-text08">🐸</p>
          <div className="home-get-started1">
            <span className="home-text09">Twitter</span>
          </div>
        </header>
        <div className="home-dashboard-preview">
          <div className="home-outline">
            <img
              alt="pastedImage"
              src="/playground_assets/ppc%20%5B1%5D-1400w.png"
              loading="lazy"
              className="home-image"
            />
          </div>
        </div>
      </section>
      <section className="home-quote-container"></section>
      <section className="home-statistics">
        <div className="home-container1">
          <ActiveUsers Caption="Combos" Statistic="18Mil+"></ActiveUsers>
          <ActiveUsers Caption="Pepes Partying" Statistic="3,333"></ActiveUsers>
          <ActiveUsers
            Caption="+ 0.0069eth extra"
            Statistic="1free/wallet"
          ></ActiveUsers>
          <ActiveUsers Caption="Copyright" Statistic="CC0"></ActiveUsers>
        </div>
      </section>
      <section className="home-how-it-works">
        <div className="home-centered-container">
          <div className="home-heading">
            <span className="home-text10 title">Team</span>
          </div>
          <div className="home-category">
            <div className="home-headng">
              <span className="home-text11">Hustle</span>
              <span className="home-text12">CoFounder/ Twitter Shitposter</span>
            </div>
            <div className="home-container2">
              <img
                alt="pastedImage"
                src="/playground_assets/ppc%20%5B5%5D-1200w.png"
                className="home-pasted-image"
              />
            </div>
          </div>
          <div className="home-row">
            <div className="home-category1">
              <div className="home-headng1">
                <span className="home-text13">Mugsy</span>
                <span className="home-text14">
                  Pepe Whale/ Project CoFounder
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/playground_assets/ppc%20%5B7%5D-400h.png"
                className="home-pasted-image1"
              />
            </div>
            <div className="home-category2">
              <div className="home-headng2">
                <span className="home-text15">Pepe Silvia</span>
                <span className="home-text16">Web3 Dev / Pepe Maxi</span>
              </div>
              <img
                alt="pastedImage"
                src="/playground_assets/ppc%20%5B6%5D-400h.png"
                className="home-pasted-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading1">
            <span className="home-text17 title">
              <span>Become part of the Party Club</span>
              <br></br>
            </span>
            <div className="home-get-started2 template-button">
              <span className="home-text20">
                <span>Mint (Soon)</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-images">
            <img
              alt="image"
              src="/playground_assets/ppc%20%5B3%5D-200h.png"
              className="home-image1"
            />
          </div>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-heading2">
          <span className="home-text23 title">Frequently asked questions</span>
        </div>
        <div className="home-accordion">
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header1">
              <span className="home-text24">
                — Where is Pepe Party Club?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text25">Ethereum</span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="home-header2">
              <span className="home-text26">— What is Pepe Party Club?</span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text27">
                Pepe lovers &amp; investors ribbiting around the pond chilling.
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header3">
              <span className="home-text28">— Why is Pepe Party Club&gt;</span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text29">
                A meme party of Pepe Coin needs a team of shitposters to do
                it&apos;s bidding in the NFT space
              </span>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-bottom">
          <img
            alt="pastedImage"
            src="/playground_assets/ppc%20%5B8%5D-200h.png"
            className="home-branding"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/ppc%20%5B7%5D-400h.png"
            className="home-branding1"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/ppc%20%5B6%5D-400h.png"
            className="home-branding2"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/ppc%20%5B4%5D-200h.png"
            className="home-branding3"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/ppc%20%5B3%5D-200h.png"
            className="home-branding4"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/ppc%20%5B1%5D-1400w.png"
            className="home-branding5"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/ppc%20%5B10%5D-200h.png"
            className="home-branding6"
          />
        </div>
      </footer>
    </div>
  )
}

export default Home
