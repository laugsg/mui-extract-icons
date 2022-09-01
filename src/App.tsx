import React from "react";
import "./App.css";

import imgIconFonts from "./assets/img/font-icons-components.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Icons</h1>
        <p style={{ fontSize: "20px" }}>
          This investigation has proved the following:
          <ul>
            <li>
              A How-To about extract icons from MUI Icons to craft an icon
              library.
            </li>
            <li>
              The iconType (that defines whether the icon should be sharp,
              rounded or outlined) was replaced by Props as html tag parameters
              ({'<tag param="value" ... />'})
            </li>
            <li>
              Some of the SvgIcon has SVG related props which are not required
              into Span elements revealing font icons.
              <ul>
                <li>
                  Those related to styling were kept like <code>color</code> or{" "}
                  <code>fontSize</code>.
                </li>
                <li>
                  The <code>children</code> behaviour was reproduced.
                </li>
                <li>
                  Classes for icon holder could be introduced by a{" "}
                  <code>classes</code> prop.
                </li>
                <li>
                  The shape based in enums and IconTypes is kept but slightly
                  changed to match the classes which holds the icons styles
                  through <code>shape</code> prop.
                </li>
              </ul>
            </li>
          </ul>
        </p>

        <article>
          <p>
            This project shows two different implementations
            <ul>
              <li>
                Icons as css classes prove How-To implement a icons library font
                build from scratch, using FontForge and Adobe Illustrator to
                finally call those icons as classes.
              </li>
              <li>
                Font Icon Component (image below) adapts the current icon
                Component (based in SvgIcons and {"&"} MUI) to use the font
                icons library (built for this purpose). Live examples can be
                found in the{" "}
                <a
                  className="App-link"
                  target="_blank"
                  href="https://bit.ly/3wCyGxZ"
                >
                  FDEL-158
                </a>{" "}
                of DS (because config needs of @vanilla-extract).
              </li>
            </ul>
          </p>
        </article>

        <section>
          <h2>Icons as css classes</h2>
          <ul>
            <li>Icons as css classes</li>
            <ul>
              <li>
                <span className="euro_outlined"></span> .euro_outlined
              </li>
              <li>
                <span className="euro_rounded"></span> .euro_rounded
              </li>
              <li>
                <span className="file_copy_outlined"></span> .file_copy_outlined
              </li>
              <li>
                <span className="file_copy_rounded"></span> .file_copy_rounded
              </li>
              <li>
                <span className="shopping_cart_outlined"></span>{" "}
                .shopping_cart_outlined
              </li>
              <li>
                <span className="shopping_cart_rounded"></span>{" "}
                .shopping_cart_rounded
              </li>
            </ul>
          </ul>

          <pre>
            {`
            @font-face {
              font-family: 'libraryFont';
              font-style: normal;
              src: local('libraryFont'), 
                url(./assets/fonts/finalLibraryFont.ttf) 
                format('truetype');
            }
            
            .euro_outlined:after {
              font-family: 'libraryFont';
              content: "\\2d2c"
            }
            `}
          </pre>
        </section>

        {/* Icons as Components */}
        <section>
          <h2>Icons as Components: Font Icon Compoent</h2>
          <p>
            The following image correspond to{" "}
            <code>packages/icon/src/icons/</code> where new files created just
            for this research (don't merge).
          </p>
          <img style={{ width: "300px" }} src={imgIconFonts} />
          <ul>
            <li>
              To see Font Icons Components go to{" "}
              <a
                className="App-link"
                target="_blank"
                href="https://bit.ly/3wCyGxZ"
              >
                FDEL-158
              </a>{" "}
              branch.
            </li>
            <li>
              To get the icons library visit{" "}
              <a
                className="App-link"
                href="https://mui-extract-icons.vercel.app/static/media/finalLibraryFont.d101264c3f7ed13404cb.ttf"
              >
                finalLibraryFont
              </a>
            </li>
          </ul>

          <hr />

          <h3>icons.css.ts into DS</h3>
          <pre>
            {`
            import { globalFontFace, style } from '@vanilla-extract/css';

            const libraryFont = 'libraryFont';

            globalFontFace(libraryFont, {
                src: 'local("libraryFont"), 
                  url("https://.../finalLibraryFont.ttf")'
            });
            
            export const person_outlined = style({
                ':after':{
                    fontFamily: libraryFont,
                    content: '\\2cc8'
                }
            });
            `}
          </pre>

          <hr />

          <h2>Font Icons Component</h2>
          <pre>
            {`
            const IconTypes = {
              [IconType.Rounded]: classNames.person_rounded,
              [IconType.Sharp]: 'StarSharp',
              [IconType.Outlined]: classNames.person_outlined
          };

          export default (props: object) => {
              return (
                <span 
                  style={{fontSize: '28px'}} 
                  className={IconTypes[IconType.Outlined]} 
                  {...props}
                ></span>
              )
          };
            `}
          </pre>

          <h2>Old SVG Icons Component</h2>
          <pre>
            {`
            const IconTypes = {
              [IconType.Rounded]: ArrowDownwardRounded,
              [IconType.Sharp]: ArrowDownwardSharp,
              [IconType.Outlined]: ArrowDownwardOutlined
          };
          
          export default (props: SvgIconProps) => {
              let { iconType } = useTheme();
              return createElement(IconTypes[iconType || IconType.Rounded], { ...props });
          };
            `}
          </pre>
        </section>

        <article>
          <h2>How-To extract icons from MUI Icons to craft an icon library.</h2>

          <p>
            Theorically, the process is not complex. This font icons library
            creation involved AI (Adobe Illustrator) and FontForge.
            <ol>
              <li>
                First, the target icons were located at the{' '}
                <a
                  className="App-link"
                  target="_blank"
                  href="https://github.com/mui/material-ui/tree/master/packages/mui-icons-material/material-icons"
                >
                  MUI Icons package
                </a>
              </li>
              <li>
                Then, the icons are opened as SVG files with latests version of
                AI.
              </li>
              <li>
                A squared template of 1000px x 1000px is created to match
                FontForge placeholders.
              </li>
              <li>The SVGs are fitted inside the template and saved.</li>
              <li>A blank font file is created inside FontForge.</li>
              <li>Templated based icons are placed inside the font file.</li>
              <li>
                Two possibilities:
                <ol>
                  <li>
                    Font Icons are settled as characters as A, B, C to show icon
                    1, 2, 3.
                  </li>
                  <li>
                    Font Icons are settled as Unicode characters
                    as \u2cc2 to show icon 1.
                  </li>
                </ol>
              </li>
            </ol>
          </p>
        </article>
      </header>
    </div>
  );
}

export default App;
