// EmailTemplate is a JSX component that renders full HTML markup for a transactional email.
// It uses table-based layout and inlined styles for maximum email client compatibility.
// Note: Image sources currently point to localhost; update to absolute public URLs in production.
// The template includes:
// - Header with branding logos
// - Hero image/logo
// - Two call-to-action buttons (Contact and View Resume)
// - Footer with company line
const EmailTemplate = () => (
  <html dir="ltr" lang="en">
    {/* <head>
      <link
        rel="preload"
        as="image"
        href="      https://i.imgur.com/aeU7jHn.png"
      />
      <link
        rel="preload"
        as="image"
        href="      https://i.imgur.com/aeU7jHn.png"
      />

      <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
      <meta name="x-apple-disable-message-reformatting" />
    </head> */}


    <body style={{backgroundColor:"#f5f2ecff"}}>
      {/* Main email wrapper with neutral background color */}
      <table
        border="0"
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        align="center"
      >
        <tbody>
          <tr>
            <td
              style={{

                backgroundColor:"#f5f2ecff",
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
              }}
            >
              {/* Hidden preview preheader text to improve inbox previews */}
              <div
                style={{
                  display: "none",
                  overflow: "hidden",
                  lineHeight: "1px",
                  opacity: "0",
                  maxHeight: "0",
                  maxWidth: "0",
                }}
                data-skip-in-text="true"
              >
                <div>
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                  ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                </div>
              </div>
              <table
                align="center"
                width="100%"
                border="0"
                cellPadding="0"
                cellSpacing="0"
                role="presentation"
                style={{
                  maxWidth: "100%",
                  marginRight: "auto",
                  marginLeft: "auto",
                  paddingBottom: "48px",
                  paddingTop: 20,
                  width: "580px",
                }}
              >
                <tbody>
                  <tr style={{ width: "100%" }}>
                    <td>
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellPadding="0"
                        cellSpacing="0"
                        role="presentation"
                      >
                        <tbody>
                          <tr>
                            <td style={{ padding: 0, margin: 0 }}>
                              <img
                                alt="TEKINTRALINKED"
                                height="60"

                                src="http://www.Tekintralinked.com/images/TekIntraLinked-Logo-Only.png"
                                // src="http://www.tekintralinked.com/images/TekIntraLinked-Logo-Only.png"

                                style={{
                                  display: "block",
                                  outline: "none",
                                  border: "none",
                                  textDecoration: "none",
                                  width: 60,
                                  margin: 0,
                                }}
                              />
                            </td>
                            <td style={{ padding: -100, margin: -100 }}>
                              <img
                                alt="TEKINTRALINKED"
                                height="50"
                                
                                // src="http://www.tekintralinked.com/images/TekIntraLinked-Name-Dark.png"
                                
                                src="http://www.Tekintralinked.com/images/TekIntraLinked-Name-Dark.png"

                                style={{
                                  display: "block",
                                  outline: "none",
                                  border: "none",
                                  textDecoration: "none",
                                  width: 214,
                                  marginRight: 275,
                                  marginTop: 10,
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellPadding="0"
                        cellSpacing="0"
                        role="presentation"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <img
                                alt="TEK"
                                height="150"

                                src="http://www.Tekintralinked.com/images/TekIntraLinked-Logo-Only.png"

                                // src="http://www.tekintralinked.com/images/TekIntraLinked-Logo-Only.png"
                                style={{
                                  display: "block",
                                  outline: "none",
                                  border: "none",
                                  textDecoration: "none",
                                  marginRight: "auto",
                                  marginLeft: "auto",
                                  marginTop: 50,
                                  marginBottom: 16,
                                  borderRadius: 9999,
                                }}
                                width="150"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellPadding="0"
                        cellSpacing="0"
                        role="presentation"
                        style={{ paddingBottom: "20px" }}
                      >
                        <tbody>
                          <tr>
                            <td>
                              <table
                                align="center"
                                width="100%"
                                border="0"
                                cellPadding="0"
                                cellSpacing="0"
                                role="presentation"
                              >
                                <tbody style={{ width: "100%" }}>
                                  <tr style={{ width: "100%" }}>
                                    <p
                                      style={{
                                        fontSize: "32px",
                                        lineHeight: "1.3",
                                        fontWeight: 700,
                                        color: "rgb(72,72,72)",
                                        backgroundColor:"#f5f2ecff",
                                        borderRadius: 0.25 * 16,
                                        marginTop: 16,
                                        marginBottom: 16,
                                      }}
                                    >
                                      Real systems engineered from first
                                      principles.
                                    </p>

                                    <p
                                      style={{
                                        fontSize: "18px",
                                        lineHeight: "1.4",
                                        color: "rgb(72,72,72)",
                                        padding: 24,
                                        backgroundColor:"#f5f2ecff",
                                        borderRadius: 0.25 * 16,
                                        marginTop: 16,
                                        marginBottom: 16,
                                      }}
                                    >
                                      Founder-minded software engineer with a
                                      track record of building and launching
                                      real-world products from start to finish.
                                      Experienced in leading projects, making
                                      key decisions, and delivering systems that
                                      run reliably at scale. Execution-driven,
                                      adaptable, and focused on impact over
                                      process. 
                                    </p>






                                    {/* Primary CTA: Contact Us */}
                                    <a
                                      href="http://www.Tekintralinked.com/ContactUs"

                                      // href="http://tekintralinked.com/ContactUs"
                                      style={{
                                        lineHeight: "100%",
                                        textDecoration: "none",
                                        display: "block",
                                        maxWidth: "100%",
                                        msoPaddingAlt: 0,
                                        backgroundColor:
                                          "rgba(158, 198, 242, 1)",
                                        borderRadius: 0.25 * 16,
                                        color: "rgb(255,255,255)",
                                        fontSize: 18,
                                        paddingBottom: 19,
                                        paddingTop: 19,
                                        paddingRight: 30,
                                        paddingLeft: 30,
                                        textDecorationLine: "none",
                                        textAlign: "center",
                                      }}
                                      target="_blank"
                                    >
                                      <span>
                                        <i
                                          style={{
                                            msoFontWidth: "500%",
                                            msoTextRaise: 28.5,
                                          }}
                                          hidden
                                        >
                                          &#8202;&#8202;&#8202;
                                        </i>
                                      </span>

                                      <span
                                        style={{
                                          maxWidth: "100%",
                                          display: "inline-block",
                                          lineHeight: "120%",
                                          msoPaddingAlt: 0,
                                          msoTextRaise: 14.25,
                                        }}
                                      >
                                        Send me a message!
                                      </span>

                                      <span>
                                        <i
                                          style={{ msoFontWidth: "500%" }}
                                          hidden
                                        >
                                          &#8202;&#8202;&#8202;&#8203;
                                        </i>
                                      </span>
                                    </a>






                                  <br/>



                                    {/* Secondary CTA: View/download resume */}
                                    <a
                                      href="http://www.Tekintralinked.com/ErickCabreraResume_.pdf"
                                      
                                      download="ErickCabreraResume.pdf"
                                      style={{
                                        lineHeight: "100%",
                                        textDecoration: "none",
                                        display: "block",
                                        maxWidth: "100%",
                                        msoPaddingAlt: 0,
                                        backgroundColor:
                                          "rgba(158, 178, 242, 1)",
                                        borderRadius: 0.25 * 16,
                                        color: "rgb(255,255,255)",
                                        fontSize: 18,
                                        paddingBottom: 19,
                                        paddingTop: 19,
                                        paddingRight: 30,
                                        paddingLeft: 30,
                                        textDecorationLine: "none",
                                        textAlign: "center",
                                      }}
                                      target="_blank"
                                    >
                                      <span>
                                        <i
                                          style={{
                                            msoFontWidth: "500%",
                                            msoTextRaise: 28.5,
                                          }}
                                          hidden
                                        >
                                          &#8202;&#8202;&#8202;
                                        </i>
                                      </span>

                                      <span
                                        style={{
                                          maxWidth: "100%",
                                          display: "inline-block",
                                          lineHeight: "120%",
                                          msoPaddingAlt: 0,
                                          msoTextRaise: 14.25,
                                        }}
                                      >
                                        View my resume!
                                      </span>

                                      <span>
                                        <i
                                          style={{ msoFontWidth: "500%" }}
                                          hidden
                                        >
                                          &#8202;&#8202;&#8202;&#8203;
                                        </i>
                                      </span>
                                    </a>

                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/* Divider between content and footer */}
                      <hr
                        style={{
                          width: "100%",
                          border: "none",
                          borderTop: "1px solid #eaeaea",
                          borderColor: "rgb(204,204,204)",
                          marginBottom: 20,
                          marginTop: 20,
                        }}
                      />
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellPadding="0"
                        cellSpacing="0"
                        role="presentation"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <table
                                align="center"
                                width="100%"
                                border="0"
                                cellPadding="0"
                                cellSpacing="0"
                                role="presentation"
                              >
                                <tbody style={{ width: "100%" }}>
                                  <tr style={{ width: "100%" }}>
                                    <p
                                      style={{
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        color: "rgb(156,162,153)",
                                        marginBottom: 10,
                                        marginTop: 16,
                                      }}
                                    >
                                      TekIntralinked Ltd. Liability Co. © 2025
                                    </p>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <!--/$--> */}
    </body>
  </html>
);
// Export the email template component for use when sending emails
export default EmailTemplate;
