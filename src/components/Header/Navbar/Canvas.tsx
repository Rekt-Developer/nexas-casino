export const Canvas = () => {
  return (
    <>
      <div className="offCanvas__content">
        <h2 className="title">
          Best Seller of Month Ideas for <span>NFT Wallet</span>
        </h2>

        <div className="offCanvas__contact">
          <h4 className="small-title">CONTACT US</h4>
          <ul className="offCanvas__contact-list list-wrap">
            <li>
              <a href="tel:+9 333 222 5557">+9 333 222 5557</a>
            </li>

            <li>
              <a href="mailto:info@webmail.com">info@webmail.com</a>
            </li>

            <li>New Central Park W7 Street ,New York</li>
          </ul>
        </div>

        <div className="offCanvas__newsletter">
          <h4 className="small-title">Subscribe</h4>
          <div className="offCanvas__newsletter-form">
            <input
              type="email"
              name="EMAIL"
              placeholder="Get News &amp; Updates"
            />
            <button type="submit">
              <i className="icon-[mingcute--send-fill]" />
            </button>
          </div>
        </div>
        <p className="text-[#adb0bc]">
          Subscribe dolor sitamet, consectetur adiping eli. Duis esollici tudin
          augue.
        </p>

        <ul className="offCanvas__social ">
          <li>
            <a href="#">
              <i className="icon-[mingcute--twitter-fill]" />
            </a>
          </li>

          <li>
            <a href="#">
              <i className="icon-[mingcute--facebook-fill]" />
            </a>
          </li>

          <li>
            <a href="#">
              <i className="icon-[mingcute--linkedin-fill]" />
            </a>
          </li>

          <li>
            <a href="#">
              <i className="icon-[mingcute--ins-fill]" />
            </a>
          </li>

          <li>
            <a href="#">
              <i className="icon-[mingcute--pinterest-fill]" />
            </a>
          </li>

          <li>
            <a href="#">
              <i className="icon-[mingcute--youtube-fill]" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
