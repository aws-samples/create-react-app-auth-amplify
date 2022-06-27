export default function Footer() {
  return (
    <div className="footer text-light-gray">
      <div className="footer__bottom bg-dark-gray pt-3 px-lg-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xl-7 text-center text-xl-left">
              <p className="mb-0">
                DUNCAN PRINT GROUP, 1 MUNDELLS, WELWYN GARDEN CITY, AL7 1EU,
                UNITED KINGDOM | <span className="pr-lg-1"> +441707387799</span>
              </p>
            </div>
            <div className="col-12 col-xl-5 text-center text-xl-right py-3 pb-xl-0">
              <p className="mb-0 text-uppercase">
                <a
                  className="text-footer-gray px-2"
                  href="https://www.duncanprint.co.uk/terms-and-conditions"
                  title="Terms & Conditions"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms & Conditions
                </a>{" "}
                |
                <a
                  className=" text-footer-gray px-2 "
                  href="https://www.duncanprint.co.uk/privacy-policy"
                  title="Privacy Policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>{" "}
                |
                <a
                  className=" text-footer-gray px-2 "
                  href="/cookie-policy/"
                  title="Cookie Policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cookie Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
