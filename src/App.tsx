import React from "react";
import "./App.css";

import imgIconFonts from "./assets/img/font-icons-components.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Icons</h1>
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
                <a className="App-link" href="https://bit.ly/3wCyGxZ">
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
            <li>To see Font Icons Components go to FDEL-158 branch.</li>
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
      </header>
    </div>
  );
}

export default App;
