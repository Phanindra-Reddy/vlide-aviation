import NewsLetter from "../NewsLetter/NewsLetter";

const Contact = () => {
  return (
    <div>
      <section id="contact" class="py-16 bg-white">
        <div class="container max-w-[1440px] mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about our services or want to learn more about
              Vlide Aviation? We're here to help.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div class="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form id="contact-form">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your email"
                      required=""
                    />
                  </div>
                </div>

                <div class="mb-6">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your phone number"
                  />
                </div>

                <div class="mb-6">
                  <label
                    for="subject"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="mb-6">
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help you?"
                    required=""
                  ></textarea>
                </div>

                <div class="mb-6">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        class="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="terms" class="text-gray-600">
                        I agree to the{" "}
                        <a
                          href="#privacy"
                          class="text-blue-600 hover:underline"
                        >
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="#terms" class="text-blue-600 hover:underline">
                          Terms of Service
                        </a>
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <div class="bg-gray-900 text-white rounded-xl p-8 shadow-lg mb-8">
                <h3 class="text-2xl font-bold mb-6">Contact Information</h3>

                <div class="space-y-6">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 bg-gray-800 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold mb-1">Headquarters</h4>
                      <p class="text-gray-300">123 Innovation Way</p>
                      <p class="text-gray-300">San Francisco, CA 94103</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="flex-shrink-0 bg-gray-800 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold mb-1">Phone</h4>
                      <p class="text-gray-300">General: (555) 123-4567</p>
                      <p class="text-gray-300">Support: (555) 987-6543</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="flex-shrink-0 bg-gray-800 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold mb-1">Email</h4>
                      <p class="text-gray-300">info@vlideaviation.com</p>
                      <p class="text-gray-300">support@vlideaviation.com</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="flex-shrink-0 bg-gray-800 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold mb-1">Business Hours</h4>
                      <p class="text-gray-300">Monday - Friday: 8am - 8pm</p>
                      <p class="text-gray-300">Saturday - Sunday: 9am - 5pm</p>
                    </div>
                  </div>
                </div>

                <div class="mt-8">
                  <h4 class="font-semibold mb-3">Connect With Us</h4>
                  <div class="flex space-x-4">
                    <a
                      href="#"
                      class="bg-gray-800 hover:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      class="bg-gray-800 hover:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      class="bg-gray-800 hover:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      class="bg-gray-800 hover:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="w-full max-w-[1440px] mx-auto pt-10 pb-20 space-y-4">
        <img
          class="w-full h-[400px] rounded-xl object-cover"
          src="https://teksi.in/assets/blr_map-B3Pzk3Ko.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
