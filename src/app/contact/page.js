import Link from "next/link";

function Contact() {
  return (
    <>
      <div id="page">
        <h6>contact</h6>
      </div>
      {/*page#*/}

      <div id="contact">
        <div className="container">
          <div className="contact row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 align_items">
            <div className="contact_maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6150137.490723349!2d7.429121050857228!3d41.178236526385774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2zxLB0YWx5YQ!5e0!3m2!1str!2str!4v1704627996755!5m2!1str!2str"
                width="100%"
                height="400"
              ></iframe>
            </div>
            <div className="contact_form">
              <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <textarea placeholder="Message" rows="7"></textarea>
                <Link
                  className="read_more"
                  type="submit"
                  value="sende"
                  href="/"
                >
                  send
                </Link>
              </form>
            </div>
            {/*contact_form*/}
          </div>
          {/*contact*/}
        </div>
        {/*container*/}
      </div>
      {/*contact#*/}
    </>
  );
}

export default Contact;
