import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <h2>HTML Elements</h2>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          <div>
            <h3>Anchor</h3>
            <a href="https://example.com">Example</a>
          </div>

          <div>
            <h3>Abbreviation</h3>
            <p>
              It's fun to use <abbr>HTML</abbr> (HyperText Markup Language)
            </p>
          </div>

          <div>
            <h3>Address</h3>
            <address>
              Call me at <a href="tel:555-555-5555">555-555-5555</a>
            </address>
          </div>

          <div>
            <h3>Article Contents</h3>
            <article>
              <h4>News</h4>
              <p>News content</p>
            </article>
          </div>

          <div>
            <h3>Aside</h3>
            <p>This is some text.</p>
            <aside>
              <p>
                This is some indirectly related text in an <code>aside</code>{" "}
                tag. I should probably style this.
              </p>
            </aside>
            <p>This is more text.</p>
          </div>

          <div>
            <h3>Embed Audio</h3>
            <audio controls loop preload="metadata">
              <source src="https://example.com/audio.mp3" type="audio/mpeg" />
            </audio>
          </div>

          <div>
            <h3>Bring Attention To</h3>
            <b>Important</b>
          </div>

          <div>
            <h3>Document Base URL</h3>
            <base target="_blank" />
          </div>

          <div>
            <h3>Bidirectional Isolate</h3>
            <bdi>Isolated text</bdi>
          </div>

          <div>
            <h3>Bidirectional Text Override</h3>
            <p>This text will go left to right.</p>
            <p>
              <bdo dir="rtl">This text will go right to left.</bdo>
            </p>
          </div>

          <div>
            <h3>Block Quotation</h3>
            <blockquote cite="https://www.huxley.net/bnw/four.html">
              <p>Block quote</p>
            </blockquote>
          </div>

          <div>
            <h3>Line Break</h3>
            <p>
              This is a broken
              <br />
              line
            </p>
          </div>

          <div>
            <h3>Button</h3>
            <button>Click me</button>
          </div>

          <div>
            <h3>Graphics Canvas</h3>
            <canvas id="my-canvas" width="50" height="50">
              Alt text
            </canvas>
            <button
              onClick={() => {
                const ctx = document
                  .getElementById("my-canvas")
                  .getContext("2d");
                ctx.fillStyle = "green";
                ctx.fillRect(0, 0, 50, 50);
              }}
            >
              Fill canvas
            </button>
          </div>

          <div>
            <h3>Table Caption</h3>
            <table>
              <caption style={{ captionSide: "bottom" }}>Table caption</caption>
              <thead>
                <tr>
                  <th>Table header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3>Citation</h3>
            <p>
              First sentence in{" "}
              <cite>
                <a href="http://www.george-orwell.org/1984/0.html">
                  Nineteen Eighty-Four
                </a>
              </cite>{" "}
              by George Orwell (Part 1, Chapter 1).
            </p>
          </div>

          <div>
            <h3>Inline Code</h3>
            <p>
              Here's some <code>code</code>
            </p>
          </div>

          <div>
            <h3>Data</h3>
            <data value="398">Product with id 398</data>
          </div>

          <div>
            <h3>Data List</h3>
            <input list="browsers" id="myBrowser" name="myBrowser" />
            <datalist id="browsers">
              <option value="Chrome"></option>
              <option value="Firefox"></option>
              <option value="Opera"></option>
              <option value="Safari"></option>
              <option value="Microsoft Edge"></option>
            </datalist>
            <br />
            <input type="time" list="popularHours" />
            <datalist id="popularHours">
              <option value="12:00"></option>
              <option value="13:00"></option>
              <option value="14:00"></option>
            </datalist>
            <br />
            <input
              type="range"
              list="tickmarks"
              min="0"
              max="100"
              id="tick"
              name="tick"
            />
            <datalist id="tickmarks">
              <option value="0"></option>
              <option value="10"></option>
              <option value="20"></option>
              <option value="30"></option>
            </datalist>
            <br />
            <input type="color" list="redColors" id="colors" />
            <datalist id="redColors">
              <option value="#800000"></option>
              <option value="#8B0000"></option>
              <option value="#A52A2A"></option>
              <option value="#DC143C"></option>
            </datalist>
          </div>

          <div>
            <h3>Deleted Text</h3>
            <blockquote>
              This has some <del>deleted</del> text.
            </blockquote>
          </div>

          <div>
            <h3>Details disclosure</h3>
            <details>
              <summary>Details</summary>
              <p>Details content</p>
            </details>
          </div>

          <div>
            <h3>Definition</h3>
            <p>
              A <dfn>definition</dfn> is something
            </p>
          </div>

          <div>
            <h3>Dialog</h3>
            <dialog id="my-dialog">
              <button
                onClick={() => document.getElementById("my-dialog").close()}
              >
                Close
              </button>
              <p>This is a dialog</p>
            </dialog>
            <button
              onClick={() => document.getElementById("my-dialog").showModal()}
            >
              Show modal dialog
            </button>
            <button onClick={() => document.getElementById("my-dialog").show()}>
              Show non-modal dialog
            </button>
          </div>

          <div>
            <h3>Description List</h3>
            <dl>
              <dt>
                Description Term 1 (<code>{`<dt>`}</code>)
              </dt>
              <dd>
                Description Details 1 (<code>{`<dd>`}</code>)
              </dd>

              <dt>Description Term 2</dt>
              <dd>Description Details 2</dd>
            </dl>
          </div>

          <div>
            <h3>Emphasis</h3>
            <p>
              Don't put the em<em>pha</em>sis on the wrong syllable
            </p>
          </div>

          <div>
            <h3>Embed</h3>
            <embed
              src="https://example.com"
              type="video/mp4"
              width="100"
              height="100"
            />
          </div>

          <div>
            <h3>Field Set</h3>
            <fieldset>
              <legend>Choose your adventure</legend>

              <input type="radio" id="adventure-1" name="adventure" value="1" />
              <label htmlFor="adventure-1">Adventure 1</label>
              <br />

              <input type="radio" id="adventure-2" name="adventure" value="2" />
              <label htmlFor="adventure-2">Adventure 2</label>
              <br />
            </fieldset>
          </div>

          <div>
            <h3>Figure with caption</h3>
            <figure>
              <img src="https://placekitten.com/100/100" alt="Kitten" />
              <figcaption>Figure caption</figcaption>
            </figure>
          </div>

          <div>
            <h3>Footer</h3>
            <footer>
              <p>© 2023 Charlie</p>
            </footer>
          </div>

          <div>
            <h3>Form</h3>
            <form action="" method="get" class="form-example">
              <div class="form-example">
                <label for="name">Enter your name: </label>
                <input type="text" name="name" id="name" required />
              </div>
              <div class="form-example">
                <label for="email">Enter your email: </label>
                <input type="email" name="email" id="email" required />
              </div>
              <button>submit</button>
            </form>
          </div>

          <div>
            <h3>Section Heading</h3>
            <h4>h3</h4>
            <h5>h5</h5>
            <h6>h6</h6>
          </div>

          <div>
            <h3>Header</h3>
            <header>
              <h4>Header</h4>
            </header>
          </div>
        </section>

        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
