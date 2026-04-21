import AnimationUsageVisual from "../AnimationUsageVisual";
const FiveEasyWaysToReduceDigitalImpactArticleBody = () => {
  return (
    <>
      <section className="quote">
        <h3>"Every website is the sum of many small decisions."</h3>
        <p className="body-xl muted-text-white">
          The images you use, the colours you choose, the fonts you load, where
          the site is hosted, and how many scripts run in the background — all
          of these shape how heavy or light a website feels. Together, they
          define how quickly it loads, how much energy it consumes, and how
          clearly it communicates. This piece covers five areas where thoughtful
          choices make a real difference.
        </p>
      </section>

      <section className="image-size-section">
        <div className="image-size-intro">
          <div className="image-size-copy">
            <div className="article-step-heading">
              <span className="article-step-number">01</span>
              <h2>Reduce image sizes</h2>
            </div>
            <p className="body-lg muted-text-white">
              Images are often one of the heaviest parts of a website. Large,
              unoptimised files can slow down loading times and increase the
              amount of data users need to download. That affects both
              performance and overall efficiency.
            </p>
            <p className="body-lg muted-text-white">
              Reducing image size starts with using the correct dimensions,
              compressing files before upload, and choosing more efficient
              formats such as WebP or AVIF. In many cases, the visible
              difference is small, but the reduction in file weight can be
              significant.
            </p>
            <p className="body-lg muted-text-white">
              Using fewer images, avoiding unnecessarily large banners, and
              thinking carefully about where images actually support the content
              can also help create a lighter experience.
            </p>
          </div>

          <img
            className="image-format-weight"
            src="/images/Image format weight.svg"
            alt="Illustration comparing the file weight of PNG, JPEG, WebP, and AVIF image formats"
          />
        </div>

        <div className="image-comparison">
          <img
            className="comparison-image comparison-image--compressed"
            src="/images/dune-compressed.webp"
            alt=""
          />
          <img
            className="comparison-image comparison-image--original"
            src="/images/dune-original.jpg"
            alt=""
          />
          <span className="comparison-label comparison-label--left">
            Original
          </span>
          <span className="comparison-label comparison-label--right">
            Compressed
          </span>
          <span className="comparison-divider" aria-hidden="true"></span>
          <span className="comparison-handle" aria-hidden="true">
            <i className="bi bi-chevron-left"></i>
            <i className="bi bi-chevron-right"></i>
          </span>
        </div>

        <div className="compression-stat">
          <span>302KB → 76KB</span>
          <span>74,83% image compression</span>
        </div>
      </section>

      <section className="colour-usage-section">
        <div className="colour-usage-content">
          <div className="colour-usage-copy">
            <div className="article-step-heading">
              <span className="article-step-number">02</span>
              <h2>Choose colours carefully</h2>
            </div>
            <p className="body-lg muted-text-white">
              Colour choices affect more than visual identity. On some screen
              types, especially OLED displays, darker colours can use less power
              than bright white or highly luminous tones. While colour alone
              will not transform the full impact of a website, it can still be
              one of many small design choices that support a more efficient
              interface.
            </p>
            <p className="body-lg muted-text-white">
              This does not mean every website should be dark. The most
              important thing is still readability, accessibility, and brand
              fit. But where it makes sense, using restrained palettes, reducing
              very bright surfaces, and working with balanced contrast can
              contribute to a lighter digital experience.
            </p>
            <p className="body-lg muted-text-white">
              Colour should always be part of a broader design decision, not
              treated as a standalone “green” fix.
            </p>
          </div>
          <img
            src="/images/colour-power-usage-chart-oled-screens.svg"
            alt="Chart showing current draw for black, red, green, blue, and white on OLED screens"
          />
        </div>
      </section>

      <section className="font-usage-section">
        <div className="font-usage-copy">
          <div className="article-step-heading">
            <span className="article-step-number">03</span>
            <h2>Use system fonts when possible</h2>
          </div>
          <p className="body-lg muted-text-white">
            Custom fonts can strengthen a brand, but they also add extra files
            that need to be downloaded when a page loads. If multiple font
            families, weights, and styles are used, the total file size can grow
            quickly.
          </p>
          <p className="body-lg muted-text-white">
            System fonts offer a lighter alternative because they are already
            installed on most devices. This removes the need to load extra font
            files and can help pages load faster. In cases where a custom font
            is important for brand identity, it is still possible to reduce
            impact by limiting the number of weights and styles used.
          </p>
          <p className="body-lg muted-text-white">
            The goal is not to remove typography as a design tool, but to use it
            more intentionally.
          </p>
        </div>

        <div className="font-usage-visual">
          <img
            className="font-usage-aa"
            src="/images/Aa.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="font-usage-chart"
            src="/images/font style size.png"
            alt="Comparison of file size between custom fonts and system fonts"
          />
        </div>
      </section>

      <section className="green-hosting-section">
        <div className="green-hosting-content">
          <div className="green-hosting-copy">
            <div className="article-step-heading">
              <span className="article-step-number">04</span>
              <h2>Switch to greener hosting</h2>
            </div>
            <p className="body-lg muted-text-white">
              A website does not only exist in the browser. It also runs on
              servers that require energy to store and deliver content. Choosing
              a hosting provider that uses renewable energy or works with more
              efficient infrastructure can reduce part of the website&apos;s
              overall impact.
            </p>
            <p className="body-lg muted-text-white">
              Greener hosting is one of the more practical steps a business can
              take because it supports the site at the infrastructure level. It
              is also important to look beyond simple claims and check whether
              the provider explains how energy is sourced or what kind of
              environmental commitments they actually make.
            </p>
            <p className="body-lg muted-text-white">
              Hosting alone is not enough. A heavy website on green hosting is
              still a heavy website. But better hosting can be an important part
              of a more considered setup.
            </p>
          </div>
          <img
            src="/images/Green hosting.webp"
            alt="Server rack with green lighting"
          />
        </div>
      </section>

      <section className="animation-usage-section">
        <div className="animation-usage-content">
          <div className="animation-usage-copy">
            <div className="article-step-heading">
              <span className="article-step-number">05</span>
              <h2>Go easy on animation</h2>
            </div>
            <p className="body-lg muted-text-white">
              Not every visual effect improves the experience. Animations,
              masks, transforms, tracking tools, and other decorative or
              technical layers can quickly add weight to a website. When too
              many of these elements are used at once, pages can become heavier,
              slower, and more demanding to load and run.
            </p>
            <p className="body-lg muted-text-white">
              A more efficient website often comes from deciding what is truly
              necessary. This does not mean removing personality or interaction,
              but using effects with more intention. If an animation does not
              support understanding, or a script does not add real value, it may
              be better left out.
            </p>
            <p className="body-lg muted-text-white">
              Keeping things lighter can improve both performance and usability,
              while also making the experience feel clearer and more focused.
            </p>
          </div>
          <AnimationUsageVisual />
        </div>
      </section>
    </>
  );
};

export default FiveEasyWaysToReduceDigitalImpactArticleBody;
