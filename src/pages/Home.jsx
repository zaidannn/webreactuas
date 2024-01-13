import Footer from "../components/Footer";
import Contact from "./Contact";
// import img from "../images/bg.jpg";
export default function Home() {
  return (
    <>
      <>
        <>
          <>
            <div class="main-container">
              <div class="nav">
                <div class="logo">
                  <a href="/">MZ</a>
                </div>

                <nav>
                  <ul>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#portfolios">Hobby</a>
                    </li>
                    <li>
                      <a href="#skills">Skills</a>
                    </li>
                    <li>
                      <a href="#contact">contact</a>
                    </li>
                    <li>
                      <a href="/Resume.pdf" target="_blank">
                        <button class="btn">Resume</button>
                      </a>
                    </li>
                  </ul>
                </nav>

                <div class="burger">
                  <div class="line-1"></div>
                  <div class="line-2"></div>
                  <div class="line-3"></div>
                </div>
              </div>
              <section id="hero">
                <div class="hero-left">
                  <h3 class="pre-title">My name is</h3>
                  <h1 class="hero-name">
                    M <span>Zaidan</span> Naufal Fikri
                  </h1>
                  <p>
                    "Seorang peminat berat teknologi dengan hasrat untuk
                    memecahkan masalah dan menciptakan solusi inovatif. Saya
                    percaya bahwa teknologi dapat membantu menciptakan dunia
                    yang lebih baik. Melalui pengalaman saya dalam mengembangkan
                    aplikasi dan sistem, saya berusaha untuk memberikan
                    kontribusi positif bagi masyarakat dan memastikan bahwa
                    teknologi dapat digunakan untuk kebaikan bersama. Selain
                    itu, saya senang berkolaborasi dengan orang-orang kreatif
                    dari berbagai latar belakang untuk menghasilkan solusi yang
                    lebih baik dan lebih cerdas."
                  </p>
                </div>
                <div class="hero-right">
                  <img src="./images/download (3).jpg" alt="person standing" />
                </div>
              </section>
            </div>
            <section id="services">
              <div class="services main-container">
                <h3 class="pre-title"></h3>
                <h1 class="section-title services-title">Minat</h1>

                <div class="grid-3">
                  <div class="service">
                    <div class="service-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 9c0-.552-.447-1-1-1-.729 0-1.295.79-.832 1.521-1.199 1.439-3.355 2.979-4.355 2.438-1.201-.65-.277-3.302.451-4.982.957.149 1.736-.588 1.736-1.477 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .452.204.853.52 1.127-.646 1.646-2.329 3.81-3.41 3.591-1.347-.268-1.69-3.448-1.685-5.287.62-.183 1.075-.751 1.075-1.431 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .68.455 1.248 1.075 1.432.006 1.839-.338 5.019-1.685 5.287-1.08.218-2.763-1.945-3.41-3.592.316-.274.52-.675.52-1.127 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .889.779 1.626 1.736 1.476.729 1.681 1.652 4.333.451 4.982-1 .541-3.155-.999-4.355-2.438.463-.73-.103-1.52-.832-1.52-.553 0-1 .448-1 1 0 .708.727 1.22 1.413.905 4.277 4.767 3.587 10.584 3.587 12.095h14c0-1.445-.707-7.308 3.587-12.095.686.315 1.413-.197 1.413-.905zm-15.42 3.001c1.277.513 2.562.148 3.42-.834.858.982 2.143 1.347 3.42.834.393 1.211 1.447 1.945 2.555 2.052-.381.976-.686 1.981-.854 2.947h-10.242c-.168-.965-.473-1.971-.854-2.947 1.103-.106 2.161-.835 2.555-2.052zm-1.58 7.999v-1h10v1h-10z" />
                      </svg>
                    </div>
                    <h4>UI/UX design</h4>
                    <p></p>
                  </div>

                  <div class="service">
                    <div class="service-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 9c0-.552-.447-1-1-1-.729 0-1.295.79-.832 1.521-1.199 1.439-3.355 2.979-4.355 2.438-1.201-.65-.277-3.302.451-4.982.957.149 1.736-.588 1.736-1.477 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .452.204.853.52 1.127-.646 1.646-2.329 3.81-3.41 3.591-1.347-.268-1.69-3.448-1.685-5.287.62-.183 1.075-.751 1.075-1.431 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .68.455 1.248 1.075 1.432.006 1.839-.338 5.019-1.685 5.287-1.08.218-2.763-1.945-3.41-3.592.316-.274.52-.675.52-1.127 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .889.779 1.626 1.736 1.476.729 1.681 1.652 4.333.451 4.982-1 .541-3.155-.999-4.355-2.438.463-.73-.103-1.52-.832-1.52-.553 0-1 .448-1 1 0 .708.727 1.22 1.413.905 4.277 4.767 3.587 10.584 3.587 12.095h14c0-1.445-.707-7.308 3.587-12.095.686.315 1.413-.197 1.413-.905zm-15.42 3.001c1.277.513 2.562.148 3.42-.834.858.982 2.143 1.347 3.42.834.393 1.211 1.447 1.945 2.555 2.052-.381.976-.686 1.981-.854 2.947h-10.242c-.168-.965-.473-1.971-.854-2.947 1.103-.106 2.161-.835 2.555-2.052zm-1.58 7.999v-1h10v1h-10z" />
                      </svg>
                    </div>
                    <h4>Application development</h4>
                    <p></p>
                  </div>

                  <div class="service">
                    <div class="service-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 9c0-.552-.447-1-1-1-.729 0-1.295.79-.832 1.521-1.199 1.439-3.355 2.979-4.355 2.438-1.201-.65-.277-3.302.451-4.982.957.149 1.736-.588 1.736-1.477 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .452.204.853.52 1.127-.646 1.646-2.329 3.81-3.41 3.591-1.347-.268-1.69-3.448-1.685-5.287.62-.183 1.075-.751 1.075-1.431 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .68.455 1.248 1.075 1.432.006 1.839-.338 5.019-1.685 5.287-1.08.218-2.763-1.945-3.41-3.592.316-.274.52-.675.52-1.127 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .889.779 1.626 1.736 1.476.729 1.681 1.652 4.333.451 4.982-1 .541-3.155-.999-4.355-2.438.463-.73-.103-1.52-.832-1.52-.553 0-1 .448-1 1 0 .708.727 1.22 1.413.905 4.277 4.767 3.587 10.584 3.587 12.095h14c0-1.445-.707-7.308 3.587-12.095.686.315 1.413-.197 1.413-.905zm-15.42 3.001c1.277.513 2.562.148 3.42-.834.858.982 2.143 1.347 3.42.834.393 1.211 1.447 1.945 2.555 2.052-.381.976-.686 1.981-.854 2.947h-10.242c-.168-.965-.473-1.971-.854-2.947 1.103-.106 2.161-.835 2.555-2.052zm-1.58 7.999v-1h10v1h-10z" />
                      </svg>
                    </div>
                    <h4>software engineer</h4>
                    <p></p>
                  </div>
                </div>
              </div>
            </section>
          </>
          <section id="portfolios">
            <div class="portfolios main-container">
              <h3 class="pre-title"></h3>
              <h1 class="section-title portfolios-title">Hobby</h1>

              <div class="grid-3">
                <div class="portfolio">
                  <div class="portfolio-cover">
                    <img src="./images/mobilelegends.jpg" alt="portfolio 1" />
                  </div>

                  <div class="portfolio-info">
                    <div class="portfolio-title">
                      <h4>Bermain Game</h4>
                      <a href="/" class="portfolio-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 9c0-.552-.447-1-1-1-.729 0-1.295.79-.832 1.521-1.199 1.439-3.355 2.979-4.355 2.438-1.201-.65-.277-3.302.451-4.982.957.149 1.736-.588 1.736-1.477 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .452.204.853.52 1.127-.646 1.646-2.329 3.81-3.41 3.591-1.347-.268-1.69-3.448-1.685-5.287.62-.183 1.075-.751 1.075-1.431 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .68.455 1.248 1.075 1.432.006 1.839-.338 5.019-1.685 5.287-1.08.218-2.763-1.945-3.41-3.592.316-.274.52-.675.52-1.127 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .889.779 1.626 1.736 1.476.729 1.681 1.652 4.333.451 4.982-1 .541-3.155-.999-4.355-2.438.463-.73-.103-1.52-.832-1.52-.553 0-1 .448-1 1 0 .708.727 1.22 1.413.905 4.277 4.767 3.587 10.584 3.587 12.095h14c0-1.445-.707-7.308 3.587-12.095.686.315 1.413-.197 1.413-.905zm-15.42 3.001c1.277.513 2.562.148 3.42-.834.858.982 2.143 1.347 3.42.834.393 1.211 1.447 1.945 2.555 2.052-.381.976-.686 1.981-.854 2.947h-10.242c-.168-.965-.473-1.971-.854-2.947 1.103-.106 2.161-.835 2.555-2.052zm-1.58 7.999v-1h10v1h-10z" />
                        </svg>
                      </a>
                    </div>

                    <div class="portfolio-tags">
                      <div>Mobile Legends</div>
                      <div>Call of Dragons</div>
                    </div>

                    <p>
                      Mobile Legends bukan hanya permainan bagi saya, tetapi
                      juga merupakan cara untuk membangun keterampilan tim,
                      meningkatkan konsentrasi, dan belajar bekerja sama dengan
                      orang lain. Ini adalah hobi yang memberikan saya
                      kesenangan, tantangan, dan kesempatan untuk terus
                      berkembang dalam dunia permainan video.
                    </p>
                  </div>
                </div>

                <div class="portfolio">
                  <div class="portfolio-cover">
                    <img src="./images/musik.jpg" alt="portfolio 1" />
                  </div>

                  <div class="portfolio-info">
                    <div class="portfolio-title">
                      <h4>Mendengarkan musik</h4>
                      <a href="/" class="portfolio-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 9c0-.552-.447-1-1-1-.729 0-1.295.79-.832 1.521-1.199 1.439-3.355 2.979-4.355 2.438-1.201-.65-.277-3.302.451-4.982.957.149 1.736-.588 1.736-1.477 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .452.204.853.52 1.127-.646 1.646-2.329 3.81-3.41 3.591-1.347-.268-1.69-3.448-1.685-5.287.62-.183 1.075-.751 1.075-1.431 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .68.455 1.248 1.075 1.432.006 1.839-.338 5.019-1.685 5.287-1.08.218-2.763-1.945-3.41-3.592.316-.274.52-.675.52-1.127 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .889.779 1.626 1.736 1.476.729 1.681 1.652 4.333.451 4.982-1 .541-3.155-.999-4.355-2.438.463-.73-.103-1.52-.832-1.52-.553 0-1 .448-1 1 0 .708.727 1.22 1.413.905 4.277 4.767 3.587 10.584 3.587 12.095h14c0-1.445-.707-7.308 3.587-12.095.686.315 1.413-.197 1.413-.905zm-15.42 3.001c1.277.513 2.562.148 3.42-.834.858.982 2.143 1.347 3.42.834.393 1.211 1.447 1.945 2.555 2.052-.381.976-.686 1.981-.854 2.947h-10.242c-.168-.965-.473-1.971-.854-2.947 1.103-.106 2.161-.835 2.555-2.052zm-1.58 7.999v-1h10v1h-10z" />
                        </svg>
                      </a>
                    </div>

                    <div class="portfolio-tags">
                      <div>Pop</div>
                      <div>K-Pop</div>
                    </div>

                    <p>
                      Mendengarkan musik bagi saya adalah cara untuk melepaskan
                      diri dari tekanan sehari-hari dan mengeksplorasi berbagai
                      suasana hati. Pada saat-saat bahagia, saya mungkin akan
                      mendengarkan lagu-lagu bersemangat yang membuat saya ingin
                      bergerak. Di saat-saat sedih, musik bisa menjadi teman
                      setia yang mengerti perasaan saya.
                    </p>
                  </div>
                </div>

                <div class="portfolio">
                  <div class="portfolio-cover">
                    <img src="./images/rebahan.jpg" alt="portfolio 1" />
                  </div>

                  <div class="portfolio-info">
                    <div class="portfolio-title">
                      <h4>Rebahan</h4>
                      <a href="/" class="portfolio-link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 9c0-.552-.447-1-1-1-.729 0-1.295.79-.832 1.521-1.199 1.439-3.355 2.979-4.355 2.438-1.201-.65-.277-3.302.451-4.982.957.149 1.736-.588 1.736-1.477 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .452.204.853.52 1.127-.646 1.646-2.329 3.81-3.41 3.591-1.347-.268-1.69-3.448-1.685-5.287.62-.183 1.075-.751 1.075-1.431 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .68.455 1.248 1.075 1.432.006 1.839-.338 5.019-1.685 5.287-1.08.218-2.763-1.945-3.41-3.592.316-.274.52-.675.52-1.127 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .889.779 1.626 1.736 1.476.729 1.681 1.652 4.333.451 4.982-1 .541-3.155-.999-4.355-2.438.463-.73-.103-1.52-.832-1.52-.553 0-1 .448-1 1 0 .708.727 1.22 1.413.905 4.277 4.767 3.587 10.584 3.587 12.095h14c0-1.445-.707-7.308 3.587-12.095.686.315 1.413-.197 1.413-.905zm-15.42 3.001c1.277.513 2.562.148 3.42-.834.858.982 2.143 1.347 3.42.834.393 1.211 1.447 1.945 2.555 2.052-.381.976-.686 1.981-.854 2.947h-10.242c-.168-.965-.473-1.971-.854-2.947 1.103-.106 2.161-.835 2.555-2.052zm-1.58 7.999v-1h10v1h-10z" />
                        </svg>
                      </a>
                    </div>

                    <div class="portfolio-tags">
                      <div>Rebahan aja</div>
                      <div>Rebahan banget</div>
                    </div>

                    <p>
                      Saat rebahan, saya sering melakukan berbagai hal yang
                      menenangkan diri, seperti membaca buku, menonton film atau
                      serial TV, atau mendengarkan musik favorit. Ini adalah
                      waktu di mana saya dapat meresapi momen keheningan dan
                      membiarkan pikiran saya berjalan bebas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
        <section id="skills">
          <div class="skills main-container">
            <h3 class="pre-title"></h3>
            <h1 class="section-title skills-title">skills & education</h1>

            <div class="skills-grid">
              <div class="skills-left">
                <div class="education">
                  <div class="line">
                    <div class=""></div>
                  </div>

                  <div class="education-info">
                    <h4 class="education-title">MtsN II Pandeglang</h4>
                    <p>2015 - 2018</p>
                    <h4 education-years></h4>
                  </div>
                </div>
                <div class="education">
                  <div class="line">
                    <div class=""></div>
                  </div>

                  <div class="education-info">
                    <h4 class="education-title">SMAN 04 Pandeglang</h4>
                    <p>2018 - 2021</p>
                    <h4 education-years></h4>
                  </div>
                </div>
                <div class="education">
                  <div class="line">
                    <div class=""></div>
                  </div>

                  <div class="education-info">
                    <h4 class="education-title">
                      Universitas MUhammadiyah Malang
                    </h4>
                    <p>2021 - Sekarang</p>
                    <h4 education-years></h4>
                  </div>
                </div>
              </div>
              <div class="skills-right">
                <p></p>

                <div class="skills-list">
                  <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>-----</li>
                    <li>-----</li>
                  </ul>

                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>----</li>
                    <li>----</li>
                    <li>----</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <section id="contact">
        <div class="contact main-container">
          {/* < />!-- <h1 class="section-title contact-title ">Kritik & Saran</h1> --> */}
          <div class="contact-left">
            <form
              class="contact-form"
              action="https://formspree.io/f/xrgwyraw"
              method="POST"
            >
              <div>
                <input type="text" placeholder="Name" name="name" />
              </div>
              <div>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <button class="btn-submit">Send Message</button>
              </div>
            </form>
          </div>
          <div class="contact-right">
            <div class="contact-item">
              <div class="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 9c0-.552-.447-1-1-1-.729 0-1.295.79-.832 1.521-1.199 1.439-3.355 2.979-4.355 2.438-1.201-.65-.277-3.302.451-4.982.957.149 1.736-.588 1.736-1.477 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .452.204.853.52 1.127-.646 1.646-2.329 3.81-3.41 3.591-1.347-.268-1.69-3.448-1.685-5.287.62-.183 1.075-.751 1.075-1.431 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .68.455 1.248 1.075 1.432.006 1.839-.338 5.019-1.685 5.287-1.08.218-2.763-1.945-3.41-3.592.316-.274.52-.675.52-1.127 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .889.779 1.626 1.736 1.476.729 1.681 1.652 4.333.451 4.982-1 .541-3.155-.999-4.355-2.438.463-.73-.103-1.52-.832-1.52-.553 0-1 .448-1 1 0 .708.727 1.22 1.413.905 4.277 4.767 3.587 10.584 3.587 12.095h14c0-1.445-.707-7.308 3.587-12.095.686.315 1.413-.197 1.413-.905zm-15.42 3.001c1.277.513 2.562.148 3.42-.834.858.982 2.143 1.347 3.42.834.393 1.211 1.447 1.945 2.555 2.052-.381.976-.686 1.981-.854 2.947h-10.242c-.168-.965-.473-1.971-.854-2.947 1.103-.106 2.161-.835 2.555-2.052zm-1.58 7.999v-1h10v1h-10z" />
                </svg>
              </div>
              <div class="contact-item-detail">
                <h4>Address</h4>
                <p>Malang, Jawa timur, Indonesia</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 9c0-.552-.447-1-1-1-.729 0-1.295.79-.832 1.521-1.199 1.439-3.355 2.979-4.355 2.438-1.201-.65-.277-3.302.451-4.982.957.149 1.736-.588 1.736-1.477 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .452.204.853.52 1.127-.646 1.646-2.329 3.81-3.41 3.591-1.347-.268-1.69-3.448-1.685-5.287.62-.183 1.075-.751 1.075-1.431 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .68.455 1.248 1.075 1.432.006 1.839-.338 5.019-1.685 5.287-1.08.218-2.763-1.945-3.41-3.592.316-.274.52-.675.52-1.127 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .889.779 1.626 1.736 1.476.729 1.681 1.652 4.333.451 4.982-1 .541-3.155-.999-4.355-2.438.463-.73-.103-1.52-.832-1.52-.553 0-1 .448-1 1 0 .708.727 1.22 1.413.905 4.277 4.767 3.587 10.584 3.587 12.095h14c0-1.445-.707-7.308 3.587-12.095.686.315 1.413-.197 1.413-.905zm-15.42 3.001c1.277.513 2.562.148 3.42-.834.858.982 2.143 1.347 3.42.834.393 1.211 1.447 1.945 2.555 2.052-.381.976-.686 1.981-.854 2.947h-10.242c-.168-.965-.473-1.971-.854-2.947 1.103-.106 2.161-.835 2.555-2.052zm-1.58 7.999v-1h10v1h-10z" />
                </svg>
              </div>
              <div class="contact-item-detail">
                <h4>Phone</h4>
                <p>08777*****</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 9c0-.552-.447-1-1-1-.729 0-1.295.79-.832 1.521-1.199 1.439-3.355 2.979-4.355 2.438-1.201-.65-.277-3.302.451-4.982.957.149 1.736-.588 1.736-1.477 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .452.204.853.52 1.127-.646 1.646-2.329 3.81-3.41 3.591-1.347-.268-1.69-3.448-1.685-5.287.62-.183 1.075-.751 1.075-1.431 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .68.455 1.248 1.075 1.432.006 1.839-.338 5.019-1.685 5.287-1.08.218-2.763-1.945-3.41-3.592.316-.274.52-.675.52-1.127 0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5c0 .889.779 1.626 1.736 1.476.729 1.681 1.652 4.333.451 4.982-1 .541-3.155-.999-4.355-2.438.463-.73-.103-1.52-.832-1.52-.553 0-1 .448-1 1 0 .708.727 1.22 1.413.905 4.277 4.767 3.587 10.584 3.587 12.095h14c0-1.445-.707-7.308 3.587-12.095.686.315 1.413-.197 1.413-.905zm-15.42 3.001c1.277.513 2.562.148 3.42-.834.858.982 2.143 1.347 3.42.834.393 1.211 1.447 1.945 2.555 2.052-.381.976-.686 1.981-.854 2.947h-10.242c-.168-.965-.473-1.971-.854-2.947 1.103-.106 2.161-.835 2.555-2.052zm-1.58 7.999v-1h10v1h-10z" />
                </svg>
              </div>
              <div class="contact-item-detail">
                <h4>Email</h4>
                <p>zaidannaufalfikri@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
