import { useState } from "react";
import axios from "axios";

export default function Contact() {
  // const [inputs, setInputs] = useState({});

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((values) => ({ ...values, [name]: value }));
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("http://localhost/portofolio_web/user/save", inputs)
  //     .then(function (response) {
  //       console.log(response.data);
  //     });
  //   console.log(inputs);
  // };
  return (
    <div class="contact main-container">
      <h1 class="section-title contact-title ">Kritik & Saran</h1>
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
  );
}
