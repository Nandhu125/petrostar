/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_CGPQV_2k.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_LFuOnswC.mjs';
import { $ as $$Header } from '../chunks/Header_DqklodL2.mjs';
import { a as $$Footer } from '../chunks/Footer_BYYkDBDn.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="wpo-breadcumb-area"> <div class="container"> <div class="row"> <div class="col-12"> <div class="wpo-breadcumb-wrap"> <h2>Contact</h2> <ul> <li><a href="index.html">Home</a></li> <li><span>Contact</span></li> </ul> </div> </div> </div> </div> </div>`;
}, "/home/afhm/alifsense/prod/petrostar/src/components/Breadcrumb.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})} ${maybeRenderHead()}<section class="wpo-contact-pg-section section-padding"> <div class="container"> <div class="row"> <div class="col col-lg-10 offset-lg-1"> <div class="office-info"> <div class="row"> <div class="col col-xl-4 col-lg-6 col-md-6 col-12"> <div class="office-info-item"> <div class="office-info-icon"> <div class="icon"> <i class="fi flaticon-placeholder"></i> </div> </div> <div class="office-info-text"> <h2>Address</h2> <p>Headquartered in Lagos, Nigeria</p> </div> </div> </div> <div class="col col-xl-4 col-lg-6 col-md-6 col-12"> <div class="office-info-item"> <div class="office-info-icon"> <div class="icon"> <i class="fi flaticon-email"></i> </div> </div> <div class="office-info-text"> <h2>Email Us</h2> <p>info@petrostartinnovative.com</p> <div>&nbsp;</div> </div> </div> </div> <div class="col col-xl-4 col-lg-6 col-md-6 col-12"> <div class="office-info-item"> <div class="office-info-icon"> <div class="icon"> <i class="fi flaticon-phone-call"></i> </div> </div> <div class="office-info-text"> <h2>Call Now</h2> <p>+1 800 123 456 789</p> <p>+1 800 123 654 987</p> </div> </div> </div> </div> </div> <div class="wpo-contact-title"> <h2>Have Any Question?</h2> <p>It is a long established fact that a reader will be distracted content of a page when looking.</p> </div> <div class="wpo-contact-form-area"> <form method="post" class="contact-validation-active" id="contact-form-main"> <div> <input type="text" class="form-control" name="name" id="name" placeholder="Your Name*"> </div> <div> <input type="email" class="form-control" name="email" id="email" placeholder="Your Email*"> </div> <div> <input type="text" class="form-control" name="adress" id="adress" placeholder="Adress"> </div> <div> <select name="service" class="form-control"> <option disabled="disabled" selected="">Services</option> <option>Mechanical Engineering</option> <option>Petroleum Refinery</option> <option>Power &amp; Energy</option> </select> </div> <div class="fullwidth"> <textarea class="form-control" name="note" id="note" placeholder="Message..."></textarea> </div> <div class="submit-area"> <button type="submit" class="theme-btn">Get in Touch</button> <div id="loader"> <i class="ti-reload"></i> </div> </div> <div class="clearfix error-handling-messages"> <div id="success">Thank you</div> <div id="error">Error occurred while sending email. Please try again later.</div> </div> </form> </div> </div> </div> </div> <!-- end container --> </section> <section class="wpo-contact-map-section"> <h2 class="hidden">Contact map</h2> <div class="wpo-contact-map"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1733317998971!5m2!1sen!2sin" allowfullscreen=""></iframe> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/afhm/alifsense/prod/petrostar/src/pages/contact.astro", void 0);

const $$file = "/home/afhm/alifsense/prod/petrostar/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
